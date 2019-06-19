const express = require('express');
const indexModel=require('../models/indexModel')
const router = express.Router();

/* GET home page. */

router.get('/',(req, res)=>{
  res.render('index')
})

router.get('/about',(req, res)=>{
  res.render('about')
})

router.get('/contact',(req, res)=>{
  res.render('contact')
})

router.get('/service',(req, res)=>{
  res.render('service')
})

router.get('/login',(req,res)=>{
  res.render('login')
})

router.get('/register',(req,res)=>{
  res.render('register')
})
router.post('/register',(req,res)=>{
  
  indexModel.registerUser(req.body)
  	
  res.send('form submitted')
})

/*router.all('/register',(req,res)=>{
  if(req.method=="GET")
	  res.render('register')
  else
  	  res.send('form submitted')	 	
})*/




module.exports = router;
