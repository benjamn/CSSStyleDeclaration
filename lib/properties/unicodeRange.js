'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('unicode-range', v);
    },
    get: function () {
        return this.getPropertyValue('unicode-range');
    },
    enumerable: true,
    configurable: true
};
