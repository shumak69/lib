import $ from '../core';

$.prototype.html = function (content) {
    for(let i = 0; i < this.length; i++) {
        if(content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    console.log(this);
    return this;
};

$.prototype.eq = function (i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;
    
    for(let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

$.prototype.index = function () {
    const parent = this[0].parentNode;
    const childs = [...parent.children];
    const findMyIndex = (item) => {
        return item == this[0];
    };
    return childs.findIndex(findMyIndex);
};

$.prototype.find = function (selector) {
    let numberOfItems = 0;
    let counter = 0;
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const array = copyObj[i].querySelectorAll(selector);
        if(array.length == 0) {
            continue;
        }

        for(let j = 0; j < array.length; j++) {
            this[counter] = array[j];
            counter++;
        }

        numberOfItems += array.length;
    }

    this.length = numberOfItems;
    console.log(numberOfItems,  Object.keys(this).length);
    for(; numberOfItems < Object.keys(this).length; numberOfItems++) {
        delete this[numberOfItems];
    }
    return this;
};

$.prototype.closest = function (selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if(this[i].closest(selector) === null) {
            return this;
        } else {
            this[i] = this[i].closest(selector);
            counter++;
        }
        
    }
    for(; counter < Object.keys(this).length; counter++) {
        delete this[counter];
    }
    return this;
};

$.prototype.siblings = function () {
    const newObj = [...this[0].parentElement.children].filter(item => item !== this[0]);
    
    for (let i = 0; i < this.length; i++) {
        delete this[i];
    }
    
    Object.assign(this, newObj);
    this.length = newObj.length;
    return this;
};