BigipClient.create.apm.aaa = function () { }
BigipClient.create.apm.configuration = function () { }
BigipClient.create.apm.epsec = function () { }
BigipClient.create.apm.ntlm = function () { }
BigipClient.create.apm.policy = function () { }
BigipClient.create.apm.profile = function () { }
BigipClient.create.apm.sso = function () { }

BigipClient.create.asm.policy = function () { }

BigipClient.create.gtm.datacenter = function () { }
BigipClient.create.gtm.distributed_app = function () { }
BigipClient.create.gtm.link = function () { }
BigipClient.create.gtm.listener = function () { }
BigipClient.create.gtm.prober_pool = function () { }
BigipClient.create.gtm.region = function () { }
BigipClient.create.gtm.rule = function () { }
BigipClient.create.gtm.server = function () { }
BigipClient.create.gtm.topology = function () { }

BigipClient.create.ltm.eviction_policy = function () { }
BigipClient.create.ltm.ifile = function () { }
BigipClient.create.ltm.nat = function () { }
BigipClient.create.ltm.node = function () { }
BigipClient.create.ltm.policy = function () { }
BigipClient.create.ltm.policy_strategy = function () { }
BigipClient.create.ltm.profile = function (bigip, obj) {
  if (bigip.iControl == 'rest') {
    if (obj === undefined) {
      return null;
    } else if (obj.type === 'clientssl') {
      var chainName = obj.cert.replace(/\/Common\//, '') + '_' + obj.chain.replace(/\/Common\//, '');
      //var chain = {
      //  cert: obj.cert,
      //  chain: obj.chain,
      //  key: obj.key
      //}
      var lurl = '/ltm/profile/client-ssl';
      var body = {
        name: obj.name,
        ciphers: obj.ciphers,
        cert: obj.cert,
        key: obj.key,
        chain: obj.chain
      }
      var response = bigipRestCreate(bigip.ip, bigip.user, bigip.pass, lurl, body);
      return response;
    }
  }
}
BigipClient.create.ltm.pool = function () { }
BigipClient.create.ltm.rule = function () { }
BigipClient.create.ltm.snat = function () { }
BigipClient.create.ltm.snat_translation = function () { }
BigipClient.create.ltm.snatpool = function () { }
BigipClient.create.ltm.traffic_class = function () { }
BigipClient.create.ltm.virtual = function () { }
BigipClient.create.ltm.virtual_address = function () { }

BigipClient.create.net.route = function () { }
BigipClient.create.net.self = function () { }
BigipClient.create.net.trunk = function () { }
BigipClient.create.net.vlan = function () { }

BigipClient.create.security.firewall.address_list = function () { }
BigipClient.create.security.firewall.policy = function () { }
BigipClient.create.security.firewall.port_list = function () { }
BigipClient.create.security.firewall.port_misuse_policy = function () { }
BigipClient.create.security.firewall.rule_list = function () { }
BigipClient.create.security.firewall.schedule = function () { }
BigipClient.create.security.firewall.user_domain = function () { }
BigipClient.create.security.firewall.user_list = function () { }

BigipClient.create.sys.application = function () { }
BigipClient.create.sys.crypto = function () { }
