const {Schema, model} = require("mongoose");
const {handleMongooseError} = require("../utils/handleMongooseError")
const petsSchema = new Schema({
    service: {
        type: String,
        enum: ["yourPet", "sell", "lostFound", "inGoodHands"],
        // default: ""
      },
      petName: {
          type: String,
          required: true,
          default: ""
      },
      dateOfBirthe:{
        type: Number,
        required: true,
        default: "",
      },
      verify: {
        type: Boolean,
        default: false,
        default: "",
      },
      breed: {
        type: String,
        required: true,
        default: "",
      },
      addPhoto: {
        type: Image,
        required: true,
        default: "",
      },
      comments: {
        type: String,
        required: true,
        default: "",
      },
      titleOfAdd: {
        type: String,
        required: true,
        default: "",
      },
      sex: {
        type: Boolean,
        required: true,
        default: false,
      },
      location: {
        type: String,
        required: true,
        default: "",
      },
      price: {
        type: String,
        required: true,
        default: "",
      },
  });
  
  usersSchema.post("save", handleMongooseError);
  const Pets = model("pets", petsSchema);
  
  
  module.exports = {
    Pets
  }