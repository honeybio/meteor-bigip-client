BigipClient.download.certificate = function (bigip, obj) {
  if (obj === undefined) {
    //
  } else {
    var cert = bigipCertDownload(bigip.ip, bigip.user, bigip.pass, obj.name)
    return cert;
  }
}

BigipClient.download.key = function (bigip, obj) {
  if (obj === undefined) {
    //
  } else {
    var cert = bigipKeyDownload(bigip.ip, bigip.user, bigip.pass, obj.name)
    return cert;
  }
}

BigipClient.download.ucs = function (bigip, obj) {

}

BigipClient.download.qkview = function (bigip, obj) {
  
}
