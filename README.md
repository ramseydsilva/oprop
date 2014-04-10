oprop
=====

Simple plugin that extends Javascript's Object object with two helper methods `getProperty` and `hasProperty`. These methods take a dotted string to retrieve nested Object's properties. See the [docs][docs] or [blog post][blog] for more information.

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
Yes, yes it does, with a single getters for each method, and no it won't break your code, because it does this properly with a non-enumerable property. It's recommended not to install this plugin globally, so just skip the -g option during install and you'll be fine.


[docs]: http://oprop.ramseydsilva.com
[blog]: http://blog.ramseydsilva.com/2014/04/extending-javascript-objects/
