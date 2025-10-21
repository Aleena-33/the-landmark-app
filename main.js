const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    }
  });

  // Replace this with your website URL
  win.loadURL("https://the-landmarkapp.tiiny.site");

  // <-- Add this line to open Developer Tools for debugging
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
