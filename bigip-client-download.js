BigipClient.download.certificate = function (bigip, obj) {
  if (obj.name === undefined) {
    console.log(obj);
  } else {
    var cert = bigipSoapCertDownload(bigip.ip, bigip.user, bigip.pass, obj.name)
    return cert;
  }
}

BigipClient.download.key = function (bigip, obj) {
  if (obj === undefined) {
    //
  } else {
    var cert = bigipSoapKeyDownload(bigip.ip, bigip.user, bigip.pass, obj.name)
    return cert;
  }
}

BigipClient.download.ucs = function (bigip, obj) {

}

BigipClient.download.qkview = function (bigip, obj) {

}
