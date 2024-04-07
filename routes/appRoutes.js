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

router.get('/cron', async (req, res) => {
    try {
        const currentTime = new Date();
        const response = await axios.post(`http://tft-backend.onrender.com/tele/send-message`, { message: "CRON Started" });
        console.log(response.data.success);
        res.status(200).end(`Hello Cron2! ${currentTime}`);
    } catch (error) {
        console.error("Error occurred during cron execution:", error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;