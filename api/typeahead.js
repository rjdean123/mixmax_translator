var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');

// The Type Ahead API.
module.exports = function(req, res) {
    var term = req.query.text.trim();
    if (!term) {
      res.json([{
        title: '<i>(press enter to translate ...)</i>',
        text: ''
      }]);
      return;
    }

    return;
};
