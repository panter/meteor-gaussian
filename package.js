Package.describe({
  name: 'panter:gaussian',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapps npm gaussian for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/panter/meteor-gaussian',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
/*
unfortuantly, the published version in npm of this package is outdated and has not a polyfill for client and server
so we use a certain commit here:
*/
Npm.depends({gaussian: "https://github.com/errcw/gaussian/tarball/456f2f099b417cdb3b1dd3ac5a2ab23411ac85ee"});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('panter:gaussian.js', 'server');
  api.addFiles('.npm/package/node_modules/gaussian/lib/gaussian.js', 'client');
  api.export("gaussian", 'server');
});

