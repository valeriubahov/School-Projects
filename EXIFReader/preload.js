const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'electronapi',
    {
        sendFilePath: function (filepath) {
            ipcRenderer.send('filepath', filepath);
        },
        receiveFileData: function (channel, data) {
            ipcRenderer.on(channel, (event, ...args) => data(...args))
        }
    }
)