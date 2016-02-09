var request = Npm.require('request');

var iControlRest = function(opts) {
  // Set default options
  this.host   = opts.host;
  this.user   = opts.user;
  this.pass   = opts.pass;
  this.port   = (typeof opts.port   === 'number')  ? opts.port   : 443;
  this.strict = (typeof opts.strict === 'boolean') ? opts.strict : false;
  this.debug  = (typeof opts.debug  === 'boolean') ? opts.debug  : false;

  if (this.debug) {
    request.debug = true;
  }
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = (this.strict) ? "1" : "0";
};

iControlRest.prototype.create = function(path, body, cb) {
  var opts = { path: path, body: body, method: 'POST' };
  this._request(opts, cb);
};

iControlRest.prototype.delete = function(path, cb) {
  var opts = { path: path, method: 'DELETE' };
  this._request(opts, cb);
};

iControlRest.prototype.install = function(path, cb) {
  var opts = { path: path, method: 'DELETE' };
  this._request(opts, cb);
};

iControlRest.prototype.list = function(path, opts, cb) {
  if (arguments.length === 2) {
    cb = opts;
    opts = {};
  }
  else {
    var queryComponents = [];
    if (opts.expandAll) {
      queryComponents.push('$expandSubcollections=true');
    }
    if (queryComponents.length !== 0) {
      opts.query = '?' + queryComponents.join('&');
    }
  }
  opts.path = path;
  opts.method = 'GET';
  this._request(opts, cb);
};

iControlRest.prototype.modify = function(path, body, cb) {
  var opts = { path: path, body: body, method: 'PUT' };
  this._request(opts, cb);
};

iControlRest.prototype.show = function(path, body, cb) {

  var opts = {
    path: path + '/stats',
    body: body,
    method: 'GET'
  };
  this._request(opts, cb);
};

iControlRest.prototype._request = function(opts, cb) {
  if (typeof opts.path !== 'string') return cb('URL must be specified', null);
  this.url = '/mgmt/tm' + opts.path;
  this.uri = 'https://' + this.host + ':' + this.port + this.url;
  this.method = opts.method;

  // Build options for request
  this.requestOpts = {
    uri:     this.uri,
    method:  this.method,
    json:    true,
    auth: {
      user: this.user,
      pass: this.pass
    },
    strictSSL: this.strict,
    rejectUnauthorized: this.strict
  };
  if (typeof opts.body === 'object') {
    this.requestOpts.body = opts.body;
  }
  if (typeof opts.query === 'string') {
    this.requestOpts.qs = { expandSubcollections: 'true' };
  }
  request(this.requestOpts, function(err, res, body) {
    if (err) {
      console.log(res);
      //console.log(err);
      //console.log(body);
      return cb(err, false);
    }
    if (res.statusCode !== 200) {
      var msg;
      if (res.statusCode == 404) {
        msg = 404;
      }
      else if (res.statusCode == 401) {
        msg = 401;
      }
      else if (res.statusCode == 400) {
        msg = 400;
      }
      else {
        msg = 500;
        console.log(res);
      }
      return cb(msg, false);
    }
    if (this.method === 'GET') {
      if (body.items) {
        return cb(false, body.items);
      }
      else {
        return cb(false, body);
      }
    }
    else {
      return cb(false, body);
    }
  });
};

bigipRestList = function(ip, user, pass, url, options) {
  /**
  * Method Description
  *
  * @method Method Name
  * @param {object} Parameters
  * @return {boolean} return value
  */
  var opt = { };
  if (options !== undefined) {
    opt = options;
  }
  var bip = new iControlRest({
    host:   ip,
    user:   user,
    pass:   pass,
  });
  var syncList = Meteor.wrapAsync(bip.list, bip);

  try {
    var result = syncList(url, opt);
    if (typeof result !== 'undefined') {
      return result;
    } else {
      return [];
    }
  } catch (e) {
    if (e.message == 401) {
      throw new Meteor.Error(401, 'Unauthorized', 'Bad username or password');
    } else if (e.message == 400) {
      throw new Meteor.Error(400, 'Unexpected URI', 'Bad URI');
    } else {
      console.log(e.message);
      throw new Meteor.Error(500, 'Server Error', e.message);
    }
  }
}

bigipRestDelete = function(ip, user, pass, url) {
  /**
  * Method Description
  *
  * @method Method Name
  * @param {object} Parameters
  * @return {boolean} return value
  */
  var opt = { };
  if (options !== undefined) {
    opt = options;
  }
  var bip = new iControlRest({
    host:   ip,
    user:   user,
    pass:   pass,
  });
  var syncList = Meteor.wrapAsync(bip.delete, bip);

  try {
    var result = syncList(url);
    if (typeof result !== 'undefined') {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    if (e.message == 401) {
      throw new Meteor.Error(401, 'Unauthorized', 'Bad username or password');
    } else if (e.message == 400) {
      throw new Meteor.Error(400, 'Unexpected URI', 'Bad URI');
    } else {
      console.log(e.message);
      throw new Meteor.Error(500, 'Server Error', e.message);
    }
  }
}

bigipRestCreate = function(ip, user, pass, url, body, options) {
  /**
  * Method Description
  *
  * @method Method Name
  * @param {object} Parameters
  * @return {boolean} return value
  */
  var opt = { };
  if (options !== undefined) {
    opt = options;
  }
  var bip = new iControlRest({
    host:   ip,
    user:   user,
    pass:   pass,
  });
  var syncList = Meteor.wrapAsync(bip.create, bip);

  try {
    var result = syncList(url, body);
    if (typeof result !== 'undefined') {
      return result;
    } else {
      return false;
    }
  } catch (e) {
    if (e.message == 401) {
      throw new Meteor.Error(401, 'Unauthorized', 'Bad username or password');
    } else if (e.message == 400) {
      throw new Meteor.Error(400, 'Unexpected URI', 'Bad URI');
    } else {
      console.log(e.message);
      throw new Meteor.Error(500, 'Server Error', e.message);
    }
  }
}
