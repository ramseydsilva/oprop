'use strict';

var assert = require('assert');
require('./index');

var myobj = {a: {b: {c: 1}}};

// Test hasProperty
assert(myobj.hasProperty('a'));
assert(myobj.hasProperty('a.b.c'));
assert(myobj.hasProperty('b.c') == false);
assert(myobj.hasProperty('a.b.c.d') == false);

// Test getProperty
assert(myobj.getProperty('a') === myobj['a']);
assert(myobj.getProperty('a.b.c') === myobj['a']['b']['c']);
assert(myobj.getProperty('b.c') == undefined);
assert(myobj.getProperty('a.b.c.d') == undefined);
