const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    frame: false,
    transparent: true,
    icon: path.join(__dirname, 'img/logo.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  return mainWindow;
}

app.whenReady().then(() => {
  const mainWindow = createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on('close', function () {
    console.log('Closing app...');
    app.exit();
  })

  ipcMain.on('minimize', function () {
    console.log('Minimizing app...');
    mainWindow.minimize()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
