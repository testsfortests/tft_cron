import express from "express"
import cors from "cors"
import dotenv from "dotenv"  // handle
dotenv.config()
const app = express()
app.use(cors())

import appRoutes from "./routes/appRoutes.js"

const PORT = process.env.PORT || 4001

app.use(express.json()) 

app.use("/api", appRoutes)

app.get("/",(req,res)=>{
    res.send("<h1>Hello My Cron World!!!</h1>")
})

const server = app.listen(PORT, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server running at http://${host}:${port}`);
});