Package.describe({
  name: 'bespintech:meteor-bigip-client',
  version: '0.0.1',
  summary: 'Client for F5 BIG-IP devices',
  git: 'git@10.1.10.38:honeyb-devs/meteor-bigip-client.git',
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'request' : '2.67.0',
  'python-shell' : '0.3.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.export('BigipClient', 'server');
  api.addFiles('bigip-icontrol-rest.js', 'server');
  api.addFiles('bigip-icontrol-soap.js', 'server');
  api.addFiles('bigip-client-defs.js', 'server');
  api.addFiles('bigip-client-create.js', 'server');
  api.addFiles('bigip-client-delete.js', 'server');
  api.addFiles('bigip-client-install.js', 'server');
  api.addFiles('bigip-client-list.js', 'server');
  api.addFiles('bigip-client-load.js', 'server');
  api.addFiles('bigip-client-modify.js', 'server');
  api.addFiles('bigip-client-qkview.js', 'server');
  api.addFiles('bigip-client-reboot.js', 'server');
  api.addFiles('bigip-client-restart.js', 'server');
  api.addFiles('bigip-client-save.js', 'server');
  api.addFiles('bigip-client-show.js', 'server');
  api.addFiles('bigip-client-download.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bespintech:meteor-bigip-client');
  api.addFiles('meteor-bigip-client-tests.js');
});
