#!/usr/bin/env node
require('shelljs/global');
require('colors');

var prettyms = require('pretty-ms'),
    startedAt = Date.now();

require('async').series([
    require('./test-lint'),
    require('./test-system')
], function (code) {
    console.info(`codeide: duration ${prettyms(Date.now() - startedAt)}\ntests: ${code ? 'not ok' : 'ok'}!`[code ?
        'red' : 'green']);
    exit(code && (typeof code === 'number' ? code : 1) || 0);
});
