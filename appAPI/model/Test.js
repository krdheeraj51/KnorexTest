const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const TestModel =new Schema({
   label:{
       type:String
   },
   Values:{
       type:String
   }
})

let collectionName='dropdown_option';
mongoose.model('dropdown_option',TestModel,collectionName);