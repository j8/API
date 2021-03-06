// Generated by CoffeeScript 1.10.0
(function() {
  var geoip, path, websocket;

  path = require('path');

  geoip = require('geoip-lite');

  websocket = null;

  exports.init = function(ws) {
    return websocket = ws;
  };

  exports.main = function(req, res) {
    if (websocket) {
      if (req.body && req.body.token && websocket.validateToken(req.body.token)) {
        return res.sendfile(path.join(__dirname, '../../views/TaskManager.html'));
      } else {
        return res.sendfile(path.join(__dirname, '../../views/login.html'));
      }
    }
  };

  exports.index = function(req, res) {
    if (websocket) {
      if (req.body && req.body.token && websocket.validateToken(req.body.token)) {
        return res.sendfile(path.join(__dirname, '../../views/TaskManager.html'));
      } else {
        return res.sendfile(path.join(__dirname, '../../views/login.html'));
      }
    }
  };

}).call(this);
