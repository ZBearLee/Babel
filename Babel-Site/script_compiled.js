'use strict';

var str = '您好!';

var func = function func() {
    console.log('bbb');
};

var appEle = document.querySelector('#app');
var foods = ['pear', 'apple', 'bread', 'rice'];
appEle.innerHTML = foods.map(function (food) {
    return '<div>' + food + '</div>';
}).join('');
