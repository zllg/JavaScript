





# 第一章 javascript介绍

javascript一种轻量级的脚本语言，也是一种**镶入式**语言，是一种对象模型语言，简称**js**

1：基本的语法构造（比如操作符、控制结构、语句）

2：标准库（就是一系列具有各种功能的对象的Array、data、Math等）

想要实现其他复杂的操作和效果，都要依靠于**宿主环境**提供API，目前，已经镶入js的宿主环境有多种，最常见的环境就是**浏览器**，另外还有服务器环境（操作系统）



**javascript现在的意义（应用场景）**

javascript发展到现在几乎无所不能

1. **网页特效**

2. **服务端开发（Nde.js）**

3. 命令行工具（Node.js）
4. 桌面程序（Electron）
5. APP（Cordova）
6. 控制硬件-物联网（Ruff）
7. 游戏开发（cocos2d.js）

c++写操作系统，依赖硬件 ，js写不了硬件方面

## 1.2发展及历史

1994年 网景浏览器

1995年微软退出IE1.0  

1995布兰登.  艾奇 开发在浏览器运行的脚本语言

1996年微软开发相近语言，JScript，内置于IE3.0

![1569393818174](C:\Users\傲慢与~1\AppData\Local\Temp\1569393818174.png)

## 1.3 ECMAscript和javascript

ECMAscript是一套标准，定义了一种语言的标准，规定了基本语法，数据类型，关键字，具体API的设计规范等

## 1.4 js 和HTML、css

js行为  html结构  css样式     相分离

## 1.5 JS学习概况

分为两部分，语**言结构及宿主环境**提供的API；

语言结构部分主要语言规则以及内置对象（标准库对象）；

而宿主环境提供的ApI，根据宿主环境不同，以浏览器为例，最常见的三个类型：

浏览器控制类、DOM操作类、网络控制类



![1569394664605](C:\Users\傲慢与~1\AppData\Local\Temp\1569394664605.png)

总结：javascript语言简称js，是一种镶入式的脚本语言，应用范围及其广泛，由布兰登-艾奇开发在20+年的发展中历经沧桑，学习js分为**语言规则**及其**宿主环境**两部分

# 第二章 入门

## 2.1 内部、外部写js  实例

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <input type="button" value="按钮" onclick="alert(123)">
    <script>
        alert(345)
    </script>
    <script src="./1.0.js"></script>
    <!--外部引入js
        引入外部后将就不要在写其他js，写了也没有用。
        如果写了不会报错，但是也不会运行
    -->
</body>
</html>
```

## 2.3变量

### 2.3.1 什么是变量

变量是计算机内存中存储数据标识符，根据变量名称可以获取到内存中存储的数据

为什么要要使用变量

使用变量可以方便的获取或者修改内存中的数据

**变量就是存储数据的容器**

### 2.3.2 如何使用变量

- var声明变量

  ```
  var age;
  ```

  变量的赋值

  ```
  var age;
  age = 18;
  ```

  同时声明多个变量

  ```
  var age = 10,name = "lf";
  ```

  

### 2.3.3变量的命名规范和规则

规则-必须遵守，不遵守会报错

1. ​	由字母、数字、下换线、$符号组成，且不能以数字开头

2. ​	不能是关键字和保留字，例如：for 、while

3. ​	区分大小写

4. ​	变量名必须有意义

5. ​	遵守驼峰命名法（首字母小写，后面单词的首字母需要大写，例如：userName、							   userPassword）

   

   下列哪些是错误命名

   ```
   		   var a,
               i,
               age18,
               18age,//不合法  因为数字开头
               $names,
               name$*,//不合法，因为有特殊字符*
               _sex,
               hello123;
   ```

   

### 2.3.4 案列

1. 交换两个变量的值

   ```
   //将两个变量的值进行交换 
            var a = 1;
            var b = 2;
            var c = 3;
           a=b;//把b的值赋给a
           b=c;//把c的值赋给了b
           alert(a);//a等于2
           alert(b);
   ```

   

2.

```
		<script>
         //不使用临时变量，交换两个变量的值
         var num1 = 10;
         var num2 = 20;
         //计算的方式，累加  然后相减
         num1 = num1 + nmu2; //30
         num2 = num1 - num2;//30-20
         num1 = num1 - num2;//30-10=20
         console.log(num1);
         console.log(num2);
 		 </script>
```

## 2.4 数据类型

```
//数值number 、字符串string、布尔Boolen、undefined、null、对象Object
```

转义符

![1569500593122](C:\Users\傲慢与~1\AppData\Local\Temp\1569500593122.png)

```
<script>
        //var age = 18;
        //var unu = 1.2;
        //数值number 、字符串string、布尔Boolen、undefined、null、对象Object
       // var str1 = 李四;
        //李四不是字符串
        //var str1 = "李四";
        //使用单引号或者双引号  引起来的才是字符串
        //var kk = "123";
        //"123"是字符串，双引号引起来的都是字符串
        var str = '你好，我是\'王大拿\'';
        alert(str);
        //如果在字符串要使用单引号，请加转义字符
        var str1= '我喜欢\"黑马\"\'程序员\''
        alert(str1);
        //打印出 我喜欢“黑马”'程序员'
        var str2 = '我喜欢\\\"黑马\"\'程序员\''
        alert(str2);
        //我喜欢\“黑马”'程序员',打印出斜杠  要打两个
    </script>
