const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  // win.loadFile("public/index.html");
  void win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
};

void app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
