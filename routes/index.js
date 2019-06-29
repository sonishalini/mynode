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
  res.render('login',{'output':''})
})
router.post('/login',(req,res)=>{
  indexModel.userLogin(req.body).then((result)=>{
    if(result.length > 0)
    {
      if(result[0].role=="user")
       res.redirect("/users")
       if(result[0].role=="admin")
       res.redirect("/admin")
    }
    else
       res.render('login',{'output':'Invalid user please login again or authenticate you account'})
  }).catch((err)=>{
    console.log(err)
  })
})



router.get('/register',(req,res)=>{
  res.render('register',{'output':''})
})
router.post('/register',(req,res)=>{
  indexModel.registerUser(req.body).then((result)=>{
    res.render('register',{'output':'Registered successfully'})
  }).catch((err)=>{
    console.log(err)
})
})

/*router.all('/register',(req,res)=>{
  if(req.method=="GET")
	  res.render('register')
  else
  	  res.send('form submitted')	 	
})*/
module.exports = router;
