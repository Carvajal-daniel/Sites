'use strict'

const loginContainer = document.getElementById('login-container');


const moveOverlay = () => loginContainer.classList.toggle('move');


document.getElementById('open-register').addEventListener('click', moveOverlay);

document.getElementById('menuclose').addEventListener('click', moveOverlay)
