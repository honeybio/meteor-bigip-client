BigipClient.list.apm.aaa = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/apm/aaa'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/aaa/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.apm.configuration = function () { }
BigipClient.list.apm.epsec = function () { }
BigipClient.list.apm.ntlm = function () { }
BigipClient.list.apm.policy = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/apm/policy'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/policy/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.apm.profile = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/apm/profile'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/profile/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.apm.sso = function () { }

BigipClient.list.asm.policy = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    var options = { expandAll: true };
    if (obj === undefined) {
      var lurl = '/asm/policies'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      // Asm uses a hash instead of the name,
      // var objRestName = obj.replace(/\//g, "~");
      var lurl = '/asm/policies/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}

BigipClient.list.gtm.datacenter = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/gtm/datacenter'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/datacenter/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.gtm.distributed_app = function () { }
BigipClient.list.gtm.link = function () { }
BigipClient.list.gtm.listener = function () { }
BigipClient.list.gtm.global_settings.general = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/gtm/global-settings/general'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}
BigipClient.list.gtm.pool.a = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    var options = { expandAll: true };
    if (obj === undefined) {
      var lurl = '/gtm/pool/a'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/pool/a/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.gtm.pool.aaaa = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/gtm/pool/aaaa'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/pool/aaaa/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.gtm.prober_pool = function () { }
BigipClient.list.gtm.region = function () { }
BigipClient.list.gtm.rule = function () { }
BigipClient.list.gtm.server = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/gtm/server'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/server/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.gtm.topology = function () { }
BigipClient.list.gtm.wideip.a = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/gtm/wideip/a'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/wideip/a/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.gtm.wideip.aaaa = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/gtm/wideip/aaaa'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/wideip/aaaa/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.ltm.data_group.internal = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/data-group/internal'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/data-group/internal/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.ltm.data_group.external = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/data-group/external'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/data-group/external/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.ltm.dns.nameserver = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/dns/nameserver'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/dns/nameserver/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.ltm.dns.dnssec.key = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/dns/dnssec/key'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/dns/dnssec/key/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.ltm.dns.dnssec.zone = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/dns/dnssec/zone'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/dns/dnssec/zone/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.ltm.eviction_policy = function () { }
BigipClient.list.ltm.ifile = function () { }
BigipClient.list.ltm.monitor = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/ltm/monitor'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}
BigipClient.list.ltm.monitor.firepass = function (bigip, obj) {
}
BigipClient.list.ltm.nat = function () { }
BigipClient.list.ltm.node = function () { }
BigipClient.list.ltm.persistence = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/ltm/persistence'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}
BigipClient.list.ltm.policy = function () { }
BigipClient.list.ltm.policy_strategy = function () { }
BigipClient.list.ltm.pool = function (bigip, obj) {
  var options = { expandAll: true };
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/pool'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/pool/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.profile = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/ltm/profile'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}
BigipClient.list.ltm.rule = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/rule'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/rule/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.ltm.snat = function () { }
BigipClient.list.ltm.snat_translation = function () { }
BigipClient.list.ltm.snatpool = function () { }
BigipClient.list.ltm.traffic_class = function () { }

BigipClient.list.ltm.virtual = function (bigip, obj) {
  var options = { expandAll: true };
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/virtual'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/virtual/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  } else if ( bigip.iControl == 'soap') {
    return null;
  } else {
    return null;
  }
}
BigipClient.list.ltm.virtual_address = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/virtual-address'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/virtual-address/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}

BigipClient.list.net.route = function () { }
BigipClient.list.net.self = function () { }
BigipClient.list.net.trunk = function () { }
BigipClient.list.net.vlan = function () { }

BigipClient.list.security.firewall.address_list = function () { }
BigipClient.list.security.firewall.policy = function () { }
BigipClient.list.security.firewall.port_list = function () { }
BigipClient.list.security.firewall.port_misuse_policy = function () { }
BigipClient.list.security.firewall.rule_list = function () { }
BigipClient.list.security.firewall.schedule = function () { }
BigipClient.list.security.firewall.user_domain = function () { }
BigipClient.list.security.firewall.user_list = function () { }

BigipClient.list.sys.application = function () { }
BigipClient.list.sys.crypto.cert = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/sys/crypto/cert'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/sys/crypto/cert/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.sys.crypto.key = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/sys/crypto/key'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/sys/crypto/key/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.sys.crypto.csr = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/sys/crypto/csr'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/sys/crypto/csr/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
