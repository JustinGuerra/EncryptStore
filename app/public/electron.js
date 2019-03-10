const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const platform = require('os').platform();

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const Tray = electron.Tray;



let mainWindow;
let iconPath;

if(platform === 'darwin'){
  iconPath =  isDev ? `${path.join( __dirname, '../public/assets/tray.png')}` : `file://${path.join( __dirname, '../build/assets/tray.png')}`;
} else if (platform === 'win32') {
  iconPath =  isDev ? `${path.join( __dirname, '../public/assets/tray.ico')}` : `file://${path.join( __dirname, '../build/assets/tray.ico')}`;
}
const mainWindowPath = isDev ? 'http://localhost:3000' : `file://${path.join( __dirname, '../build/index.html')}`;

const createWindow = () => {
  mainWindow = new BrowserWindow({ 
    icon: iconPath,
    width: 900, 
    height: 680,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false
    }
  });

  mainWindow.loadURL(mainWindowPath);

  mainWindow.on('close', event => {
    event.preventDefault();
    mainWindow.hide();
  });
};

const addInTray = () => {
  const tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Search',
      type: 'normal'
    },
    {
      label: 'Open',
      type: 'normal',
      click () {
        mainWindow.show();
      }
    },
    {
      label: 'Settings',
      type: 'normal'
    },
    {
      label: 'Quit',
      type: 'normal',
      click () {
        app.exit();
      }
    }
  ]);
  tray.setToolTip('Encrypt Store');
  tray.setContextMenu(contextMenu);
};

app.on('ready', () => {
  createWindow();
  addInTray();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if(mainWindow === null){
    createWindow();
  }
});