const yargs = require('yargs');
const _ = require('lodash');

var debug = require('debug')('http');

debug('test debug');

const argv = yargs.argv;
debug(argv);
