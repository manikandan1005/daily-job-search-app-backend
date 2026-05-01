import express  from "express"
import cors from "cors"
//import { getJobs, createJob } from "./controllers/job.controller.js"
import jobRouter from "./routes/job.routes.js"

const app =express()
app.use(cors(
    {
        methods:["GET","POST","DELETE"],
        origin:"http://localhost:3000"
    }
))
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message: "Server start"})
})

//routes

app.use("/v1/jobs", jobRouter)



app.listen(4000,()=>{
    console.log("Server start at port 4000")
})

