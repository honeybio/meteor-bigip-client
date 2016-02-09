// var PythonShell = Npm.require('python-shell');

var meteorRoot = Npm.require('fs').realpathSync(process.cwd());
var pythonRoot = meteorRoot + "/assets/app/bigip-soap-client/";

pyRun = function (cmd, argList) {
  var pythonPath = '';
  var runCmd = cmd;
  for (i = 0; i < argList.length; i++) {
    runCmd = runCmd + " '" + argList[i] + "'";
  }
  var exec = Npm.require("child_process").exec;
  var Future = Npm.require("fibers/future");
  var future = new Future();
  var meteor_root = Npm.require('fs').realpathSync(process.cwd());
  var baseAssets = meteor_root + "/assets/app/bigip-soap-client/";
  var command = "python -u " + baseAssets + runCmd;
  exec(command, function(err, stdout, stderr) {
      if (err) {
          console.log(err);
      } else {
        future.return(stdout.toString());
      }
  });
  return future.wait();
},

bigipKeyDownload = function(ip, user, pass, name) {
  var args = [ip, user, pass, name];
  try {
    var result = pyRun('getKey.py', args);
    return result;
    //console.log(result);
  } catch (e) {
    console.log(e);
  }
}

bigipCertDownload = function(ip, user, pass, name) {
  var args = [ip, user, pass, name];
  try {
    var result = pyRun('getCert.py', args);
    return result;
  } catch (e) {
    console.log(e);
  }
}
