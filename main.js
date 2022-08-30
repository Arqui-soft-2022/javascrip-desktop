const { app, BrowserWindow } = require('electron')

if(process.env.NODE_ENV != 'production'){
  require('electron-reload')(__dirname,{
  
    })
  }

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})