```

**字符串拼接**

```
<script>
        var s1 = '123';
        console.log(s1.length);
        var s2 = '456';
        var s3 = s1+s2;
        var s4 = 1;
        var s5 = 2;
        console.log(s3+s4+s5);//结果"12345612"
        //加号既可以作为数学运算，也可以作为字符串拼接
        //从前往后运算，如果两个变量都是数值型那么加号作为数学运算符号
        //直到遇到一个字符号，此后所有都是字符串拼接
    </script>

```

**Boolean类型**

Boolean自变量： true和false ，区分大小写

计算机内存存储：（true为1 ，false为0）

**Undefined和Null**

1. undefinder表示一个声明了没有赋值的变量，变量只声明的时候值默认是undefinder
2. null表示一个空，变量的值如果想为null，必须手动设置

## 2.5复杂数据类型

Object后面详解

谷歌浏览器，快速查看数据类型： 字符串颜色是黑色，布尔类型是蓝色的，undefinder和null是灰色的

```

```

# 第三章 数据类型转换

## 3.1转换成字符串类型

```
    <script>
        //var n = 5;
        //var s = n.toString();
        //console.log(s);//结果是5
        //console.log(typeof s);//数值被转为字符串类型 string
        
        //console.log(typeof String(n)) 
        //结果是字符串

        //var s = ''+n;
        //console.log(typeof s);//String
        //加号数值类型转换，

        //var n = true;
        //console.log(typeof n.toString());
        //三种方式  其他类型转为字符串
    </script>
```



## 3.2 转换成数值类型

```
        /*var a = '1';
        var b =  Number(a);
        console.log(typeof b);//number
        

        var c = Number("c");
        var d = Number(null);
        var e = Number(undefined);

        console.log(c,d,e);//NaN 0 NaN
        undefined转换成Nan
        
        //用parseInt
        var a = parseInt('2');
        var b = parseInt('k23');
        var c = parseInt(null);//NaN
        var d = parseInt(undefined);
        console.log(a,b,c,d);//只打印了2
      
       var a = parseFloat('1.23fd');//1.23
       var b = parseFloat('1.34');//1.34
       var c = parseFloat(null);//NaN
       var d = parseFloat(undefined);//NaN
       var e = parseFloat('h34'); //NaN
       console.log(a, b, c, d,e);
        
```



## 3.3 转换成布尔型类型

```
		布尔类型转换
        var a = Boolean('0');//true
        var b = Boolean(0);//false
        var c = Boolean('2');//true
        var d = Boolean(null);//false
        var e = Boolean(undefined);//false
        var f = Boolean('');//false
        console.log(a, b, c, d, e,f);//   
```



# 第四章 操作符

## 4.1算数运算符

```
	  var s1 = 6;
       var s2 = 4;
       console.log(s1%s2);//  +-*/ 
       //%  为取余数    *是乘法  /是除法符号
```

## 4.2 一元运算符

一元运算符：只有一个操作数的运算。一元运算符会直接修改原始变量的数据；

5+6两个操作数的运算符 二元运算符

++ 自身加(自增)

-- 自身减(自减)

```
/*
             var n1 = 5;
             //n1--   //4
             //n1++   //6
            ++n1;//6
            var n2 = 6;
             console.log(n1+ n2++);//12
             console.log(n1+ ++n2);//13
             console.log(n2);
             // 操作符在变量前面，先进行自身运算，在进行其他运算
             // 操作在变量的后面，先进行其他运算，在进行 自身运算   
            
           var a = 1;
           //++a:  a=1+1=2  , 所以a现在等于2 ，在+ 2++ ，因为++在变量后面 
            先进行其他运算 就是2+2=4
           var b = ++a + a++;
           console.log(b);//结果是4
           console.log(a);
         */ 
            var a = 1;
            //此时a是1  自身就会在+1 所以a是2   ++a是 3
            var b = a++ + ++a;
            console.log(b);// 4
```

```
		   var a = 1;
            var b = ++a + ++a;
            console.log(b);//5
            //++1等于2，++a  就是2+1=3  ，然后2+3等于5
