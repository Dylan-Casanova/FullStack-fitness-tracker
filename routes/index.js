const router = require('express').Router();

router.use("/api", require ("./api"));
router.use("/", require("./homeRoutes.js"));

module.exports = router;