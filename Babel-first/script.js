'use strict';
class Chef {       //Chef类
    constructor(food){     //constructor为构造函数
        this.food=food;    //初始化
        this.dish=[];
    }

get menu(){      //获取get方法   get为修饰符
    console.log('get方法被调用了'); 
   return this.dish;
  
}

set menu(dish){      //设置set方法  ，set为修饰符
 console.log('set方法被调用了');
this.dish.push(dish);
}

    cook(){     //方法,相当于function cook(){}
    console.log(this.food);
    }
}


//实例化
//var chef=new Chef('毛豆炒肉');
let chef=new Chef('毛豆炒肉');
chef.cook();
chef.food='炸鸡';
chef.menu='炸虾球';
chef.menu='披萨';      
//chef.dish.push('肯德基');   
console.log(chef.menu);

