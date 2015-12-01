Package.describe({
  name: 'bespintech:meteor-bigip-client',
  version: '0.0.1',
  summary: 'Client for F5 BIG-IP devices',
  git: 'git@10.1.10.38:honeyb-devs/meteor-bigip-client.git',
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('meteor-bigip-client.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bespintech:meteor-bigip-client');
  api.addFiles('meteor-bigip-client-tests.js');
});
