const Candidatos = require("../models/candidatos.models");

const getCandidatos = async (req,res)=> {
    try {
        const allCandidatos = await Candidatos.find()
        return res.status(200).json(allCandidatos);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postCandidatos = async (req,res)=> {
    try{
        const {name, apellidos, telefono, mail, cv
        } = req.body
       
        const newCandidato = new Candidatos({name, apellidos, telefono, mail, cv
        });
        
        
        const createdCandidato = await newCandidato.save();
        return res.status(201).json(createdCandidato);
    } catch (error) {
        return res.status(500).json(error)
    }
};

module.exports = { postCandidatos, getCandidatos }