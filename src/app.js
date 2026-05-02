import express  from "express"
import cors from "cors"
//import { getJobs, createJob } from "./controllers/job.controller.js"
import jobRouter from "./routes/job.routes.js"

const app =express()
const PORT  =process.env.PORT || 4000
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



app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}`);
});

