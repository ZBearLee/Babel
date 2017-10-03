# Babel

    JS编译器babel, 让JS的现在和未来,变成进行时
    
    
 **配置和运行**
 新建.babelrc配置文件
 ```
{
    "presets":["es2015"]
}
```
*node.js命令*
```
npm init -y   //初始化
npm i -g babel-core
npm i babel-cli --save  
babel +filename  //执行
babel script.js -o babel-compiled   //执行生成babel-compiled文件
babel src --watch --out-dir lib   //实时更新
```


