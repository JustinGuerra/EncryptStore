const { app, BrowserWindow } = require('electron');
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

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  app.quit();
});
