const User = require("../models/User")
const CryptoJS=require("crypto-js")
const router=require("express").Router()
const jwt=require("jsonwebtoken")

router.post("/register",async (req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),

    });
    try{
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)

    }
    catch(err){
        res.status(500).json(err);

        console.log(err)
    }

})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            return res.status(404).send("Wrong credentials");
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(400).json("Wrong password");
        }
        //for authorisation purpose we have taken admin and id
        const accessToken=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        )
        const {password, ...others}=user._doc;
        // ... it is called spread operator
        res.status(200).json({...others,accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports=router