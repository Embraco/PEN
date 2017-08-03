var express = require('express');
var router = express.Router();
var pjson = require('../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PEN',
								static_path: '',
								theme: process.env.THEME || 'cerulean',
								flask_debug: process.env.FLASK_DEBUG || 'false',
                version: pjson.version
							});
});

module.exports = router;
