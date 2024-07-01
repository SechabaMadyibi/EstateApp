import express from "express";
import router from  "./routes/post.route.js"
const app = express();


app.use("/api/test", (req,res)=> {
res.send("it works")
})

app.listen(8800, ()=> {
    console.log ("Server is running");
})



