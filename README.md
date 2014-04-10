Oprop
=====

Simple package that extends Javascript's Object object to have these helper
functions. 

See the docs: http://oprop.ramseydsilva.com

Install
-------

`npm install oprop`

Methods
-------

### hasProperty

Returns true or false
```
require('oprop');

myobj = {a: {b: {c: 1}}};

myobj.hasProperty('a'); // true
myobj.hasProperty('a.b.c'); // true
myobj.hasProperty('b.c'); // false
myobj.hasProperty('a.b.c.d'); // false
```

### getProperty 

Returns the object's property else undefined
```
require('oprop');

myobj = {a: {b: {c: 1}}};

myobj.getProperty('a'); // {b: {c: 1}}
myobj.getProperty('a.b.c'); // 1
myobj.getProperty('b.c'); // undefined
myobj.getProperty('a.b.c.d'); // undefined
```

Testing
-------

`npm test`


OMG IT EXTENDS OBJECT???!?!@
----------------------------
Yes, yes it does, with a single getters for each method, and no it won't break your code, because it does this properly with a non-enumerable property.

