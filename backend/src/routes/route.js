const express = require("express");
const router = express.Router();
const controller = require("../controller/holdlinfoController");

//All the routes here
router.get("/", (req, res) => {
  res.send("Yes server is ready...");
});
router.get("/store", controller.storeTop10DataInDatabase);
router.get("/data", controller.getTop10Result);


module.exports = router;
