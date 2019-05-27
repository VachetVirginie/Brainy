var button = document.querySelector('button');
var main = document.querySelector('main');

if (localStorage['note'] === undefined ) {
  localStorage['note'] = 'Save your note by typing in here and clicking the Save Button.<br>You can also press CMD + S / CTRL + S'
}

function siteLoad () {
  main.innerHTML = localStorage['note'];
}

function buttonSave () {
  localStorage['note'] = main.innerHTML;
}

function keySave (e) {
  if (e.keyCode === 83 && e.metaKey || e.keyCode === 83 && e.ctrlKey) {
    e.preventDefault();
    localStorage['note'] = main.innerHTML;
  }
}

if (window.addEventListener) {

  window.addEventListener('load', siteLoad, false);
  button.addEventListener('click', buttonSave, false);
  main.addEventListener('keydown', keySave, false);

} else if (window.attachEvent) {

  window.attachEvent('onload', siteLoad);
  button.attachEvent('onclick', buttonSave);
  main.attachEvent('keydown', keySave);

} else {
  
  window.onload = siteLoad;
  button.onclick = buttonSave;
  main.onkeydown = keySave;

}