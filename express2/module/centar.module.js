const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const centarSchema = new Schema({
    username:{type: String,required: true},
    description:{type: String,required: true},
    duration:{type: String,required: true},
    date:{type: String,required: true}
},{ timestamps:true});

const Centar = mongoose.model('Centar', centarSchema);

module.exports = Centar  ;