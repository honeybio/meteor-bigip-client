BigipClient.delete.apm.aaa = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/aaa/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.apm.configuration.captcha = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/configuration/captcha/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.apm.epsec = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/epsec/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.apm.ntlm = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/ntlm/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.apm.policy = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/policy/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.apm.profile = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/profile/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.apm.sso = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/sso/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.asm.policy = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/apm/policy/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.datacenter = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/datacenter/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.distributed_app = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/distributed-app/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.link = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/link/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.listener = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/listener/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.pool.a = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/pool/a/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.pool.aaaa = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/pool/aaaa/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.prober_pool = function (bigip, obj) { }
BigipClient.delete.gtm.region = function (bigip, obj) { }
BigipClient.delete.gtm.rule = function (bigip, obj) { }
BigipClient.delete.gtm.server = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/server/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.topology = function (bigip, obj) { }
BigipClient.delete.gtm.wideip.a = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/wideip/a/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.gtm.wideip.aaaa = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/wideip/aaaa/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.data_group.internal = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/data-group/internal/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.data_group.external = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/data-group/external/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.dns.nameserver = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/dns/nameserver/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.dns.dnssec.key = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/dns/dnssec/key/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.dns.dnssec.zone = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/dns/dnssec/zone/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.eviction_policy = function (bigip, obj) { }
BigipClient.delete.ltm.ifile = function (bigip, obj) { }
BigipClient.delete.ltm.monitor.firepass = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/firepass/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.nat = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/nat/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.node = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/node/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.persistence = function (bigip) { }
BigipClient.delete.ltm.policy = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/policy/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.policy_strategy = function (bigip, obj) { }
BigipClient.delete.ltm.pool = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/pool/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.profile = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/profile/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.rule = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/rule/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.snat = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/snat/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.snat_translation = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/snat-translation/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.snatpool = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/snatpool/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.traffic_class = function (bigip, obj) { }

BigipClient.delete.ltm.virtual = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/virtual/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.ltm.virtual_address = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/virtual-address/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.net.route = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/route/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.net.self = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/self/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.net.trunk = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/trunk/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.net.vlan = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/vlan/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}

BigipClient.delete.security.firewall.address_list = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/security/firewall/address-list/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.security.firewall.policy = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/security/firewall/policy/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.security.firewall.port_list = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/security/firewall/port-list/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.security.firewall.port_misuse_policy = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/security/firewall/port-misuse-policy/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.security.firewall.rule_list = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/security/firewall/rule-list/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.security.firewall.schedule = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/security/firewall/schedule/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.security.firewall.user_domain = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/security/firewall/user-domain/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.security.firewall.user_list = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/security/firewall/user-list/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.sys.application = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/sys/application/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.sys.crypto.cert = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/sys/crypto/cert/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.sys.crypto.key = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/sys/crypto/key/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.delete.sys.crypto.csr = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      throw new Meteor.error(500, 'No object defined', 'The name of the object is required');
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/sys/crypto/csr/' + objRestName;
      var response = bigipRestDelete(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
