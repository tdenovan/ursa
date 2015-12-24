Package.describe({
  name: 'xambe:ursa',
  version: '0.9.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper package for npm "ursa" package. Server side only.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xambe/ursa.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "ursa": "0.9.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use([
    'ecmascript',
    'coffeescript'
  ]);
  
  // Server side only files
  api.addFiles([
    'namespace.js',
    'ursa.coffee'
  ], 'server');
});
