'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-min-logical-width', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-min-logical-width');
    },
    enumerable: true
};