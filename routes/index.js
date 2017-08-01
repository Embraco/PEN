var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inicial', { title: 'PEN',
								static_path: '',
								theme: process.env.THEME || 'cerulean',
								flask_debug: process.env.FLASK_DEBUG || 'false'
							});
});

module.exports = router;
