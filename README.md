# fuckConsoleNode组件

## 简介

### 对于程序工程师来讲，console是最好的调试方法，直观又高效，然而每次提交到线上如果忘记删除代码中的console，又感觉像吃了苍蝇，所以这个工具意在每次执行线上打包时自动帮你检索并删除所有的`console.log`。

## 使用方法
### 1，将fuckConsole.js文件拷贝到需要处理的根目录；
### 2，修改文件中`modify_here`处，改为你需要处理的文件路径，例如你的文件目录是：
```
-index.js
-src
    --a.js
    --b.js
    --c.js
```
如上一级目录中是index.js、src文件夹，你希望处理src文件夹中的a.js,b.js,c.js。则你需要将fuckConsole.js文件拷贝到于src同级目录，并参照fuckConsole.js文件中`modify_here`处修改路径。

### 3，执行代码`node fuckConsole.js`

## 结尾语
### 代码初级，有更好的方式欢迎沟通！