```

## 4.3逻辑运算符(布尔运算符)*

```
&& 与 两个操作数同时为true，否则都是false
|| 或 两个操作数有一个为true，结果为true，否则为false
！ 非 取反
```

```
		//逻辑运算符(布尔运算符)*
            // &&逻辑与运算符(参与运算的数据同时为真，结果为真)
            // ||逻辑或运算符(参与运算的数据只要有一个为真，结果为真)
            // ！逻辑非运算符(获取相反的结果  当前结果是真 就取反)
            //var a = true;
            //console.log(!a);//结果为false  为假
            var a = 1;
            var b = 2;
            var c = 0;
            //console.log(a && b);//结果是2，
            // console.log(c && b);//0 
            //console.log(c || b);//2
            console.log(a || c && b);//1  1或者2 都是真 true
            //在js中，逻辑运算的结果是决定整个表达式的子表达式
```

## 4.4关系运算符(比较运算符)

```
 //  >,<,=,>=,<=, ==等于,!=不等于,===全等,!==不全等
 
             // var a = '2';
             // var b = 2;
             //console.log(a==b);//true 相等
              //console.log(a === b);//false
              //js是一种弱类型语言
              //变量的数据类型存在自动转换
              //==等于 是指相等，不比较数据类型
              //===全等就是值 和数据类型都要相等
```

## 4.5 赋值运算符

注意与数字符号的差别

```
            //赋值运算

            // =，+=，-=，/=，%=；
            var a = 1;
            //a = a+4;可以写成a+=4;//结果都是5 
            //a = a-2;可以写成a-=2;//结果是-1
            console.log(a);
```

## 4.6 运算符的优先级

```
优先级从高到低
1.()优先级最高
2. 一元运算符 ++ -- ！
3.算数运算符 先* / %  后 + -
4.关系运算符 > >= < <=
5.相等运算符 ==  != === !==
6.逻辑运算符 先&& 后||

```

```
		   var a = 1;
            var b = 2;
            var c = 0;
            console.log((a || c)&& b);//加上括号
```

```
			//运算符的优先级
            /*var a = 1;
            var b = 2;
            var c = 0;
            console.log((a || c)&& b);
            //
            */
           //var s =4 >= 6 || '人' !='哈哈' &&!(12*2+3==122)&& true;
           //console.log(s);//true
           // var s =4 >= 6 || '人' !='哈哈' &&!(false)&& true;
           //var s = false || '人' !='哈哈' &&!(false)&& true;
           //var s = false || '人' !='哈哈' && true && true;
           //var s = false || true && true && true;
           //var s = false || true && true ;
           //var s = false || true;
           //var s = false || true; 结果是真或者假  所以输出结果是true
            var n = 10;
            var f = 5 ==n/2 && (2+2*n);
            //var f = 5 == n/2 && (22);
            //var f = 5 == 5 && (22);
            //var f = true && (22);
            //true 结果就是22
            console.log(f);	//输出结果22
```

# 第五章 流程控制

程序的三种基本结构****

**顺序结构**：从上到下执行的代码就是顺序结构；

程序默认就是由上到下顺序执行的；

**分支结构**：根据不同的情况及判断，执行对应代码；

循环结构：重复执行一段代码；

## 5.1 分支结构

### **if**语句

```
		   //分支结构
            if (1>2) {//2>1条件成立  所以执行下面
                console.log(1)
            }else if(4>5){
                console.log('不显示');
            }else{
               console.log(5); 
            }
            console.log(2);
            
           //if else  if 如果有代码执行了  那么后面的代码不管成不成立都不执行
           //如果前面的if成立。后面else if 成不成立都不会执行
           //如果if  、else if 都不成立 else才会执行
```

```
		 var n1 = 100;
          var n2 = 20;
          if (n1>n2) {
              6console.log(n1);   //输出结果100，下面的不执行
          }else{
              console.log(n2);
          }
```

```
	   var n =7 ;
        if (n%2==0) {
            console.log('偶数');
        }else{
            console.log('奇数');//打印结果是奇数  7/2=3余1
        }
```

下面写一个判断哪一年是闰年

```
        //判断某一年是不是闰年
        //闰年，能被4整数，但是不能被100整除或者能被400整除的年份
        var year = 2020;
        if (year % 4 == 0) {
            if (year % 100 != 0) {
                console.log('闰年');
            } else if (year % 400 == 0) {
                console.log('闰年');
            } else {
                console.log('平年');
            }
        } else {
            console.log('平年');
        }
        //2020年是闰年

```

### switch语句

```
 //switch case 用法
       switch (值) {
           case 值1:
               code;
               break;
            case 值2:
                code;//code是代码
                break;
           default:
               code;
               break;
       }
```

```
var jibie = 'B';
      switch (jibie) {
          case 'A':
              console.log('90以上');
              break;
          case "B":
              console.log('80-90之间');
              break;
          case 'C':
              console.log('70-80之间');
              break;

          default:
              console.log('比较差');
              break;
      }
     //打印结果80-90之间
```

## 5.2 循环结构

### 5.2.1 while语句

```

