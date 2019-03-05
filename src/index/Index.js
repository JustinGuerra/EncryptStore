let electron = require('electron');
let ipc = electron.ipcRenderer;

window.addEventListener('load', () => {
  window.$ = window.jQuery = require('jquery');

  $('#verifyBtn').on('click', () => {
    //Open new window
  });
});
