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
  exec(command, {maxBuffer: 2048 * 1024}, function(err, stdout, stderr) {
      if (err) {
        console.log(err);
      } else if (stderr) {
        console.log(stderr);
      } else {
        future.return(stdout.toString());
      }
  });
  return future.wait();
}

bigipSoapKeyDownload = function(ip, user, pass, name) {
  var args = [ip, user, pass, name];
  try {
    var result = pyRun('getKey.py', args);
    return result;
    //console.log(result);
  } catch (e) {
    console.log(e);
  }
}

bigipSoapCertDownload = function(ip, user, pass, name) {
  var args = [ip, user, pass, name];
  try {
    var result = pyRun('getCert.py', args);
    return result;
  } catch (e) {
    console.log(e);
  }
}

bigipSoapKeyUpload = function(ip, user, pass, name, overwrite) {
  var args = [ip, user, pass, name, overwrite];
  try {
    var result = pyRun('createKey.py', args);
    return 'Success!';
    //console.log(result);
  } catch (e) {
    console.log(e);
  }
}

bigipSoapCertUpload = function(ip, user, pass, name, overwrite) {
  var args = [ip, user, pass, name, overwrite];
  try {
    var result = pyRun('createCert.py', args);
    return 'Success!';
  } catch (e) {
    console.log(e);
  }
}
