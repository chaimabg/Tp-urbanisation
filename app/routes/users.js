var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', (req, res) => {
  res.send({
    firstname : "foulen",
    lastname : "ben folen"
  })
})
module.exports = router;
