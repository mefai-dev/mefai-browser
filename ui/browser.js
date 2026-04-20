// Mefai Browser ··· Chrome-like Trading Browser with SuperBSC + BSAI

// ============ SUPERBSC PANELS ============
const PANEL_CATEGORIES = {
  "Market": [
    { id: "market-overview", name: "Market Overview" },
    { id: "market-pulse", name: "Market Pulse" },
    { id: "price-chart", name: "Price Chart" },
    { id: "market-dominance", name: "Market Dominance" },
    { id: "btc-macro", name: "BTC Macro" },
    { id: "volatility-rank", name: "Volatility Rank" },
    { id: "momentum-screener", name: "Momentum Screener" },
    { id: "momentum-cascade", name: "Momentum Cascade" },
  ],
  "Whale & Smart Money": [
    { id: "whale-tracker", name: "Whale Tracker" },
    { id: "whale-intel", name: "Whale Intel" },
    { id: "whale-footprint", name: "Whale Footprint" },
    { id: "smart-money-radar", name: "Smart Money Radar" },
    { id: "smart-flow", name: "Smart Flow" },
    { id: "smart-inflow", name: "Smart Inflow" },
    { id: "smart-accumulation", name: "Smart Accumulation" },
    { id: "sm-acceleration", name: "SM Acceleration" },
    { id: "top-traders", name: "Top Traders" },
    { id: "trader-divergence", name: "Trader Divergence" },
  ],
  "Futures & Derivatives": [
    { id: "futures-pulse", name: "Futures Pulse" },
    { id: "funding-scanner", name: "Funding Scanner" },
    { id: "funding-heatmap", name: "Funding Heatmap" },
    { id: "funding-arb", name: "Funding Arb" },
    { id: "funding-alert", name: "Funding Alert" },
    { id: "oi-surge", name: "OI Surge" },
    { id: "liquidation-heatmap", name: "Liquidation Heatmap" },
    { id: "liquidation-magnet", name: "Liquidation Magnet" },
    { id: "basis-spread", name: "Basis Spread" },
    { id: "term-structure", name: "Term Structure" },
    { id: "taker-pressure", name: "Taker Pressure" },
    { id: "binance-options", name: "Binance Options" },
    { id: "deribit-options", name: "Deribit Options" },
  ],
  "Order Book & Volume": [
    { id: "order-book", name: "Order Book" },
    { id: "order-book-intel", name: "Order Book Intel" },
    { id: "volume-profile", name: "Volume Profile" },
    { id: "spread-monitor", name: "Spread Monitor" },
    { id: "market-impact", name: "Market Impact" },
    { id: "microstructure-health", name: "Microstructure" },
  ],
  "On Chain": [
    { id: "onchain-stats", name: "On Chain Stats" },
    { id: "stablecoin-flow", name: "Stablecoin Flow" },
    { id: "capital-rotation", name: "Capital Rotation" },
    { id: "protocol-tvl", name: "Protocol TVL" },
    { id: "protocol-revenue", name: "Protocol Revenue" },
    { id: "chain-growth", name: "Chain Growth" },
    { id: "wallet-tracker", name: "Wallet Tracker" },
    { id: "wallet-risk-score", name: "Wallet Risk Score" },
    { id: "tx-explorer", name: "TX Explorer" },
  ],
  "DeFi & DEX": [
    { id: "dex-chart", name: "DEX Chart" },
    { id: "dex-intel", name: "DEX Intel" },
    { id: "dex-volume", name: "DEX Volume" },
    { id: "swap-router", name: "Swap Router" },
    { id: "liquidity-lifecycle", name: "Liquidity Lifecycle" },
    { id: "yield-radar", name: "Yield Radar" },
    { id: "earn-comparator", name: "Earn Comparator" },
  ],
  "Meme & Social": [
    { id: "meme-rush", name: "Meme Rush" },
    { id: "meme-rank", name: "Meme Rank" },
    { id: "social-hype", name: "Social Hype" },
    { id: "social-divergence", name: "Social Divergence" },
    { id: "topic-rush", name: "Topic Rush" },
    { id: "sentiment-convergence", name: "Sentiment" },
  ],
  "Token Analysis": [
    { id: "token-profile", name: "Token Profile" },
    { id: "token-audit", name: "Token Audit" },
    { id: "token-scout", name: "Token Scout" },
    { id: "token-search", name: "Token Search" },
    { id: "token-grad", name: "Token Grad" },
    { id: "trending-tokens", name: "Trending Tokens" },
    { id: "ath-tracker", name: "ATH Tracker" },
  ],
  "Signals & Trading": [
    { id: "smart-signals", name: "Smart Signals" },
    { id: "signal-pnl", name: "Signal PnL" },
    { id: "trade-setup", name: "Trade Setup" },
    { id: "trade-journal", name: "Trade Journal" },
    { id: "grid-analyzer", name: "Grid Analyzer" },
    { id: "auto-scanner", name: "Auto Scanner" },
    { id: "spot-trading", name: "Spot Trading" },
  ],
  "Intelligence": [
    { id: "intelligence-dashboard", name: "Intelligence Hub" },
    { id: "intelligence-feed", name: "Intelligence Feed" },
    { id: "intelligence-chat", name: "Intelligence Chat" },
    { id: "alpha-radar", name: "Alpha Radar" },
    { id: "anomaly-composite", name: "Anomaly Composite" },
    { id: "contract-mutation", name: "Contract Mutation" },
  ],
  "Mefai": [
    { id: "mefai-tweet", name: "Quick Tweet", action: "tweet" },
    { id: "mefai-bsai", name: "Mefai AI Chat", action: "bsai" },
    { id: "mefai-superbsc", name: "SuperBSC Terminal", action: "superbsc" },
    { id: "mefai-browser-page", name: "Mefai Browser", action: "browser" },
    { id: "mefai-home", name: "Mefai Home", action: "home" },
  ],
  "Tools": [
    { id: "p2p-scanner", name: "P2P Scanner" },
    { id: "convert-best-rate", name: "Best Rate" },
    { id: "tax-report", name: "Tax Report" },
    { id: "margin-optimizer", name: "Margin Optimizer" },
    { id: "cross-exchange-arb", name: "Cross Exchange Arb" },
    { id: "trading-rules", name: "Trading Rules" },
    { id: "goplus-scanner", name: "GoPlus Scanner" },
    { id: "multi-chain-wallet", name: "Multi Chain Wallet" },
    { id: "nft-portfolio", name: "NFT Portfolio" },
  ],
};

