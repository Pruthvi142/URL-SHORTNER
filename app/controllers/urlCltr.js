const URL=require('../models/url')
const validator = require('url-validation')
const short= require("shorthash")
const urlCltr={}

urlCltr.list = (req, res) => {
    URL.find()
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}

urlCltr.create = (req, res) => {
    
    const body=req.body
        const url=new URL(body)
        url.save()
            .then((url) => {
                res.json(url)
            })
            .catch((err) => {
                res.json(err)
            })
        }
urlCltr.show = (req, res) => {
    const id=req.params.id
    const body=req.body
    URL.findById(id)
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}
urlCltr.update = (req, res) => {
    const id=req.params.id
    const body=req.body
    URL.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}
urlCltr.delete = (req, res) => {
    const id=req.params.id
    const body=req.body
    URL.findByIdAndDelete(id)
        .then((url) => {
            res.json(url)
        })  
        .catch((err) => {
            res.json(err)
        })
}
urlCltr.redirect=(req,res)=>{
    const hash=req.params.hash
    console.log(hash)
    URL.findOne({ hashedUrl:hash})
        .then((url)=>{
        
         console.log(url.originalUrl)
            res.redirect(url.originalUrl)
    
        })
        .catch((err)=>{
            res.json(err)
        })
}



module.exports=urlCltr
