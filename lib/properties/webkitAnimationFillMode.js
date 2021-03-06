'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-animation-fill-mode', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation-fill-mode');
    },
    enumerable: true,
    configurable: true
};