const SHORTCUTS = [
  { name: "Binance", url: "https://www.binance.com", icon: "B", color: "#F0B90B" },
  { name: "Futures", url: "https://www.binance.com/en/futures/BTCUSDT", icon: "F", color: "#F0B90B" },
  { name: "CMC", url: "https://coinmarketcap.com", icon: "C", color: "#3861FB" },
  { name: "SuperBSC", url: "https://mefai.io/superbsc", icon: "S", color: "#F0B90B" },
  { name: "Mefai", url: "https://mefai.io", icon: "M", color: "#F0B90B" },
  { name: "TradingView", url: "https://www.tradingview.com", icon: "TV", color: "#2962FF" },
  { name: "DEXScreener", url: "https://dexscreener.com", icon: "DX", color: "#7B61FF" },
  { name: "BscScan", url: "https://bscscan.com", icon: "BS", color: "#F0B90B" },
  { name: "Earn", url: "https://www.binance.com/en/earn", icon: "E", color: "#0ECB81" },
  { name: "Launchpad", url: "https://launchpad.binance.com", icon: "LP", color: "#F0B90B" },
];

const QUICK_PANELS = [
  "market-overview", "whale-tracker", "funding-scanner", "liquidation-heatmap",
  "smart-signals", "meme-rush", "oi-surge", "alpha-radar",
];

const TICKER_SYMBOLS = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "SOLUSDT"];

// ============ STATE ============
let tabs = [];
let activeTabId = null;
let terminalStarted = false;

// ============ TABS ============
function createTab(url) {
  const id = "tab-" + Date.now() + Math.random().toString(36).slice(2, 6);
  const tab = { id, url: url || null, title: "New Tab", loading: false };
  tabs.push(tab);
  if (url) createWebview(tab);
  setActiveTab(id);
  renderTabs();
  return id;
}

