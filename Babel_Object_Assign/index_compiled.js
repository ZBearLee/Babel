"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var obj = { a: 1 };
var obj1 = { b: 2 };
var obj2 = _extends({}, obj, obj1); //assign用来构建新对象的api,会将obj和obj1中的内容拷贝给obj2
//这样就可以省略继承了yarn
console.log(obj2); //{ a: 1, b: 2 }
