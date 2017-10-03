let obj = { a: 1 }
let obj1 = { b: 2 }
var obj2 = Object.assign({}, obj, obj1) 
  //assign用来构建新对象的api,会将obj和obj1中的内容拷贝给obj2
//这样就可以省略继承了yarn
console.log(obj2)   //{ a: 1, b: 2 }
