const router = require('express').Router();
const path = require('path');

// home route
router.get("/", function(req,res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));

});

//sending user to exercise html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  
  })

//sending user to stats html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  
  })

module.exports=router;