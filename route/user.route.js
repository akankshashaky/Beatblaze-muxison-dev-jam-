const express=require('express');
const { registerController,loginController } = require('../controller/auth.controller');
const router=express.Router();


router.route('/register')
.get((req,res)=>{
    return res.render('signup')
})
.post(registerController)


router
.route('/login')
.get((req,res)=>{
    return res.render('login')
})
.post(loginController)

router
.route('/verification/:token')
.get((req,res)=>{
    return res.render('verification')
})
.post((req,res)=>{
    
})
module.exports=router;