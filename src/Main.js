const { app, BrowserWindow, Menu, Tray } = require('electron');
const path = require('path');
let win;

const createWindow = () => {
  const preload = path.resolve(__dirname, 'index/Index.js');

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      preload: preload
    }
  });

  win.on('close', event => {
    event.preventDefault();
    win.hide();
  });

  win.loadFile(path.resolve(__dirname, 'index/index.html'));
};

const addInTray = () => {
  const tray = new Tray(path.join(__dirname, 'assets/tray.ico'));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Search for login',
      type: 'normal'
    },
    {
      label: 'Open',
      type: 'normal',
      click () {
        win.show();
      }
    },
    {
      label: 'Settings',
      type: 'normal'
    },
    {
      label: 'Exit',
      type: 'normal',
      click () {
        app.exit();
      }
    }
  ]);
  tray.setToolTip('EncryptStore');
  tray.setContextMenu(contextMenu);
};

app.on('ready', () => {
  createWindow();
  addInTray();
});

app.on('window-all-closed', () => {
  app.quit();
});
