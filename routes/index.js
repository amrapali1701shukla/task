var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/submit',function(req,res){
  res.send("Done");
});

router.get('/booked',function(req,res){
  res.send("Done");
})

module.exports = router;