function closeTab(id, e) {
  if (e) e.stopPropagation();
  const idx = tabs.findIndex((t) => t.id === id);
  if (idx === -1) return;
  const wv = document.getElementById("wv-" + id);
  if (wv) wv.remove();
  tabs.splice(idx, 1);
  if (tabs.length === 0) { createTab(); return; }
  if (activeTabId === id) setActiveTab(tabs[Math.min(idx, tabs.length - 1)].id);
  renderTabs();
}

function setActiveTab(id) {
  activeTabId = id;
  const tab = tabs.find((t) => t.id === id);
  document.querySelectorAll("#webview-container webview").forEach((wv) => {
    wv.classList.toggle("active", wv.id === "wv-" + id);
  });
  document.getElementById("newtab-page").classList.toggle("active", !tab?.url);
  document.getElementById("url-input").value = tab?.url || "";
  renderTabs();
  if (!tab?.url) setTimeout(() => document.getElementById("newtab-search-input")?.focus(), 50);
}

function renderTabs() {
  document.getElementById("tabs").innerHTML = tabs.map((tab) => `
    <div class="tab ${tab.id === activeTabId ? "active" : ""}" onclick="setActiveTab('${tab.id}')">
      <span class="tab-title">${escHtml(tab.title)}</span>
      <button class="tab-close" onclick="closeTab('${tab.id}', event)">&#x2715;</button>
    </div>
  `).join("");
}

// ============ WEBVIEW ============
function createWebview(tab) {
  const container = document.getElementById("webview-container");
  const wv = document.createElement("webview");
  wv.id = "wv-" + tab.id;
  wv.src = tab.url;
  wv.setAttribute("allowpopups", "");
  wv.setAttribute("partition", "persist:mefai");
  wv.addEventListener("page-title-updated", (e) => { tab.title = e.title || tab.url; renderTabs(); });
  wv.addEventListener("did-navigate", (e) => {
    tab.url = e.url;
    if (tab.id === activeTabId) document.getElementById("url-input").value = e.url;
  });
  wv.addEventListener("did-navigate-in-page", (e) => {
    if (e.isMainFrame) { tab.url = e.url; if (tab.id === activeTabId) document.getElementById("url-input").value = e.url; }
  });
  wv.addEventListener("new-window", (e) => { e.preventDefault(); createTab(e.url); });
  container.appendChild(wv);
}

// ============ NAVIGATION ============
function navigateTo(input) {
  if (!input.trim()) return;
  let url = input.trim();
  if (!/^https?:\/\//i.test(url)) {
    url = /^[a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z]{2,}/.test(url) ? "https://" + url : "https://www.google.com/search?q=" + encodeURIComponent(url);
  }
  const tab = tabs.find((t) => t.id === activeTabId);
  if (!tab) return;
  tab.url = url;
  const wv = document.getElementById("wv-" + tab.id);
  if (wv) { wv.src = url; } else { createWebview(tab); }
  document.getElementById("newtab-page").classList.remove("active");
  document.getElementById("url-input").value = url;
  document.querySelectorAll("#webview-container webview").forEach((w) => {
    w.classList.toggle("active", w.id === "wv-" + tab.id);
  });
  renderTabs();
}

function navBack() { document.getElementById("wv-" + activeTabId)?.goBack?.(); }
function navForward() { document.getElementById("wv-" + activeTabId)?.goForward?.(); }
function navReload() { document.getElementById("wv-" + activeTabId)?.reload?.(); }

// ============ PANEL SIDEBAR ============
function renderPanelSidebar() {
  const container = document.getElementById("panel-categories");
  container.innerHTML = Object.entries(PANEL_CATEGORIES).map(([cat, panels]) => `
    <div class="panel-cat" data-cat="${cat}">
      <div class="panel-cat-title" onclick="this.parentElement.classList.toggle('collapsed')">
        ${cat}
        <span style="font-size:9px">${panels.length}</span>
      </div>
      <div class="panel-cat-items">
        ${panels.map((p) => {
          const onclick = p.action
            ? `handleMefaiAction('${p.action}')`
            : `openPanel('${p.id}')`;
          return `<div class="panel-item" onclick="${onclick}" data-name="${p.name.toLowerCase()}">
            <span class="panel-dot"></span>
            <span>${p.name}</span>
          </div>`;
        }).join("")}
      </div>
    </div>
  `).join("");
}

