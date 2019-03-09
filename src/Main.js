const { app, BrowserWindow, Menu, Tray } = require('electron');
const path = require('path');

function createWindow () {
  let preload = path.resolve(__dirname, 'index/Index.js');

  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      preload: preload
    }
  });

  win.loadFile(path.resolve(__dirname, 'index/index.html'));
};

const addInTray = () => {
  const tray = new Tray(path.join(__dirname, 'assets/tray.ico'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Search for Login', type: 'normal' },
    { label: 'Open', type: 'normal' },
    { label: 'Settings', type: 'normal' },
    { label: 'Close', type: 'normal' }
  ]);
  tray.setToolTip('EncryptStore');
  tray.setContextMenu(contextMenu);
};

app.on('ready', () => {
  createWindow();
  addInTray();
});

app.on('window-all-closed', function () {
  app.quit();
});
