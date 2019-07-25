
const express =require('express');
const appConfig=require('../config/appConfig');
const mongoose=require('mongoose');
const testModel = mongoose.model('dropdown_option');

//create route
let sayHello=(req,res)=>{
    res.send('Hello Test APP');
}
let addNewOption=(req,res)=>{
    let addNew=new testModel({
        label:req.body.label,
        Values:req.body.Values
    })
    addNew.save((err,result)=>{
        if(err){
            console.log("Something is missing ....");
            res.send('Something Going Wrong');
        }else{
            console.log("Return result successfully ....");
            res.send(result);
        }
    })

}


module.exports={
    addNewOption:addNewOption,
    sayHello:sayHello
}