function filterPanels(query) {
  const q = query.toLowerCase();
  document.querySelectorAll(".panel-item").forEach((el) => {
    el.style.display = el.dataset.name.includes(q) ? "" : "none";
  });
}

function openPanel(panelId) {
  const superbscUrl = "https://mefai.io/superbsc";
  const existing = tabs.find((t) => t.url && t.url.includes("mefai.io/superbsc"));

  function activatePanel(tabId) {
    const wv = document.getElementById("wv-" + tabId);
    if (!wv) return;
    // Wait for page to load, then switch to the panel via layout system
    const inject = `
      (function() {
        const reg = document.querySelector('[data-layout="${panelId}"]');
        if (reg) { reg.click(); return; }
        // Try command palette approach
        const panels = document.querySelectorAll('.panel');
        panels.forEach(p => p.style.display = 'none');
        const target = document.querySelector('${panelId}-panel') || document.querySelector('[is="${panelId}-panel"]');
        if (target) { target.style.display = ''; if (target.refresh) target.refresh(); }
      })();
    `;
    setTimeout(() => {
      try { wv.executeJavaScript(inject); } catch {}
    }, existing ? 500 : 3000);
  }

  if (existing) {
    setActiveTab(existing.id);
    activatePanel(existing.id);
  } else {
    const id = createTab(superbscUrl);
    activatePanel(id);
  }

  document.querySelectorAll(".panel-item").forEach((el) => el.classList.remove("active"));
  document.querySelector(`.panel-item[onclick="openPanel('${panelId}')"]`)?.classList.add("active");
}

// ============ SIDEBAR TOGGLES ============
function togglePanel(panel) {
  const panelSidebar = document.getElementById("panel-sidebar");
  const bsaiSidebar = document.getElementById("bsai-sidebar");
  const termSidebar = document.getElementById("terminal-sidebar");
  const btnPanels = document.getElementById("btn-panels");
  const btnBsai = document.getElementById("btn-bsai");
  const btnTerminal = document.getElementById("btn-terminal");

  if (panel === "panels") {
    const isHidden = panelSidebar.classList.contains("hidden");
    panelSidebar.classList.toggle("hidden");
    btnPanels.classList.toggle("active", isHidden);
  } else if (panel === "bsai") {
    const isHidden = bsaiSidebar.classList.contains("hidden");
    bsaiSidebar.classList.toggle("hidden");
    termSidebar.classList.add("hidden");
    btnBsai.classList.toggle("active", isHidden);
    btnTerminal.classList.remove("active");
  } else if (panel === "terminal") {
    const isHidden = termSidebar.classList.contains("hidden");
    termSidebar.classList.toggle("hidden");
    bsaiSidebar.classList.add("hidden");
    btnTerminal.classList.toggle("active", isHidden);
    btnBsai.classList.remove("active");
    if (isHidden && !terminalStarted) {
      mefai.startTerminal();
      terminalStarted = true;
      mefai.onTerminalData((data) => {
        const out = document.getElementById("term-output");
        if (out) { out.textContent += data; out.scrollTop = out.scrollHeight; }
      });
      mefai.onTerminalError((msg) => {
        const out = document.getElementById("term-output");
        if (out) out.textContent += "\n[Error] " + msg + "\n";
      });
    }
    setTimeout(() => document.getElementById("term-input")?.focus(), 100);
  }
}

function sendTermCmd(cmd) {
  if (!cmd.trim()) return;
  mefai.sendTerminal(cmd + "\r");
}