//while循环  如果里面条件成立 里面的代码进行不断循环 反复执行 ，直到条件不成立
      //每次执行代码前 都要对条件进行重新判断，直到条件不成立，循环结束
      var i = 0;
      while (i<10) {       //condition 是条件的意思
          console.log(i);
          i++;
      }
      console.log(50);//打印结果 0-9 、50 
      
```

```
//请计算1-100之间的所有数的和 (使用while循环)
      /*
      var i = 1;
      var s =0;
      while(i<=100){
          s = s+i;
          i++;
      }
    console.log(s);
```

```
      //请计算100以内7的倍数有哪些

      var i = 1;
      while (i<=100) {
        if(i%7 == 0) {
            console.log(i);
        }
        i++;
      }
```

```
//请打印100以内所有偶数的和
      var i = 0;
      var s = 0;
      while (i <= 100) {
          if (i%2 == 0) {
            s+=i;  
          }
          i++;
      }
      console.log(s);
```

```
      //请打印100以内所有能被3整数的和
      var i = 0;
      var s = 0;
      while (i <= 100) {
          if (i%3 == 0) {
              s+=i;
          }
          i++;
          
      }
      console.log(s);
```



### 5.2.2 do..while语句

```

       //先执行代码，然后在进行条件判断
       //如果条件成立代码继续循环执行，条件不成立，代码不执行
       //也就是  do while  代码一定会执行一次  最少 100%
       //do { 代码} while (condition);
      var i = 15;
      do {
          console.log(i);
          i++;
      } while (i<20);//打印结果15-19
      //先执行  在看条件 就用do while循环
```



### 5.2.3 for语句

```
        //使用for循环
        // for(初始表达式;判断表达式;自增自减运算){
        //for(var i=1;i<10;i++)
        //console.log(i);

        //打印1-100之间所有数的和
        var s = 0;
        for(var i=0;i<=100;i++){
            s+=i; 
        }
        console.log(s);//5050
```

```
        var s = 0;
        for(var i=0;i<=100;i++){
            if (i%2 == 0) {
                s+=i;
            } 
        }
        console.log(s);//2550
```

```
        //*符号横纵10个 打印正方形
        var s ='';
        for(var i=0;i<10;i++){
            for(var h=0;h<10;h++){
                s+="* ";
            }
            s+='\n';
            //**********\n
            //**********
        }
        console.log(s);
```

        **//*符号打印三角形    逐行递减、** 

```
        //*符号打印三角形    逐行递减、
        var s = "";
        for(var i=0;i<10;i++){
            for(var h=i;h<10;h++){
                s +="* ";
            }
            s += "\n";
        }
        console.log(s);
```

​         **//for循环 乘法表** 

### 5.2.4 continue和break

**break:立即跳出整个循环，既循环结束，开始执行循环后面的内容(直接跳到大括号)**

**continue：立即就跳出当前的循环，继续下一次循环(跳到++的地方)**

```
            //continue和break

            //100以内 不能 被7整数的所有数的和
            var  s = 0;
            for(var i=0;i<=100;i++){
                if(i%7 == 0){
                    continue;//如果i除以7余数等于0  不管后面 跳到i++
                    //只要被7整数都不要
                }
                s+=i;
            }
            console.log(s);//打印结果4315
```

```
//请打印在200-300之间 第一个 能被7整除的数字
           
            for(var i=200;i<300;i++){
                 if (i % 7 == 0){
                     console.log(i);//203就能被7整除 等于29 break用法
                     break;
                 }
            }
```

### 总结：

**代码的执行流程分为顺序、分支和循环三种结构，顺序结构是默认的，判断结构主要有if-else和switch-case两种，循环结构有while、do-while、for三种，其中continue和break是跳出循环；**

# 第六章 JS中特殊的对象-数组

之前学习的数据类型，只能存储一个值(比如：Number/String)。我们想再一个变量重存储多个值，应该如何存储？



所谓数组，就是将多个元素(通常是同一类型)按一定顺序排列放到一个集合中，name这个集合我们就称之为数组。

![1569672513894](C:\Users\傲慢与~1\AppData\Local\Temp\1569672513894.png)

## 6.1数组的创建



```
             var arr = ['a','b','c'];//三个字符串abc
             var arr2 = [1,2,3];//储物柜
                          //箱子取东西
           // console.log(arr[2]);//a、b、c对应0、1、2  所以打印结果是c
            //创建数组  字面量方式创建数组
            //var a1 = [];//空数组
```

```
            //var a1 = [1,'d'];//字面量
            //console.log(a1);//拿出箱子所有数据
            
            //构造函数方式  创建数组 重点
            var a1 = new Array(1,3,'h','k');
            console.log(a1);  
```

![1569673206849](C:\Users\傲慢与~1\AppData\Local\Temp\1569673206849.png)

## 6.2获取数组元素

```
            //获取数组元素
            //数组内容的标号 称之为下标
            //var a1 = ['red','green','yellow'];
            //console.log(a1[2]);//  打印结果是yellow

            //var a2 = ['刘飞','那么帅',['吧唧','小乔',['滴滴','阿狸']]];//三维数组
            //console.log(a2[2][1]); //打印结果是小乔
            //console.log(a2[2][2][1]); //打印结果阿狸  找下标就完事了
```

