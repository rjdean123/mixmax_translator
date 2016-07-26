var api_key = require('../yandex_key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');

// The API that returns the in-email representation.
module.exports = function(req, res) {

	if (!req.query.text.trim()) {
		res.json({
			body: ''
		});
		return;
	}

	var get_params_obj = {
		key: api_key,
		text: req.query.text.trim(),
		lang: 'en-es',
		format: 'json'
	};

	var response;
	try {
	  response = sync.await(request({
	    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
	    timeout: 10 * 1000,
	    qs: get_params_obj
	  }, sync.defer()));
	} catch (e) {
	  res.status(500).send('Error');
	  return;
	}

    res.json({
        body: JSON.parse(response.body).text + '<br>' + "<a href='http://translate.yandex.com/'>Powered by Yandex.Translate</a>"
    });
    return;
};
