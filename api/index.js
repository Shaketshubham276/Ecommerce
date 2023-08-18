const express=require("express")
const app=express();
const mongoose=require("mongoose")
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const dotenv=require("dotenv")
dotenv.config();

mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.listen(process.env.PORT || 5000,()=>{
    console.log("backend is running")

});