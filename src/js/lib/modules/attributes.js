import $ from '../core';

$.prototype.getAttr = function (propetry) {
    for(let i = 0; i < this.length; i++) {
        if(this[i].getAttribute(propetry)) {
            return this[i].getAttribute(propetry);
        }
    }
    return this;
};

$.prototype.setAttr = function (propetry, value) {
    for(let i = 0; i < this.length; i++) {
        if(this[i].getAttribute(propetry)) {
            this[i].setAttribute(propetry, value);
        }
    }
    return this;
};

$.prototype.removeAttr = function(propetry) {
    for (let i = 0; i < this.length; i++) {
        if(this[i].getAttribute(propetry)) { 
            this[i].removeAttribute(propetry);
        }
    }
    return this;
};