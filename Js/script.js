"use strict";

const inputRub = document.querySelector("#rub"), 
      inputUsd = document.querySelector("#usd"); 


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/setting.json');
    request.setRequestHeader('Content-type', 'aplication/json', 'charset=utf-8');
    request.send();
});