Oprop
=====

Simple module that extends Object to have these helper functions

hasProperty
-----------
Returns true or false
```
require('oprop');

myobj = {a: {b: {c: 1}}};

myobj.hasProperty('a'); // true
myobj.hasProperty('a.b.c'); // true
myobj.hasProperty('b.c'); // false
myobj.hasProperty('a.b.c.d'); // false
```

getProperty
-----------
Returns the object's property else undefined
```
require('oprop');

myobj = {a: {b: {c: 1}}};

myobj.getProperty('a'); // {b: {c: 1}}
myobj.getProperty('a.b.c'); // 1
myobj.getProperty('b.c'); // undefined
myobj.getProperty('a.b.c.d'); // undefined
```
