const express = require("express");
const router = express.Router();

const memberRouter = require("./members");
router.use("/members", memberRouter);

module.exports = router;