// ============ MEFAI TWEETS ============
const MEFAI_TWEETS = [
  "Just discovered @maboroshiAI Browser and it changed how I trade. Built-in AI + terminal + live prices = no more tab chaos. Try it free: mefai.io/browser",
  "Why are you still switching between 15 tabs to trade? Mefai Browser has Binance, AI assistant, and 85+ trading panels in ONE window. mefai.io/browser",
  "Mefai AI just wrote me a complete grid bot in 30 seconds. While I was reading the Binance chart. In the same window. This is the future. mefai.io/bsai",
  "The SuperBSC terminal has 85+ panels: whale tracking, liquidation heatmaps, funding scanners, smart money radar. All free. mefai.io/superbsc",
  "Stop paying for TradingView premium. Mefai SuperBSC gives you more data, more panels, more analysis. For free. mefai.io/superbsc",
  "Asked Mefai AI to build a DCA bot for BNB. Got production-ready code in 45 seconds. With error handling. And Binance testnet support. mefai.io/bsai",
  "Mefai Browser = Chrome + Bloomberg Terminal + AI assistant. Built for crypto traders. Free forever for early users. mefai.io/browser",
  "Whale alert: $42M ETH moved to Binance. I saw it in real-time on Mefai SuperBSC whale tracker. While my bot was running in the terminal. Same window.",
  "Funding rate is 0.15% on $BTC. My Mefai dashboard showed me this + the arb opportunity + auto-generated the hedging code. All in one screen.",
  "Every trading tool you need. Zero subscriptions. Zero API keys to manage. Just download Mefai Browser and trade. mefai.io/browser",
  "Mefai AI understands 59 Binance Skills. It doesn't hallucinate endpoints. It knows the difference between LIMIT and STOP_MARKET. mefai.io/bsai",
  "Built a liquidation cascade detector with Mefai AI in 2 minutes. It monitors 200 pairs and alerts me before the liquidation happens. This is insane.",
  "The Mefai Browser has a built-in terminal. You can run your trading bots RIGHT NEXT to your Binance tab. No more alt-tabbing. mefai.io/browser",
  "I replaced TradingView, Coinglass, DeBank, and 3 Chrome extensions with Mefai SuperBSC. One tool. 85+ panels. Free. mefai.io/superbsc",
  "Mefai AI just analyzed my portfolio correlation matrix and found that 80% of my holdings move together. Time to diversify. mefai.io/bsai",
  "Smart money is accumulating $SOL according to Mefai smart money radar. On-chain data doesn't lie. mefai.io/superbsc",
  "Mefai Browser auto-detects your OS. One click download. 30 seconds to install. Instant access to every trading tool. mefai.io/browser",
  "The funding heatmap on Mefai SuperBSC just saved me from a short squeeze. Funding was -0.3% across 12 altcoins. Reversal incoming.",
  "Asked Mefai AI: 'Build me a market maker bot'. Got 200 lines of production code with spread management, inventory control, and risk limits.",
  "Mefai is not another ChatGPT wrapper. It's a purpose-built trading intelligence engine. It only does one thing: make you trade better. mefai.io/bsai",
  "OI surge detected on $DOGE: +$180M in 2 hours. Mefai flagged it before the 15% pump. Data wins. mefai.io/superbsc",
  "Free today. $MEFAI token-gated tomorrow. Early users will be remembered. mefai.io/browser",
  "Just built a cross-exchange arbitrage scanner with Mefai AI. Monitors Binance vs Bybit vs OKX spreads. Took 3 prompts.",
  "Mefai Browser has a price ticker in the tab bar. BTC ETH BNB SOL prices always visible. No need to check another site.",
  "The taker buy/sell pressure panel on SuperBSC is criminally underrated. It shows you WHO is buying and selling in real-time.",
  "Mefai AI speaks your language. Turkish? Done. Spanish? Done. Chinese? Done. But the code it writes is always production-grade.",
  "85 panels. 59 skills. 30 API keys. 0 cost. Mefai is scaling to handle thousands of traders simultaneously. mefai.io/bsai",
  "Built a stablecoin yield farming scanner with Mefai AI. It finds the highest APY BSC pools and auto-checks for rug risk.",
  "The order book intel panel shows hidden walls, spoofing patterns, and iceberg orders. Bloomberg doesn't even have this.",
  "Mefai Browser is open source. Check the code yourself: github.com/mefai-dev/mefai-browser. Nothing hidden. Everything transparent.",
];

