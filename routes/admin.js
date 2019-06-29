const express = require('express');
const url =require('url');
const adminModel=require('../models/adminModel');
const router = express.Router();

// GET users listing
router.get('/',(req,res,next)=>{
    res.render('adminhome');
});

router.get('/manageusers',(req,res,next)=>{
    adminModel.fetchuser().then((result)=>{
        res.render('manageusers',{'result':result});
    }).catch((err)=>{
        console.log(err)
    })
});

router.get('/manageuserstatus',(req,res,next)=>{
    var urlobj=url.parse(req.url,true).query
	adminModel.manageuserstatus(urlobj).then((result)=>{
		res.redirect('/admin/manageusers')
	}).catch((err)=>{
		console.log(err)
	})
});

router.get('/addcat',(req, res, next)=>{
    res.render('addcat');
  });
  
module.exports =router;