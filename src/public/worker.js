console.log('Service Worker')

self.addEventListener('push', e =>{
const data = e.data.json()
console.log(data)
//console.log('Notificacion Recibida!')
self.registration.showNotification(data.title, {
    icon:'https://desarrollo-geek.net/wp-content/uploads/telegram-logo.png',
    body:data.message
    
})
})