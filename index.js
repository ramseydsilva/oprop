'use strict';

/**
 * @method getProperty
 * @augments Object
 * @param {String} str Dot representation of the object's property
 * @returns {Object} Returns the value of object's nested property, else undefined
 */
Object.prototype.getProperty = function(str) {
    return str.split('.').reduce(function(o, x) {return (typeof o != 'undefined' && !!o[x] ? o[x] : undefined)}, this);
}

/**
 * @method hasProperty
 * @augments Object
 * @param {String} str Dot representation of the object's property
 * @returns {Boolean} Wether this object contains the ennumerable property
 */
Object.prototype.hasProperty = function(str) {
    return !!this.getProperty(str);
}
