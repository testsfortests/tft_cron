import express from 'express';
import axios from 'axios';
const router = express.Router();

// no need for now - working for cron
// router.get('/cron', async (req, res) => {
//     console.log("send message cron performed")
//     try {
//         const message = req.body && req.body.message ? req.body.message : "HELLO, I AM TFTBOT";
      
//         const messageParams = {
//             chat_id: TESTING_CHAT_ID, 
//             text: message
//         };
//         const response = await axios.post(SEND_MSG_URL, messageParams);
//         res.status(200).json({ success: true, message:'Message sent successfull', data: response.data });
//     } catch (error) {
//         res.status(500).json({ success: false,message : 'Error sending message', error: error.message });
//     }
// });

router.get('/cron',(req,res)=>{
    const currentTime = new Date();

    res.status(200).end(`Hello Cron2! ${currentTime}`);
})
export default router;