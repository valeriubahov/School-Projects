const { app, BrowserWindow, ipcMain } = require('electron');
const ExifReader = require('exifreader');
const fs = require('fs');
let firstWindow;

app.on('ready', () => {
    console.log('the app is ready');

    firstWindow = new BrowserWindow({
        webPreferences: {
            preload: `${__dirname}/preload.js`
        }
    });
    firstWindow.loadURL(`file://${__dirname}/index.html`);
})

ipcMain.on('filepath', async (event, filepath) => {

    const tags = await ExifReader.load(filepath);

    console.log(tags.Artist.description);
    console.log(tags.DateTimeOriginal.description);

    const data = {
        artist: tags.Artist.description,
        dateTaken: tags.DateTimeOriginal.description
    }

    firstWindow.webContents.send('fileDataRetrieve', data);


    // fs.writeFile('output.json', JSON.stringify(tags), (err) => {
    //     if (err) {
    //         throw err;
    //     }
    // });

})