## 6.3遍历数组

**for循环   遍历数组元素(挨个打印)** 

```
 		//for循环   遍历数组元素(挨个打印)
            var a1 = ['a','b','c','d','e','f'];
            ///数组所有元素挨个打印
            for(var i=0;i<a1.length;i++){
                console.log(a1[i]);
            }
```

**while循环  遍历数组元素** 

```
            //while循环  遍历数组元素
            var a1 = ['a', 'b', 'c', 'd', 'e', 'f'];
            var i = 0;
            while(i<a1.length){
                console.log(a1[i]);
                i++
            }
```

## 6.4数组操作例子 

**打印出数组中所有的偶数** 

```
             var arr = [9, 200, 7, 16, 5, 4, 3, 2, 10];//对2去余等于0
             var i= 0;
             for(var i=0;i<arr.length;i++){
                if(arr[i]%2==0){
                    console.log(arr[i]);
                }
             }
```

**将数组中的元素  以| 分割成一个字符串  // 9|200|7|16|5  这样的** 

```
             //将数组中的元素  以| 分割成一个字符串  // 9|200|7|16|5  这样的
             var arr = [9, 200, 7, 16, 5, 4, 3, 2, 10];
             var s= " ";
             for(var i=0;i<arr.length;i++){  
             //惯性操作就好   循环数组 你就能拿到元素
                 s+= arr[i] + '|';            //
             }
             console.log(s);//打印效果   9|200|7|16|5|4|3|2|10|
             //不会不要紧  动手写就会了
```

# 第七章 函数

把一段相对独立的具有特定功能的代码块封装(写到一个地方)起来，形成一个独立实体，就是函数，起个名字(函数名)，在后续开发中可以反复调用

**函数的作用就是封装一段代码，将来可以重复使用**

## 7.1 函数的声明以及调用

### 7.1.1声明

```
             //声明函数

             //关键字声明
             function 函数名() {   
                 代码
             }

             //表达式声明
             var f(函数名) = function() {
                 代码
             }
```

### 7.1.2调用

```
             //函数声明后里面的代码是不会执行的
             //函数中的代码想要执行 就必须调用这个函数(只要不调用，就一定不会执行)
             
             function f1() {
                 console.log(2);
                 
             }
             //函数的调用 函数名后面加()
             f1();
             f1();//调用几次打印几次  
             

                function s() {
                    var n = 0;
                    for(var i=0;i<=100;i++){
                        n+=i;
                    }
                    console.log(n);   
                }
                s();//打印结果5050
```

## 7.2参数

**形参和实参定义：**

1. 形式参数：在声明一个函数的时候，为了函数的功能更加灵活，有些值是固定不了的，对于这些固定不了的值，我们可以给函数设置参数，这个参数没有具体的值，仅仅起到一个占位置的作用，我们通常称之为形式参数，也叫形参
2.  实际参数，如果函数在声明时，设置了形参，那么在函数调用的时候就需要传入对应的参数，我们把传入的参数叫做实际参数，也叫实参

------



​        **//形参与实参**

```
        //形参与实参
        function s() {
            var n = 0;
            for (var i = 0; i <= 100; i++) {
                n += i;
            }
            console.log(n);
        }
        s();
```

```
        // function fun(形参1，形参2,形参3){}
        //调用的时候传参  function(实参1，实参2，实参3)//  都可以传很多参
                function s(k) {     //形式
                        var n = 0;
                        for (var i = 0; i <= k; i++) {
                            n += i;
                        }
                        console.log(n);
                    }
                    s(50);   //实际的值  50的值 传给了k这个变量
                    s(100);  
                    */
```

     **//形参和实参怎么用** 

```
                    //形参和实参怎么用
                    //形参 形式参数 ：声明函数时候的，
                    多个使用逗号隔开，形参的值不固定，形参仅仅是一个

                    
                    //实际参数：是在调用时，实际传入函数的值，传入后 ，
                    在函数中使用形参获取具体的值
                  function fn(a,b) {
                      console.log(a+b);
                      
                  }  
                  fn(1,4);
                  fn(5,5);
                  fn(8,9);
```

## 7.3 函数的返回值

当函数执行完的时候，并不是所有时候都要把结果打印，我们期望函数给我们一些反馈，(比如计算的结果返回进行后续的运算)，这个时候可以让函数返回一些东西，也就是返回值，函数通过return返回一个值

**语法**

```
                  语法规则

                  function(形参，形参){
                    代码
                    return 返回值
                    }
                  
                  var re = f(实参1，实参2)
       
```

```
                  function f(a,b) {
                      var c = a-b;
                      return c;
                  }
                  var h = f(10,8);
                  console.log(h);

```

说明：

