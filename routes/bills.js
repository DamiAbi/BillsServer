const { Router } = require("express");
const {
  addBillsController,
  getBillsController,
} = require("../controllers/bills.js");

const router = Router();

router.post("/addbills", addBillsController);

router.get("/getbills", getBillsController);

module.exports = router;
