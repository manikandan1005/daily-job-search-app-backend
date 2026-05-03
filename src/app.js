import express  from "express"
import cors from "cors"
//import { getJobs, createJob } from "./controllers/job.controller.js"
import jobRouter from "./routes/job.routes.js"

const app =express()
const PORT  =process.env.PORT || 4000
const allowedOrigins = [
  "http://localhost:3000",
  "https://daily-job-search-app.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "DELETE"]
}));

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message: "Server start"})
})

//routes

app.use("/v1/jobs", jobRouter)



app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}`);
});

