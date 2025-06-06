const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'), // optional
    },
  })

  const isDev = process.env.VITE_DEV_SERVER_URL
  const loadURL = isDev
    ? process.env.VITE_DEV_SERVER_URL
    : `file://${path.join(__dirname, '../../dist/renderer/index.html')}`

  win.loadURL(loadURL)
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
