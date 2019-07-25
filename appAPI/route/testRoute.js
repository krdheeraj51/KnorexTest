
const appConfig=require('../config/appConfig');

const express=require('express');
const appController=require('../controller/appController');

let setAppRouter=(app)=>{
    let baseUrl=appConfig.apiVersion+'/test';
    app.post(baseUrl+'/create',appController.addNewOption);
    app.get(baseUrl+'/hello',appController.sayHello);
}

module.exports={
    setAppRouter:setAppRouter,
    
}