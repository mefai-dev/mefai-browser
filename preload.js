const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("mefai", {
  // Window controls
  minimize: () => ipcRenderer.send("win:minimize"),
  maximize: () => ipcRenderer.send("win:maximize"),
  close: () => ipcRenderer.send("win:close"),

  // Terminal
  startTerminal: () => ipcRenderer.send("terminal:start"),
  sendTerminal: (data) => ipcRenderer.send("terminal:input", data),
  resizeTerminal: (cols, rows) => ipcRenderer.send("terminal:resize", cols, rows),
  onTerminalData: (cb) => ipcRenderer.on("terminal:data", (_e, data) => cb(data)),
  onTerminalError: (cb) => ipcRenderer.on("terminal:error", (_e, msg) => cb(msg)),
  onTerminalExit: (cb) => ipcRenderer.on("terminal:exit", () => cb()),

  // Auto-update
  onUpdateStatus: (cb) => ipcRenderer.on("update:status", (_e, msg) => cb(msg)),
  onUpdateReady: (cb) => ipcRenderer.on("update:ready", (_e, ver) => cb(ver)),
  restartForUpdate: () => ipcRenderer.send("update:restart"),
});