​     //如果函数中没有return，那么函数调用之后接到的返回值就是endefined

​    //如果函数中有return，但是后面没有值，那么函数调用之后接到的返回值也是endefined

​    //函数中return之后，不管有什么代码均不执行：return之后函数的调用

7.4函数相关的其他事情

### 7.4.1 匿名函数与自调用函数

匿名函数：没有名字的函数

匿名函数如何使用：

将匿名函数赋值给一个变量，这样就可以通过变量进行调用

```

                //函数本身没有名字
                var fun = function(){
                    console.log(1);
                    
                }
                fun();//结果毫无疑问打印1
                

               //立即执行函数  自调用的匿名函数
                (function() {
                  alert(123);  
                })();

                //作用域：防止全局变量的污染，封装局部作用域
```

**自调用**

```
//函数也是一种数据类型
                function fn() {
                    
                }
                //function 数据类型--->>对象(数组、函数)
                console.log(typeof fn);//打印结果function
                

                function f1(s) {
                    //var k = 123+s;
                    //console.log(k);
                    s();
                }
                var f2 = function() {
                    console.log(222);
                    
                }
                //f2会被当做值，传入f1函数内  
                //回调
                f1(f2);
```



### 7.4.2 函数本身也是值

```
                //返回到函数外面在执行
                //这就是  闭包

                function f1() {
                    var a = 10;
                    var f2 = function() {
                        alert(2);
                    }
                    return f2;
                }
                var k = f1();
                k();
                //回调、闭包 原理
```

# 第八章 作用域与JS代码的运行

作用域：变量可以起到作用的范围和区域

## 8.1 全局变量和局部变量

1. 全局变量与全局作用域

   在任何地方都可以访问到变量就是**全局变量**，全巨变量所在的区域就是**全局作用域**

2. 局部变量

   只有固定的代码片段内可访问到的变量，最常见的例如函数内部的变量，就是**局部变量**，局部变量所在的区域就是局部作用域(函数作用域)

```
不适用var 声明的变量就是全局变量，不推荐使用，
变量退出作用域之后会销毁，全局变量关闭网页或浏览器才会销毁
```

```
                var a = 1;//全局的
                //函数里面就是局部作用域  ，函数外面就是全局作用域
               function f1(params) {
                    var a = 2;
                }
```

```
                 var f2 = function name(params) {
                     var a= 1;
                     console.log(a);
                     
                 }
                 console.log(a);
                 f2();
                 var a = 2;
```



## 8.2变量提升

js代码执行前，浏览器会给他一个全局的环境 叫window，在window（全局作用域）下浏览器找到所有的带var和function的关键字，然后他们分配内存的地址，不管你赋值没赋值，浏览器告诉所有的子模块，这个东西存在了，这种能力叫变量提升。 

**变量的提升（它不是变量的功能，而是浏览器的功能）** 

这里附上链接参考<https://www.cnblogs.com/shangjun6/p/9791786.html> 

```
                 console.log(a);
                 var a = 2;  //打印结果是undefined
                 //存在 变量提升：代码执行之前，变量一定在编译阶段被声明了

                 //JS代码运行分为两个阶段
                 //1. 解析(编译)阶段：  语法检查 ，变量既函数进行声明

                 //2. 运行阶段： 变量的赋值，代码流程的执行
                  
                 var a;
                 console.log(a); //先打印在赋值  所以结果是undefined
                 a = 2;
```

**以后自己代码有bug了 ，就要想想自己代码是不是 变量提升了** 

```
                 var a = 25;//声明变量 然后赋值了
                 function abc(params) {  //声明有个函数
                    
                     alert(a); //局部作用有a，但是在下一行 
                     var a = 10;

                 }
                 abc();//打印结果是undefined
```

## 8.3 JS代码的运行

代码执行顺序：从上往下，一行一行的执行（也叫一个模块一个模块的执行） 

记个大佬大厂面试：

<https://mp.weixin.qq.com/s/fZ0hDw861hUXs3udL871iw>  

## 8.4词法作用域

作用域共有两种主要的工作模型——词法作用域和动态作用域，**JS采用词法作用域** 

简单地说，词法作用域就是定义在词法阶段的作用域。换句话说，词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的

*由上面对词法作用域的描述可知，词法作用域的创建发生在预编译阶段，因为词法阶段属于预编译的一个过程*

如果还是感觉不太理解，请考虑下面代码： 

```
    function foo(a) {
        var b = a * 2;
        function bar(c) {
            console.log( a, b, c );
        }
        bar( b * 3 );
    }
    foo( 2 ); // 2, 4, 12
```

这块没学习明白 附上链接<https://blog.csdn.net/earth_smallma/article/details/80794788> 

## 8.5 作用域链

```
只有函数可以制造作用域结构，那么只要是代码，就至少有一个作用域，既全局作用域，凡是代码中有函数，那么这个函数就构成另一个作用域，如果函数中还有函数，那么在这个函数中就可以又诞生一个作用域

将这样的所有的作用域列出来，可以有一个结构，函数内指向函数外的链式结构。就称之为作用域
```