function postRandomTweet() {
  const tweet = MEFAI_TWEETS[Math.floor(Math.random() * MEFAI_TWEETS.length)];
  const url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweet);
  createTab(url);
}

function handleMefaiAction(action) {
  switch (action) {
    case "tweet": postRandomTweet(); break;
    case "bsai": togglePanel("bsai"); break;
    case "superbsc": createTab("https://mefai.io/superbsc"); break;
    case "browser": createTab("https://mefai.io/browser"); break;
    case "home": createTab("https://mefai.io"); break;
  }
}

// ============ SHORTCUTS ============
function renderShortcuts() {
  document.getElementById("newtab-shortcuts").innerHTML = SHORTCUTS.map((s) => `
    <div class="shortcut" onclick="navigateTo('${s.url}')">
      <div class="shortcut-icon" style="background:${s.color}18;color:${s.color}">${s.icon}</div>
      <span class="shortcut-name">${s.name}</span>
    </div>
  `).join("");
}

function renderQuickPanels() {
  const allPanels = Object.values(PANEL_CATEGORIES).flat();
  document.getElementById("newtab-panels").innerHTML = QUICK_PANELS.map((id) => {
    const p = allPanels.find((x) => x.id === id);
    return p ? `<div class="newtab-panel-item" onclick="openPanel('${p.id}')">${p.name}</div>` : "";
  }).join("");
}

// ============ PRICE TICKER (mini) ============
async function loadMiniTicker() {
  try {
    const res = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbols=" + JSON.stringify(TICKER_SYMBOLS));
    const data = await res.json();
    document.getElementById("ticker-mini").innerHTML = data.map((t) => {
      const change = parseFloat(t.priceChangePercent);
      const cls = change >= 0 ? "up" : "down";
      const sign = change >= 0 ? "+" : "";
      const price = parseFloat(t.lastPrice);
      const fmt = price > 100 ? price.toFixed(0) : price.toFixed(2);
      return `<span class="tmini">
        <span class="tmini-sym">${t.symbol.replace("USDT", "")}</span>
        <span class="tmini-val ${cls}">$${fmt} ${sign}${change.toFixed(1)}%</span>
      </span>`;
    }).join("");
  } catch {}
}

// ============ UTILS ============
function escHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "t") { e.preventDefault(); createTab(); }
  if (e.ctrlKey && e.key === "w") { e.preventDefault(); closeTab(activeTabId); }
  if (e.ctrlKey && e.key === "l") { e.preventDefault(); const i = document.getElementById("url-input"); i.focus(); i.select(); }
  if (e.key === "F5") { e.preventDefault(); navReload(); }
  if (e.altKey && e.key === "ArrowLeft") { e.preventDefault(); navBack(); }
  if (e.altKey && e.key === "ArrowRight") { e.preventDefault(); navForward(); }
  if (e.ctrlKey && e.key >= "1" && e.key <= "9") {
    e.preventDefault();
    const idx = parseInt(e.key) - 1;
    if (idx < tabs.length) setActiveTab(tabs[idx].id);
  }
  // Ctrl+B = Toggle panels sidebar
  if (e.ctrlKey && e.key === "b") { e.preventDefault(); togglePanel("panels"); }
  // Ctrl+J = Toggle AI
  if (e.ctrlKey && e.key === "j") { e.preventDefault(); togglePanel("bsai"); }
  // Ctrl+` = Toggle terminal
  if (e.ctrlKey && e.key === "`") { e.preventDefault(); togglePanel("terminal"); }
});

// ============ INIT ============
function init() {
  renderPanelSidebar();
  renderShortcuts();
  renderQuickPanels();
  createTab();
  loadMiniTicker();
  setInterval(loadMiniTicker, 30000);
}

// ============ AUTO-UPDATE ============
mefai.onUpdateStatus((msg) => {
  document.getElementById("update-banner").classList.remove("hidden");
  document.getElementById("update-msg").textContent = msg;
});

mefai.onUpdateReady((ver) => {
  document.getElementById("update-banner").classList.remove("hidden");
  document.getElementById("update-msg").textContent = `v${ver} ready`;
  document.getElementById("update-restart-btn").classList.remove("hidden");
});

init();
