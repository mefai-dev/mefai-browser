const { app, BrowserWindow, ipcMain, session, dialog } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const { spawn } = require("child_process");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    titleBarStyle: "hidden",
    backgroundColor: "#0B0E11",
    icon: path.join(__dirname, "assets", "icon.png"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
      webviewTag: true,
    },
  });

  mainWindow.loadFile("ui/browser.html");
  mainWindow.on("closed", () => { mainWindow = null; });
}

// ===== AUTO UPDATE =====
autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

autoUpdater.on("update-available", (info) => {
  console.log("[Mefai] Update available:", info.version);
  mainWindow?.webContents.send("update:status", `Updating to v${info.version}...`);
});

autoUpdater.on("update-downloaded", (info) => {
  console.log("[Mefai] Update downloaded:", info.version);
  mainWindow?.webContents.send("update:status", `v${info.version} ready — restart to apply`);
  // Show notification to user
  if (mainWindow) {
    mainWindow.webContents.send("update:ready", info.version);
  }
});

autoUpdater.on("error", (err) => {
  console.warn("[Mefai] Update check error:", err.message);
});

// ===== APP STARTUP =====
app.whenReady().then(async () => {
  // Load Chrome extension if available
  const extPath = path.join(__dirname, "extension");
  try {
    const fs = require("fs");
    if (fs.existsSync(extPath)) {
      await session.defaultSession.loadExtension(extPath, { allowFileAccess: true });
      console.log("[Mefai] Chrome extension loaded from:", extPath);
    }
  } catch (err) {
    console.warn("[Mefai] Extension load skipped:", err.message);
  }

  createWindow();

  // Check for updates after window is ready
  setTimeout(() => {
    autoUpdater.checkForUpdates().catch(() => {});
  }, 5000);

  // Check for updates every 30 minutes
  setInterval(() => {
    autoUpdater.checkForUpdates().catch(() => {});
  }, 30 * 60 * 1000);
});

app.on("window-all-closed", () => app.quit());

// Window controls
ipcMain.on("win:minimize", () => mainWindow?.minimize());
ipcMain.on("win:maximize", () => {
  mainWindow?.isMaximized() ? mainWindow.unmaximize() : mainWindow?.maximize();
});
ipcMain.on("win:close", () => mainWindow?.close());

// Manual update restart
ipcMain.on("update:restart", () => {
  autoUpdater.quitAndInstall(false, true);
});

// Terminal support — try node-pty first, fallback to child_process
let ptyProcess = null;
let shellProcess = null;

ipcMain.on("terminal:start", (event) => {
  try {
    const pty = require("node-pty");
    const shell = process.platform === "win32" ? "powershell.exe" : "bash";
    ptyProcess = pty.spawn(shell, [], {
      name: "xterm-256color",
      cols: 120,
      rows: 30,
      cwd: process.env.HOME || process.env.USERPROFILE,
      env: process.env,
    });
    ptyProcess.onData((data) => event.sender.send("terminal:data", data));
    ptyProcess.onExit(() => event.sender.send("terminal:exit"));
    return;
  } catch {}

  try {
    const isWin = process.platform === "win32";
    const shell = isWin ? "powershell.exe" : "bash";
    const args = isWin ? ["-NoLogo", "-NoProfile"] : [];
    shellProcess = spawn(shell, args, {
      cwd: process.env.HOME || process.env.USERPROFILE,
      env: process.env,
      shell: false,
    });
    const cwd = process.env.HOME || process.env.USERPROFILE;
    event.sender.send("terminal:data", `Mefai Terminal [${cwd}]\r\n$ `);
    shellProcess.stdout.on("data", (data) => {
      event.sender.send("terminal:data", data.toString().replace(/\n/g, "\r\n"));
    });
    shellProcess.stderr.on("data", (data) => {
      event.sender.send("terminal:data", data.toString().replace(/\n/g, "\r\n"));
    });
    shellProcess.on("exit", () => event.sender.send("terminal:exit"));
  } catch (err) {
    event.sender.send("terminal:error", "Terminal error: " + err.message);
  }
});

ipcMain.on("terminal:input", (_event, data) => {
  if (ptyProcess) ptyProcess.write(data);
  else if (shellProcess) shellProcess.stdin.write(data);
});

ipcMain.on("terminal:resize", (_event, cols, rows) => {
  try { ptyProcess?.resize(cols, rows); } catch {}
});

app.on("before-quit", () => {
  try { ptyProcess?.kill(); } catch {}
  try { shellProcess?.kill(); } catch {}
});
