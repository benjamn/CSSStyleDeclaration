'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-text-security', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-security');
    },
    enumerable: true
};