![1569752003498](C:\Users\傲慢与~1\AppData\Local\Temp\1569752003498.png)

作用域里面找一个变量。自动向上一个也就是父级里面找，这个过程 这个方式 相当于一个链子，所以称之为作用域链

```
                 var a = 3;
                 function f1(params) {
                     //var a = 6;
                     function f2(params) {
                         //var a = 5;
                         function f3(params) {
                             //var a = 4;
                             console.log(a);
                          //函数里面全局作用域
                          
                          //当函数中使用某个变量时，优先在自己的作用域中查找
                          //如果找不到，就会向上一层作用域查找
                          //如果找不到继续向上一层找，直到全局作用域
                          //如果找不到直接报错
                          //这就是  作用域链
                         }
                         f3();
                     }
                     f2();
                 }
                 f1();
                 //一个函数就是一个作用域，
```

# 第九章 对象(object)

## 9.1 什么是对象

**万物皆对象**

```
现实生活中：万物皆对象，对象是一个具体的事务，有个具体的事务就会有行为和特征。
举例： 一部车 ，一个手机
车是一类事务，门口停的车才是对象
	特征：蓝色 ，四个轮子
	行为：驾驶 刹车 
```

## 9.2 JavaScript中的对象

```
JavaScript中的对象其实就是生活中对象的一个抽象
javascript的对象是无序属性的集合
其属性可以包含基本值，对象，数组或函数
对象就是一组没有顺序的值
我们可以把javascript中的对象想象成键值对，其中值可以是数据和函数
对象的行为和特征
	特征---属性
	行为---方法
```

**事务的特征在对象中用属性来表示**

**事务的行为在对象中用方法来表示**

## 9.3 如何得到一个对象

```
                 //如何得到一个对象/获取对象的方法
                 //字面量声明对象
                 //第一种
                 var obj1 = {};
                 //对象中的数据都是键值对存在的
                 //如果值是函数 则称为方法，其他的值都是属性
                 var ojb2 = {age:12,sg:150,name:'刘飞',fei:function(params) {
                     
                 }};

                 //第二种方法  实例化方式 使用(内置构造函数)
                 var obj2 = new Object();

                 //第三种   自定义构造函数方式
                 function Fun(params) {
                     
                 }
                 //实例化自定义 构造函数方式声明对象
                 var f = new Fun()
                 //第一种常用
```

```
                 var obj2 = {
                     age:20,
                     sg:170,
                     name:'刘飞',
                     fei:function(params) {
                         console.log(3);
                         
                     }
                 }
                 //调用对象的属性或者方法   对象，属性名
                 //console.log(obj2.sg);打印结果170
                 obj2.fei();

```



## 9.4 this指向

```
                 //this的指向
                 var obj1 = {
                     name:'南山南',
                     age:20,
                     fun:function(params) {
                         //在方法中的this 就是这个方法所在的对象
                         var s = this.age;
                         console.log(s);
                         
                        }
                 }
                 obj1.fun();
                 //这是我们this第一种使用方式
```

```
                 function f(params) {
                     console.log(this);//
                     console.log(this.a);  
                 }
                 f();
                 //this.a打印结果是undefined  undefined意思是不明确的；未下定义的
                 //普通的函数中也是有this的
                 //this 指向全局对象 (window)

                
                 //this永远指向一个对象
                 //this在什么情况下？什么地方？   指向那个对象  迷惑点

                 //this的指向
                 k = "789";
                 function fun(params) {
                     var k = "000"
                     console.log(this.k);
                     
                 }
                 var o1 = {
                     k:"123",
                     f:fun,
                 }
                 var o2 = {
                     k:"456",
                     f:fun, 
                 }

                 //函数声明好了  fun这个值就是函数 
                 //f的值就是这个函数  此时f就是一个方法

                 o1.f();
                 o2.f();

                 //this运行在那个对象下，就指向那个对象
```

```
                 var o1 = {
                    age:20,
                   fun:function(params) {
                        console.log(this.age);
                        
                    }
                 }
                 var o2 = {
                     age:18,
                     fun:o1.fun
                 }
                 o2.fun();//打印结果是18
```



## 9.5对象的使用

```
                //对象的遍历及删除
                //for... in 循环
                //for(键 in 对象)
                //for...in 循环不仅可以循环变量，还可以，循环遍历数组
                 var o1 = {
                     name:"李飞",
                     age:20,
                     sex:"男"
                 }

                 for(var k in o1){
                     console.log(o1[k]);
                 }
                 


                  //补充： for  in 遍历数组
                  var arr = [1,2,3,4,5,6,7,8,9]
                  for(var k in arr){
                      console.log(arr[k]);  
                  }
```

