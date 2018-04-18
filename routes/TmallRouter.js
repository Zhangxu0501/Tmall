var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nevigator', function(req, res, next) {
  res.render('nevigator.ejs', {});
});

router.get('/search',function (req,res,next) {
    res.render("search.ejs",{})
})
module.exports = router;
