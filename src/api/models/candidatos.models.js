const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const candidatosSchema = new Schema ({
    name:{type:String,require:true},
    apellidos:{type:String,require:true},
    telefono:{type:String,require:true},
    mail:{type:String,require:true},    
    cv:{type:String,require:true},
    
})

const Candidatos = mongoose.model("candidatos",candidatosSchema);
module.exports = Candidatos;