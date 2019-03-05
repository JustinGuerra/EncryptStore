const { app, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow({ 
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      contextIsolation: true
    }
  });

  win.loadFile('src/index.html');
};

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  app.quit();
});
