var express = require("express");
var router = express.Router();


router.get("/", function(req, res, next) {
    db.query('SELECT * from COUNTS WHERE date_>=\''+ req.query.from + '\' AND date_<=\''+req.query.to+'\'', function (err, rows, fields) {
        if (err) throw err
      
        console.log('Fetched : ', rows)
      })
    res.send("API is working properly");
});

module.exports = router;