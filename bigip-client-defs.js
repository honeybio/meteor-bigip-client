// This is basically the TMSH tree listing to build a package that allows
// TMSH Style access to a Bigip

BigipClient = {
  create: {
    analytics: { },
    apm: { },
    asm: { },
    auth: { },
    cli: { },
    cm: { },
    gtm: { },
    ltm: { },
    mgmt: { },
    net: { },
    security: {
      firewall: { },
    },
    sys: { },
    wom: { },
  },
  delete: {
    analytics: { },
    apm: { },
    asm: { },
    auth: { },
    cli: { },
    cm: { },
    gtm: { },
    ltm: { },
    mgmt: { },
    net: { },
    security: {
      firewall: { },
    },
    sys: { },
    wom: { },
  },
  install: {
    sys: {
      license: { },
      software: { },
      crypto: { },
    },
  },
  list: {
    analytics: { },
    apm: { },
    asm: { },
    auth: { },
    cli: { },
    cm: { },
    gtm: {
      global_settings: { },
      wideip: { },
      pool: { },
    },
    ltm: {
      data_group: { },
      dns: {
        dnssec: { },
      },
      monitor: { },
      profile: { },
      persistnce: { },
    },
    mgmt: { },
    net: { },
    security: {
      firewall: { },
    },
    sys: {
      crypto: { },
    },
    wom: { },
  },
  load: {
    asm: { },
    sys: {
      config: { },
    }
  },
  modify: {
    analytics: { },
    apm: { },
    asm: { },
    auth: { },
    cli: { },
    cm: { },
    gtm: { },
    ltm: { },
    mgmt: { },
    net: { },
    security: {
      firewall: { },
    },
    sys: { },
    wom: { },
  },
  qkview: { },
  reboot: {
    volume: { },
  },
  restart: {
    sys: { },
  },
  save: {
    asm: { },
    sys: { },
  },
  show: {
    analytics: { },
    apm: { },
    asm: { },
    auth: { },
    cli: { },
    cm: { },
    gtm: { },
    ltm: { },
    mgmt: { },
    net: { },
    security: {
      firewall: { },
    },
    sys: { },
    wom: { },
  },
}
