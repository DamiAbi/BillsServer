const Bills = require("../models/bills.js");

const getBillsController = async (req, res) => {
  try {
    const bills = await Bills.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};

//for add
const addBillsController = async (req, res) => {
  try {
    const newBills = new Bills(req.body);
    await newBills.save();
    res.send("Bill creada con éxito!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBillsController,
  getBillsController,
};
