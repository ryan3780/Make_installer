const express = require('express');
const app = express();
const electron = require('electron');
const electronApp = electron.app;
const path = require('path');
const { dialog } = require('electron')
const localPort = require('./main')


app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', function (req, res) {
  res.send('test');

});

app.listen(localPort.port).on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    dialog.showErrorBox('8080포트 사용 중', '사용하시는 8080포트를 닫아주세요!')
    electronApp.quit()
  } else {
    app.listen(localPort)
    console.log('use use use')
  }
})