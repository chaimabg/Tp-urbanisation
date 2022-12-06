var express = require('express');
var router = express.Router();
days = ['Monday','Thuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
months=['january','february','march','april','may','june','july','august','september'
,'october','november','december'];
/* GET home page. */
router.get('/dayOfWeek/:id', function(req, res, next) {
  const id = req.params.id;
  

   if(id>0 && id<=7)
    {let data = `<?xml version="1.0" encoding="UTF-8"?>`;
      data += `<day>`;
      data += `
       <value>${days[id-1]}</value> 
    `;
    data += `</day>`;
    res.header("Content-Type", "application/xml");
    res.status(200).send(data);
  }else{
    res.status(400).send({error : 'provide the right number !'})
  }
 
    
});
router.get('/monthOfYear/:id', function(req, res, next) {
  const id = req.params.id;
  

   if(id>0 && id<=12)
    { let data = `<?xml version="1.0" encoding="UTF-8"?>`;
      data += `<month>`;
      data += `
       <value>${months[id-1]}</value>
       
    `;
    data += `</month>`;
    res.header("Content-Type", "application/xml");
    res.status(200).send(data);
  }else{
      res.status(400).send({error : 'provide the right number !'})
    }
 
    
});

module.exports = router;
