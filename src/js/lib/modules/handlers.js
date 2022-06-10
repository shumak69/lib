import $ from '../core';

$.prototype.on = function (eventName, callback) {
    if(!eventName || !callback) {
        return this;
    }
    try{
        for(let i = 0; i < this.length; i++) {
            this[i].addEventListener(eventName, callback);
        }
        return this; 
    }catch(e){}
};

$.prototype.off = function (eventName, callback) {
    if(!eventName || !callback) {
        return this;
    }
    try{
        for(let i = 0; i < this.length; i++) {
            this[i].removeEventListener(eventName, callback);
        }
    } catch(e){}
    return this;
};

$.prototype.click = function (handler) {
    for(let i = 0; i < this.length; i++) {
        if(handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};

