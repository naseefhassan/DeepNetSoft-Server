const drinks = require("../Model/DrinkSchema"); 
const Brounchs = require("../Model/BrounchSchema"); 

const object = {
  drink: async (req, res) => {
    try {
      const response = await drinks.find();
      res.status(200).json({ message: "sucesss" ,response});
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "failed" });
    }
  },
  brounch: async (req, res) => {
    try {
      const response = await Brounchs.find();
      res.status(200).json({ message: "sucesss" ,response});
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "failed" });
    }
  },
};

module.exports = object;
