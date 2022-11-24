const {Router} = require('express');
const res = require('express/lib/response');
const router = Router()

const webpush = require('../webpush');
let pushSubscription;

router.post('/subscription', async (req, res) =>{
    // console.log(req.body);
    pushSubscription = req.body;
    res.status(200).json();

router.post('/new-message',async (req,res) =>{
    const {message} = req.body;
    
    const midato = JSON.stringify({
        title:'Mi notificacion',
        message: message
    })
   try {
    await  webpush.sendNotification(pushSubscription, midato);
   } catch (error) {
    console.log(error)
   }
})
})   

module.exports = router;