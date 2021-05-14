const router = require('express').Router();
const path = require('path');

//establishing home route
router.get('/', function(req, res) {
    try{
        res.sendFile(path.join(__dirname, '../public/index.html'));
    }
    catch{
        res.json({error})
    }
});

//sending user to exercise html
router.get('/exercise', async (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    }
    catch{
        res.json({error})
    }
});

//sending user to stats html
router.get('/stats', async (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    }
    catch{
        res.json({error})
    }
});

module.exports=router;