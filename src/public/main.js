// const { post } = require("../routes");

const PUBLIC_VAPID_KEY='BMdhTACiC1MIF0tzx5TnpekV3Roj6iDtLMMIlPbDyAq0rpCaUCVeDz-L7qvO3gb4YIDdCxlYvrG0IPX6jRTAYXE';

const subscription = async () => {

const register = await navigator.serviceWorker.register('/worker.js',{
    scope: '/'
});
console.log('Nuevo Service Worker');

const subscription = await register.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey: PUBLIC_VAPID_KEY
});

    await fetch('/subscription',{
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log('Suscrito!')
}
const form = document.querySelector('#form1');
const message = document.querySelector('#message');
console.log(message.value)
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/new-message',{
        method: 'POST',
        body:JSON.stringify({
            message:message.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }); 
form.reset();
})
subscription();