var iControlRest;

iControlRest = Npm.require('request');

var bigipRestGet = function(ip, user, pass, url) {
  /**
  * Method Description
  *
  * @method Method Name
  * @param {object} Parameters
  * @return {boolean} return value
  */
  var reqUrl = url.replace(/localhost/, ip);

  iControlRest(reqUrl, function (err, res, body) {
    if (err) {
      console.log(err);
    } else {
      if (res.statusCode == 200) {
        console.log(body)
        return body;
      }
    }
  });
}
