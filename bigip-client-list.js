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
      if (bigip.version.match(/11/)) {
        lurl = '/gtm/pool';
      }
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/pool/a/' + objRestName;
      if (bigip.version.match(/11/)) {
        lurl = '/gtm/pool' + objRestName;
      }
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
      var lurl = '/gtm/wideip/a';
      if (bigip.version.match(/11/)) {
        lurl = '/gtm/wideip';
      }
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert object name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/gtm/wideip/a/' + objRestName;
      if (bigip.version.match(/11/)) {
        lurl = '/gtm/wideip' + objRestName;
      }
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
    // list without name for top level monitr, must specify type
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}
BigipClient.list.ltm.monitor.diameter = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/diameter'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/diameter/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.dns = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/dns'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/dns/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.external = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/external'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/external/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.firepass = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/firepass'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/firepass/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.ftp = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/ftp'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/ftp/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.gateway_icmp = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/gateway-icmp'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/gateway-icmp/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.http = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/http'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/http/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.https = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/https'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/https/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.icmp = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/icmp'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/icmp/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.imap = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/imap'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/imap/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.inband = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/inband'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/inband/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.ldap = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/ldap'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/ldap/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.module_score = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/module-score'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/module-score/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.mssql = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/mssql'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/mssql/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.mysql = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/mysql'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/mysql/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}

BigipClient.list.ltm.monitor.nntp = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/nntp'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/nntp/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}

// There really is a monitor type none, not sure what it is...
BigipClient.list.ltm.monitor.none = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/none'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/none/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.oracle = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/oracle'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/oracle/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.pop3 = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/pop3'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/pop3/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.postgresql = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/postgresql'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/postgresql/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.radius = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/radius'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/radius/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.radius_accounting = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/radius-accounting'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/radius-accounting/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.real_server = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/real-server'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/real-server/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.rpc = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/rpc'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/rpc/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.sasp = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/sasp'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/sasp/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.scripted = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/scriped'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/scripted/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.sip = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/sip'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/sip/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.smb = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/smb'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/smb/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.smtp = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/smtp'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/smtp/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.snmp_dca = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/snmp-dca'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/snmp-dca/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.snmp_dca_base = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/snmp-dca-base'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/snmp-dca-base/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.soap = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/soap'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/soap/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.tcp = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/tcp'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/tcp/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.tcp_echo = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/tcp-echo'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/tcp-echo/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.tcp_half_open = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/tcp-half-open'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/tcp-half-open/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.udp = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/udp'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/udp/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.virtual_location = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/virtual-location'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/virtual-location/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.wap = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/wap'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/wap/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
}
BigipClient.list.ltm.monitor.wmi = function (bigip) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/wmi'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/wmi/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
  }
BigipClient.list.ltm.monitor.firepass = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/monitor/firepass'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/ltm/monitor/firepass/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl, options);
      return response;
    }
  }
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
BigipClient.list.ltm.profile = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/ltm/profile'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else if (obj.type === 'clientssl') {
      var objRestName = obj.name.replace(/\//g, "~");
      var lurl = '/ltm/profile/client-ssl/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
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
BigipClient.list.net.interface = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/net/interface'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/interface/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}

BigipClient.list.net.route = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/net/route'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/route/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.net.self = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/net/self'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/self/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.net.trunk = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/net/trunk'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/trunk/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}
BigipClient.list.net.vlan = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/net/vlan'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      // convert virtual name to rest name
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/net/vlan/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}

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

BigipClient.list.sys.management_ip = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/sys/management-ip'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}

BigipClient.list.sys.management_route = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/sys/management-route'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}

BigipClient.list.sys.provision = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/sys/provision'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}

BigipClient.list.sys.software.image = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/sys/software/image'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}

BigipClient.list.sys.software.hotfix = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/sys/software/hotfix'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}

BigipClient.list.vcmp.guest = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      var lurl = '/vcmp/guest'
      // list without name
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    } else {
      var objRestName = obj.replace(/\//g, "~");
      var lurl = '/vcmp/guest/' + objRestName;
      var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
      return response;
    }
  }
}

BigipClient.list.vcmp.virtual_disk = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/vcmp/virtual-disk'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}

BigipClient.list.vcmp.virtual_disk_template = function (bigip) {
  if (bigip.iControl == 'rest') {
    var lurl = '/vcmp/virtual-disk-template'
    // list without name
    var response = bigipRestList(bigip.ip, bigip.user, bigip.pass, lurl);
    return response;
  }
}
