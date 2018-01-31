var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/aerolinea', function(req,res,next){

  var datos = {
    "txtNombre":"",
    "txtId":"",
    "txtEdad":"",
    "1checked":"checked=checked",
    "2checked":"",
    "3checked":"",
    "4checked":"",
    "txtDias":"",
    "resultado":""
  };

  res.render('formulario', datos);
});

router.post('/aerolinea', function(req,res,next){
  console.log(req.body);

  var datos = {
      "txtNombre": req.body.txtNombre,
      "txtId": req.body.txtId,
      "txtEdad": req.body.txtEdad,
      "1checked": (req.body.tegsps && true)?"checked=checked":"",
      "2checked": (req.body.spsteg && true)?"checked=checked":"",
      "3checked": (req.body.tegcei && true)?"checked=checked":"",
      "4checked": (req.body.ceiteg && true)?"checked=checked":"",
      "txtDias": req.body.txtDias,
      if(document.getElementById('1').checked){
        var result = 1500 * parseInt(req.body.txtDias);
      "resultado": req.body.txtNombre + " " + result
    };
  };
    res.render('formulario', datos);
});


module.exports = router;