```
        var o1 = {
            name: "李飞",
            age: 20,
            sex: "男"
        }
        console.log(o1);

        delete o1.age;

        console.log(o1);

         */
         //var str = '123';
         //console.log(str.length);

         //包装对象
         //三种原始类型   数值  字符串  布尔 
         //原始类型的数据 在一定条件下可以自动转换为对象，  这就是包装对象

         //var  v1 = new Number(123)
         //console.log(v1);
         
         //原始值  可以自动当作对象来调用  ，可以调用各种属性及方法
         //如果包装对象使用完成，会自动立即销毁

```

# 第十章 标准库对象(内置对象)

javascript提供了很多个内置对象：Math/Array/Number/String/	Boolean..

对象只是带有**属性**和**方法**的特殊数据类型。

我们在学习时其实就是要记住对象的每个属性和方法这么使用，代表什么含义：

技术问题，遇到分歧，去哪里查找资料：

火狐开发者社区--MDN

微软开发者社区--MSDN

## 10.1 Math对象

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript> 

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math> 

### 10.1.1使用

```
        //Math对象使用

        //Math.abs(x) 函数返回指定数字 “x“ 的绝对值。
        var n = 2;
        var n2 = Math.abs(n);
        console.log(n2);
        */

        // Math.random() 函数返回一个浮点,  伪随机数在范围[0，1)，
        //也就是说，从0（包括0）往上，但是不包括1（排除1），
        然后您可以缩放到所需的范围。
        //实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。

        //var r = Math.random();
        //console.log(r);

        //var n1 = Math.random() * 10;
        //var n2 = Math.floor(n1);
        //console.log(n2);

        //获取n-m 之间的随机数值
        //公式 Math.random() * (m-n) + n  随机数
```



### 10.1.2案例

```
        var n = Math.floor( Math.random() * (32-11) +11);
        console.log(n);//11---32
        
        //获取随机数，  math，roudom
        //获取最大的整数  math.floor

```

## 10.2Data对象(构造函数）

创建data实例用来处理日期和事件。Data对象于1970年1月1日( 世界标准事件）起的毫秒数。

### 10.2.1使用

```
创建一个新Date对象的唯一方法是通过new 操作符：

let now = new Date();
只能将 Date 作为构造函数调用，才能实例化（instantiate） Date 对象：若将它作为常规函数调用（即不加 new 操作符），则将会返回一个字符串，而非 Date 对象。另外，不像其他的 JavaScript 对象类型，Date 对象没有字面量语法（literal syntax）。
```

```
        //实例化构造函数获取时间对象
        var d1 = new Date();
        //console.log(d1);
        //var n = da.now()

        //var n = Date.now();
        //console.log(n);//
```



### 10.2.2案例

```
        var da = new Date();
        console.log(da.getHours());//获取小时  
        console.log(da.getDate());//获取月份
        console.log(da.getFullYear());//获取年份
        console.log(da.getMonth()+1);
        //js中获取的时间 是计算机本地时间
        //js月份的数组是从0开始的
```

## 10.3 Arrray对象

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array> 

### 10.3.1 数组对象的属性方法

**在这里列举常用的几个  具体在 火狐开发手册 可查看 最好背过！**

### 100.3.2 方法和属性

```
        var arr = [1,2,3,4,5,6];
        //console.log(arr.length);
        var k = 9;
        arr.push(k);
        console.log(arr);
        //末尾插入一个数 用 arr.push
```

```
        var arr = [1, 2, 3, 4, 5, 6];
        arr.pop();
        console.log(arr);
        //删掉末尾的一位数 
```

```
        var arr = [1, 2, 3, 4, 5, 6];
        console.log(arr.slice(1,3));//删除2和3
        console.log(arr);
```

```
        var arr = [1, 2, 3, 4, 5, 6];
         var kk = ['q','w','e'];
         var h = arr.concat(kk);
         console.log(arr);
         console.log(h);
        //concat()方法用于合并两个或多个数组。
        //此方法不会显示更改现有数组，而是返回一个新数组
```

```
        var arr = [1, 2, 3, 4, 5, 6];
        var s = arr.join("-");
        console.log(arr);
        console.log(s);
        //制定一个分隔符来分割数组的每个元素
```

## 10.4 String对象

这里只列举最常用的，火狐开发者手册里面查看更详细  

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String> 

```
        var s = 'fjdsfnsjdnfsmfns';
        console.log(s.length);
        var n = s.indexOf('d');
        console.log(n);
        
        var n = s.substr(2,5);
        console.log(n);//截取第2位起   一共5个

```

```
        var sc = "JavaScript";
        var i = sc.toLowerCase();
        console.log(i);
        //全部字符转换成小写      
        
        //全部字符转换成大写
        var sc = "JavaScript";
        var i = sc.toUpperCase();
        console.log(i);
```

```
        //trim()删除空字符  做登录页面可以用

        //替换

        var sc = "JavaScript";
        var i = sc.replace('a','1')//替换对象or替换值
        console.log(i);
        */
```

