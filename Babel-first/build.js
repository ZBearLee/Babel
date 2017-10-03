//let ani='animal';

//Es6支持class关键字
//类由属性，方法，构造函数
//实例化时立即运行
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chef = function () {
    //Chef 为类
    function Chef(food) {
        _classCallCheck(this, Chef);

        //constructor为构造函数
        this.food = food; //初始化
        this.dish = [];
    }

    _createClass(Chef, [{
        key: 'cook',
        value: function cook() {
            //方法,相当于function cook(){}
            console.log(this.food);
        }
    }, {
        key: 'menu',
        get: function get() {
            //获取get方法   get为修饰符
            console.log('get方法被调用了');
            return this.dish;
        },
        set: function set(dish) {
            //设置set方法  ，set为修饰符
            console.log('set方法被调用了');
            this.dish.push(dish);
        }
    }]);

    return Chef;
}();

//实例化
//var chef=new Chef('毛豆炒肉');


var chef = new Chef('毛豆炒肉');
chef.cook();
chef.food = '炸鸡';
chef.menu = '炸虾球'; //.menu比.food更复杂
chef.menu = '披萨';
//chef.dish.push('肯德基');      使用menu会变得更私有
console.log(chef.menu);
