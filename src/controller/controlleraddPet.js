import { Pets } from "../model/addPetModel";
const {ctrlWrapper} = require("../utils/ctrlWrapper");


const addPet = async(req, res)=>{
    const {sevice} = req.body;
    console.log(service)

    

    res.status(201).json({
        
    })
}

module.exports = {
    addPet: ctrlWrapper(addPet),
    

}