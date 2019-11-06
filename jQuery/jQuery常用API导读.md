#  jQuery常用API导读

- 能够写出常用的jQuery选择器
- 能够操作jQuery样式
- 能够写出常用的jQuery动画
- 能够操作jQuery属性
- 能够操作jQuery元素
- 能够操作jQuery元素尺寸、位置

## 目录

- jQuery选择器
- jQuery样式操作
- jQuery效果
- jQuery属性操作
- jQuery文本属性值
- jQuery元素操作
- jQuery尺寸、位置操作

![1571661687942](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571661687942.png)

# 1.jQuery选择器

## 1.1jQuery基础选择器

原生js获取元素方式很多，很杂，而且兼容性情况不一致，因此jQuery给我们做了封装，使获取元素统一标椎。

```
$("选择器")  //里面选择器直接写css选择器即可，但是要加引号
```

![1571661945454](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571661945454.png)

```
    <script>
        $(function(){
           console.log($(".nav"));
           console.log($("div"));
           console.log($("p"));
        })
    </script>
```

## 1.2jQuery层级选择器

| 名称       | 用法        | 描述                                                         |
| ---------- | ----------- | ------------------------------------------------------------ |
| 子代选择器 | $("ul>li"); | 使用>号，获取亲儿子层级的元素；注意，并不会获取孙子层级的元素 |
| 后代选择器 | $("ul li"); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等   |

### jQuery设置样式

```
$("div").css('属性','值')
```

## 1.3隐式迭代(重要)

遍历内部DOM元素（伪数组形式存储）的过程叫做**隐式迭代**。

简单理解：给我们匹配的所有的元素进行循环遍历，执行相应的方法，而不用我们在进行循环，简化我们的操作，方便我们调用。

```
    <script>
        //1. 获取四个div元素
        console.log($("div"));
        
        //2. 给四个div设置背景颜色为粉色 jquery对象不能使用style
        $("div").css('background','pink');//四个div都是粉色
        
        //3.隐式迭代就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法
        $("ul li").css('color','red');
    </script>
```

## 1.4jQuery筛选选择器

![1571663868185](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571663868185.png)

```
    <script>
        $(function(){
            $("ul li:first").css('color','red');
            $("ul li:last").css('color','blue');
            $("ul li:eq(3)").css('color','yellow');
            $("ol li:odd").css('color',"skyblue")
            $("ol li:even").css('color',"pink")
        })
    </script>
```

## 1.5jQuery 筛选方法(重点)

![1571664876725](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571664876725.png)

**重点记住：parent()  、children()、find()、siblings()、eq()**

```
    <script>
        $(function () {
            //1. 父 parent() 返回的是最近一级的父级元素 亲爸爸
            console.log($(".son").parent());

            //2. 子
            //(1)亲儿子 children() 子代选择器
            $(".nav").children('p').css("color","red");
            //(2)可以选择里面所有的孩子 包括儿子 和孙子 find() 类似于后代选择器
            $(",nav").find("p").css("color","red");
            //3. 兄
            $("ol .item").siblings("li").css("color","red");
        });
    </script>
```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="jquery.min.js"></script>
</head>
<body>
    <ol>
        <li>我是ol 的li</li>
        <li>我是ol 的li</li>
        <li class="item">我是ol 的li</li>
        <li>我是ol 的li</li>
        <li>我是ol 的li</li>
        <li>我是ol 的li</li>
    </ol>
    <ul>
        <li>我是ul 的li</li>
        <li>我是ul 的li</li>
        <li>我是ul 的li</li>
        <li>我是ul 的li</li>
        <li>我是ul 的li</li>
        <li>我是ul 的li</li>
    </ul>
    <div class="current">我有current</div>
    <div>俺没有current</div>
    <script>
        //注意一下都是方法 带括号
        //1. 兄弟元素  除了自身元素之外的所有亲兄弟
        $("ol .item").siblings("li").css("color","red");
        //2. 第n个元素
        //(1)我们可以利用选择器的方式选择
        $("ul li:eq(2)").css("color","red");
        //(2)我们可以利用选择方法的方式选择   更推荐这种方法 好写变量
        $("ul li").eq(3).css("color","pink");
        //3.判断是否有某个类名
        console.log($("div:first").hasClass("current"));
        console.log($("div:last").hasClass("current"));
        
    </script>
</body>
</html>
```



## 1.6新浪下拉菜单

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style-type: none;
        }

        a {
            text-decoration: none;
            font-size: 14px;
        }

        .nav {
            margin: 100px;
        }

        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }

        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }

        .nav>li>a:hover {
            background-color: #eee;
        }

        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }

        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }

        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
    <script src="jquery.min.js"></script>
</head>

<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
    <script>
        $(function () {
            // 鼠标经过
            $(".nav>li").mouseover(function () {
                // $(this) jQuery 当前元素  this不要加引号
                // show() 显示元素  hide() 隐藏元素
                $(this).children("ul").show();
            });
            // 鼠标离开
            $(".nav>li").mouseout(function () {
                $(this).children("ul").hide();
            })
        })
    </script>
</body>

</html>
```

## 1.7 jQuery里面的排他思想

1. 想要多选---效果。排他思想：当前元素设置样式，其余兄弟元素清除样式。

```
<body>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <script>
        $(function(){
            //1. 隐式迭代 给所有按钮都绑定了点击事件
          $("button").click(function(){
            //2. 当前的元素变换背景颜色
            $(this).css("background","pink");
            //3. 其余的兄弟去掉背景颜色  隐式迭代
            $(this).siblings("button").css("background","");
          });
        });
    </script>
```

## 1.8 淘宝服饰精品案例分析

1. 核心原理：鼠标经过左侧盒子某个小li，就让内容区盒子相应图片显示，其余的图片隐藏起来。
2. 需要得到当前小li的索引号，就可以显示对应索引号的图片
3. jQuery得到当前元素索引号$(this)index()
4. 中间对应的图片，可以通过eq(index)方法去选择
5. 显示元素show()  隐藏元素hide()

```
    <script src="jquery.min.js"></script>
    <script>
        $(function(){
            //1. 鼠标经过左侧小li
            $("#left li").mouseover(function(){
                //2. 得到当前小li 的索引号
                var index = $(this).index();
                console.log(index);
                //3. 让我们右侧的盒子相应索引号的图片显示出来就好了
                $("#content div").eq(index).show();
                //4. 让其余图片(就是其他的兄弟)隐藏起来
                $("#content div").eq(index).siblings().hide();
            })
                })
    </script>
```

ps:个人感觉css和jQuery前者更难搞！

## 1.9链式编程

链式编程是为了节省代码量，看起来更优雅。

```
$(this).css("color","red").sibling().css('color',"");
```

```
<script>
        $(function () {
            //1. 隐式迭代 给所有的按钮都绑定了点击事件
            $("button").click(function () {
                //2. 让当前元素颜色变为红色
                //$(this).css("color","red");
                //3. 让其他的姐妹元素不变色
                //$(this).siblings().css("color","");

                //采用链式编程 一句话搞定
                //我的颜色为红色  我的兄弟的颜色为空
                //$(this).css("color", "red").siblings().css("color", "");
                
                //我的兄弟变为红色 ，我本身不变颜色
                //$(this).siblings().css('color', "red");

                //最后是给我的兄弟的爸爸 body 变换颜色 也是自己的爸爸哈哈
                $(this).siblings().parent().css("color","blue");
            })
        })
    </script>
```

```
        //3. 让我们右侧的盒子相应索引号的图片显示出来就好了

​        //$("#content div").eq(index).show();

​        //4. 让其余图片(就是其他的兄弟)隐藏起来

​        //$("#content div").eq(index).siblings().hide();

​        //也可以采用链式编程

​        $("#content div").eq(index).show().siblings().hide();
```



# 2.jQuery样式操作

## 2.1 操作css方法

jQuery可以使用css方法来修改简单的元素样式；也可以操作类。

1.参数只写属性名，则是返回属性值

```
$(this).css("color");
```

2.参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号

```
$(this).css("color","red");

例如：
	$("div").css("width","300px");
```

3.参数可以是对象形式。方便设置多组样式，属性名和属性值用冒号隔开，属性可以不用加引号，

```
$(this).css({"color":"white",
	"font-size":"20px"
}); 


例如：
	     $("div").css({
         width:400,
         height:400,
         backgroundColor: "red"
         //如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
                
```

## 2.2 设置类样式方法

作用等同于以前的classList，可以操作类样式，注意操作类里面的参数不要加点。

1.添加类

```
$("div").addClass("current");
```

2.移除类

```
$("div").removeClass("current");
```

3.切换类

```
$("div").toggleClass("current");
```

```
    <style>
        div{
            width: 150px;
            height: 150px;
            margin: 100px auto;
            background-color: pink;
            transition: all 0.5s;
        }
        .new{
            background-color: red;
            transform: rotate(360deg);
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        $(function(){
            //1. 添加类addClass()
            /*$("div").click(function(){
                $(this).addClass("new");
            });
            //2. 删除类 removeClass
            $("div").click(function(){
                $(this).removeClass("new");
            });*/

            //3. 切换类 toggleClass
            $("div").click(function(){
                $(this).toggleClass("new");
            });
        })
    </script>
```

## 2.3案例：tab栏的切换分析

1. 点击上部的li，当前li添加current类，其余兄弟移除类
2. 点击的同时，得到当前li的索引号

```
<script>
		 $(function () {
  //1. 点击上部的li，当前li  添加current类，其余兄弟移除类
            $(".tab_list li").click(function () {
                //链式编程操作               $(this).addClass("current").siblings().removeClass
                ("current");
                
     //2. 点击的同时，得到当前li 的索引号
        var index = $(this).index();
         console.log(index);
         
     //3. 让下部里面相应索引号的item显示，其余的item隐藏
$(".tab_con .item").eq(index).show().siblings().hide();
            });
        })
 </script>
```

## 2.4 类操作与className区别

原生js中className会覆盖元素原先里面的类名。

jQuery里面类操作只是对指定类进行操作，不影响原先的类名。

```
    <script>
        //var one = document.querySelector(".one")
        //one.className = "two";

        //$(".one").addClass("two");// 这个addClass 相当于追加类名 不影响以前的类名
        $(".one").removeClass("two");
    </script>
```

# 3.jQuery动画效果

jQuery给我们封装了很多动画效果，最常见的如下：

![1571754175942](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571754175942.png)

## 3.1 显示隐藏效果

**1.显示语法规范**

```
show([speed,[easing],[fn]])
```

**2.显示参数**

1. 参数都可以省略，无动画直接显示。
2. speed：三种预定速度之一的字符串("slow","normal",or "fast")或表示动画时长的毫秒数值(如：1000)。
3. easing：(Optional)用来指定切换效果，默认是"swing",可用参数"linear"。
4. fn：回调函数，在动画完成时执行的函数，每个元素执行一次。

------

**1.隐藏语法规范**

```
hide([spand,[easing],[fn]])
```

**2.隐藏参数**

1. 参数都可以省略，无动画直接显示
2. speed：三种预定速度之一的字符串("slow","normal",or"fast)或表示动画时长的毫秒数值(如：1000)。
3. easing: (Optional)用来指定切换效果，默认是"swing"，可用参数"linear"。
4. fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

------

**1.切换语法规范**

```
toggle([speed],[easing],[fn])
```

**2.切换参数**

1. 参数都可以省略，无动画直接显示
2. speed：三种预定速度之一的字符串("slow","normal",or"fast)或表示动画时长的毫秒数值(如：1000)。
3. easing: (Optional)用来指定切换效果，默认是"swing"，可用参数"linear"。
4. fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

```
    <script>
        $(function(){
            $("button").eq(0).click(function(){
                //$("div").hide("fast");
                $("div").show(1000,function(){
 
                });//1秒
            })

            $("button").eq(1).click(function(){
                $("div").hide(1000,function(){

                });
            })

            $("button").eq(2).click(function(){
                $("div").toggle(1000,function(){
                })
            })
            //一般情况下，我们都不加参数直接显示隐藏就可以了
        });
    </script>
```

## 3.2滑动效果

**1.下滑效果语法规范**

```
slideDown([speed,[easing],[fn]])
```

**2.下滑效果参数**

  1.参数都可以省略

  2.speed：三种预定速度之一的字符串("slow","normal",or"fast)或表示动画时长的毫秒数值(如：1000)。

  3.easing: (Optional)用来指定切换效果，默认是"swing"，可用参数"linear"。

------

**1.上滑效果语法规范**

```
slideUp([speed,[easing],[fn]])
```

  **2.上滑效果参数**

1.参数都可以省略

  2.speed：三种预定速度之一的字符串("slow","normal",or"fast)或表示动画时长的毫秒数值(如：1000)。

  3.easing: (Optional)用来指定切换效果，默认是"swing"，可用参数"linear"。

------

**1.滑动切换效果语法规范**

```
slideTaggle([speed,[easing],[fn]])
```

**2.滑动切换效果参数**

1. 参数都可以省略
2. speed：三种预定速度之一的字符串("slow","normal",or"fast)或表示动画时长的毫秒数值(如：1000)。
3. easing: (Optional)用来指定切换效果，默认是"swing"，可用参数"linear"。
4. fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。



```
    <button>下拉滑动</button>
    <button>上拉滑动</button>
    <button>切换滑动</button>
    <div></div>
   <script>
        $(function(){
            $("button").eq(0).click(function(){
                //下拉滑动 slideDown()
                $("div").slideDown();
            }) 

            $("button").eq(1).click(function(){
                //上滑动 slideUp
                $("div").slideUp(500);
            })

            $("button").eq(2).click(function(){
                //滑动切换 slideToggle()
                $("div").slideToggle(500);
                })
        });
    </script>
```



## **3.3事件切换**

```
hover([over,]out)
```

(1) over：鼠标移到元素上要触发的函数(相当于mouseenter)

(2)out: 鼠标移出元素要触发的函数(相当于mouseleave)

**以新浪下拉菜单为例子**：

```js
    <script>
        $(function () {
            /*
            // 鼠标经过
            $(".nav>li").mouseover(function () {
                // $(this) jQuery 当前元素  this不要加引号
                // show() 显示元素  hide() 隐藏元素
                $(this).children("ul").slideDown(200);
            });
            // 鼠标离开
            $(".nav>li").mouseout(function () {
                $(this).children("ul").slideUp(200);
            })
            */

            /*
            //1.事件切换  hover 就是鼠标经过和离开的复合写法
            $(".nav>li").hover(function(){
                $(this).children("ul").slideDown(200);
            }, function(){
                $(this).children("ul").slideUp(200);
            });
            */


            //2. 事件切换hover  如果只写一个函数，那么鼠标经过和                  鼠标经过都会触发这个函数
            $(".nav>li").hover(function(){
                $(this).children("ul").slideToggle();
            })
        })
    </script>
```

## 3.4动画队列及其停止排队方法

**1.动画或效果队列**

动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行。

**2.停止排队**

```js
stop()
```

(1) stop()方法用于停止动画或效果

(2)注意： stop()写到动画或者效果的前面，相当于停止结束上一次的动画

```js
      举例：新浪下拉菜单
      
      //3. 动画停止排队
      //动画或者效果一旦触发就会执行，如果多次触发，
      //就造成多个动画或者效果排队执行。
      $(".nav>li").hover(function () {
         // stop必须写到 动画的前面
                
    $(this).children("ul").stop().slideToggle();
            });
```

## 3.5淡入淡出效果

**1.淡入效果语法规则**

```
fadeIn([speed,[easing],[fn]])
```

**2.淡入效果参数**

(1) 参数都可以省略

(2) speed：三种预定速度之一的字符串("slow","normal",or"fast)或表示动画时长的毫秒数值(如：1000)。

(3) easing: (Optional)用来指定切换效果，默认是"swing"，可用参数"linear"。

(4) fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

------

**1.淡出效果语法规则**

```
fadeOut([speed],[easing],[fn])
```

**2.淡出效果参数**

(1) 参数都可以省略

(2) speed：三种预定速度之一的字符串("slow","normal",or"fast)或表示动画时长的毫秒数值(如：1000)。

(3) easing: (Optional)用来指定切换效果，默认是"swing"，可用参数"linear"。

(4) fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

------

**1.淡入淡出切换效果语法规范**

```
fadeToggle([speed,[easing],[fn]])
```

**2.淡入淡出切换效果参数**

(1) 参数都可以省略

(2) speed：三种预定速度之一的字符串("slow","normal",or"fast)或表示动画时长的毫秒数值(如：1000)。

(3) easing: (Optional)用来指定切换效果，默认是"swing"，可用参数"linear"。

(4) fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

------

**1.渐进方式调整到指定的不透明度**

```
fadeTo([[speed],opacity,[easing],[fn]])
```

**2.效果参数**

(1).**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

(2).**opacity**:**一个0至1之间表示透明度的数字。**

(3).**easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

(4).**fn**:在动画完成时执行的函数，每个元素执行一次。

```js
<body>
    <button>淡入效果</button>
    <button>淡出效果</button>
    <button>淡入淡出切换</button>
    <button>修改透明度</button>
    <div></div>
    <script>
        $(function(){
            $("button").eq(0).click(function(){
                //淡入 fadeIn
                $("div").fadeIn(1000);
            }) 

            $("button").eq(1).click(function(){
                //淡出 fadeOut
                $("div").fadeOut(500);
            })

            $("button").eq(2).click(function(){
                //淡入淡出切换 fadeToggle
                $("div").fadeToggle(500);
                })

            $("button").eq(3).click(function(){
                //修改透明度 fadeTo()  这个速度和透明度必须写
                $("div").fadeTo(1000,0.5);
            })
        });
    </script>
</body>
```

## 3.6 突出显示案例

![1571796581454](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571796581454.png)

```js
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        body {
            background: #000;
        }

        .wrap {
            margin: 100px auto 0;
            width: 630px;
            height: 394px;
            padding: 10px 0 0 10px;
            background: #000;
            overflow: hidden;
            border: 1px solid #fff;
        }

        .wrap li {
            float: left;
            margin: 0 10px 10px 0;
        }

        .wrap img {
            display: block;
            border: 0;
        }
    </style>
    <script src="jquery.min.js"></script>
    <script>
        $(function () {
            //鼠标进入的时候 ，其他的li标签透明度：0.5
            $(".wrap li").hover(function () {
                $(this).siblings().stop().fadeTo(400, 0.5);
            }, function () {
                //鼠标离开 ，其他li 透明度改为1
                $(this).siblings().stop().fadeTo(400,1);
            })

        });
    </script>
</head>
```

## 3.7 自定义动画 animate

**1.语法**

```
animate(params,[speed],[easing],[fn])
```

**2.参数**

**params:想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采取驼峰命名法borderLeft**。其余参数都可以省略

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)                 

**easing**:要使用的擦除效果的名称(需要插件支持).默认jQuery提供"linear" 和 "swing".

**fn**:在动画完成时执行的函数，每个元素执行一次。

```js
    <style>
        div{
            position: absolute;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <button>动起来</button>
    <div></div>
    <script>
        $(function(){
            $("button").click(function(){
                $("div").animate({
                    left: 500,
                    top: 300,
                    opacity: 0.4,
                    width:500,
                },1000);
            })
        })
    </script>
```

## 3.8案例：王者荣耀手风琴(卡片折叠)效果分析

1. 鼠标经过某个小li 有两步操作：
2. 当前小li宽度变为224px，同时里面的小图片淡出，大图片切入
3. 其余兄弟小li宽度变为69px，小图片淡入，大图片淡出

![1571798130983](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571798130983.png)

因为代码超多 所以放上jQuery代码  后期把代码上传到码云 可以在线下载和浏览吧 类似于github

```js
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript">
        $(function() {
            //鼠标经过某个小li 有两步操作：
            $(".king li").mouseenter(function(){
                //1. 当前小li 宽度变为224px，同时里面的小图片淡出，大图片淡入
                $(this).stop().animate({
                    width: 224               }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
                //2.其余兄弟小li 宽度变为69px， 小图片淡入 ，大图片淡出
                $(this).siblings("li").stop().animate({
                    width:69,               }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
            })
        });
    </script>
```

# 4. jQuery属性操作

------

## 4.1 设置或获取元素固有属性值prop()

所谓元素固有属性就是元素本身自带的属性，比如<a>元素里面的href，比如<input>元素里面的type。

**1.获取属性语法**

```javascript
prop("属性")
```

2.设置属性属性语法

```js
prop("属性","属性值")
```

## 4.2设置或获取与元素自定义属性值attr()

**1.获取属性语法**

```js
attr("属性")    //类似原生 getAttribute()
```

**2.设置属性语法**

```js
attr("属性","属性值") //类似原生setAttribute()
```

改方法也可以获取H5自定义属性

## 4.3 数据缓存data()

data()方法可以在指定的元素上存储数据，并不会修改DOM元素结构。一旦页面刷新，之前存放的数据都将被移除。

**1.附加数据语法**

```js
data("name","value") //向被选元素附加数据
```

**2.获取数据语法**

```js
data("name") //向被选元素获取数据
```

同时，还可以读取HTML5自定义属性data-index，得到的是数字型

```js
<body>
    <a href="http://www.itcast.cn" title="都挺好">都挺好</a>
    <input type="checkbox" name="" id="" checked>
    <div index = "1" data-index = "2">我是div</div>
    <span>123</span>
    <script>
        $(function(){
           //1. element.prop("属性名") 获取元素固有的属性值
           console.log($("a").prop("href"));
           $("a").prop("title","我们都挺好");
           $("input").change(function(){
              console.log($(this).prop("checked"));
            
              
           })
           //console.log($("div").prop("index"));
           //2. 元素的自定义属性 我们通过attr()获取
           console.log($("div").attr("index"));
           $("div").attr("index",4)
           console.log($("div").attr("data-index"));


           //3. 数据缓存data() 这个里面的数据是存在元素的内存里面
           $("span").data("uname","andy");
            console.log($("span").data("uname"));
           //这个方法获取data-index h5自定义属性 第一个 不用写data-  而且返回的是数字型

            console.log($("div").data("index"));//数字2
        })
    </script>
</body>
```

**4.4 案例：购物车案例模块-全选**

1.全选思想：里面3个小的复选框(j-checkbox)选中状态(checked)跟着全选按钮(checkall)走。

2.因为checked是复选框的固有属性，此时我们需要利用prop()方法获取和设置该属性。

3.把全选按钮状态赋值给3个小复选框就可以了。

4.当我们每次点击小的复选框按钮，就来判断：

5.如果复选框被选中的个数等于3就应该把全选按钮选上，否则全选按钮不选。

6.**：checked选择器     ：checked查找被选中的表单元素。**

```js
$(function () {
    //1. 全选 全部选功能模块
    //就是把全选按钮(checkall) 的状态赋值给 三个小按钮 (j-checkbox)就可以了
    //事件可以使用change
    $(".checkall").change(function () {
        //console.log($(this).prop("checked"));
        //$(".j-checkbox").prop("checked",true);//点全选 是哪个按钮全部选上去了
        //全选和全部选  
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
    })
    //解决： 选了三个按钮 全选按钮没有勾选
    //2. 如 果复选框被选中的个数等于3就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function () {
        // if(被选中的小的复选框的个数 === 3){
        //     就要选中全选按钮
        // }else{
        //     不要选中全选按钮
        // }
        //console.log($(".j-checkbox:checked").length);
        //if ($(".j-checkbox:checked").length === 3) {
        if($(".j-checkbox:checked").length === $(".j-checkbox").length){

            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
    })

});
```

# 5.jquery内容文本值

主要针对元素的**内容**还有**表单的值**操作

**1.普通元素内容html() (相当于原生innerHTML)**

```js
html() //获取元素的内容
```

```js
html("内容") //设置元素的内容
```

2.普通元素文本内容text()  (想当于原生innerText)

```js
text()//获取元素的内容
```

```
text("内容") //设置元素的内容
```

3.表单元素

```js
val()//获取元素的内容
```

```js
text("内容") //设置元素的内容val()//
```

```js
<body>
    <div><span>我是内容</span></div>
    <input type="text" value="请输入内容">
    <script>
        //1. 获取设置元素内容html()
        console.log($("div").html());
        //$("div").html("123");

        //2. 获取设置元素文本内容 text()
        console.log($("div").text());
        $("div").text("456");

        //3. 获取设置表单值 val()
        console.log($("input").val());
        $("input").val("798");
    </script>
</body>
```

## 5.2案例：购物车案例模块 -增减商品数量

分析：

1. 核心思路：首先声明一个变量，当我们点击+号(increment) ,就让这个值++，然后赋值给文本框。
2. 注意1：只能增加本商品数量，就是当前+号的兄弟文本框(itxt)的值
3. 修改表单的值是val()方法
4. 注意2：这个变量的初始值应该是这个文本框的值，在这个值得基础上++。要获取表单的值

```js
    //3. 增减商品数量模块 首先声明一个变量，当我们点击+号(increment)，就让这个值++，然后赋值给文本框
    $(".increment").click(function(){
        //得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        //console.log(n);
        n++;
        $(this).siblings(".itxt").val(n)
    });

    $(".decrement").click(function(){
        //得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        if(n ==1 ){
           return false; 
        }
        //console.log(n);
        n--;
        $(this).siblings(".itxt").val(n)
    });
```

## 5.3 案例：购物车案例模块-修改商品小计(重要参考)

1. 核心思路：每次点击+号或者-号，根据文本框的值 乘以当前商品的价格 就是商品的小计
2. 注意1：只能增加本商品的小计，就是当前商品的小计模块(p-sum)
3. 修改普通元素的内容是text()方法
4. 注意2：当前商品的价格，要把￥符号去掉再乘截取字符串substr(1)
5. parents("选择器")可以返回指定祖先元素
6. 最后计算的结果如果想要保留2位小数 通过toFixed(2)方法
7. 用户也可以直接修改表单里面的值，同样要计算小计。用表单change事件
8. 用最新的表单内的值 乘以单价即可 但是还是当前商品小计

**加小计 功能：**

```js
//3. 购物车案例模块-修改商品小计
        //计算小计模块 根据文本框的值 乘以 当前商品的价格 就是 商品的小计
        //当前商品价格 p
        var p = $(this).parent().parent().siblings(".p-price").html();
        //console.log(p);
        p = p.substr(1);//去掉￥符号
        console.log(p);
        //小计模块
        $(this).parent().parent().siblings(".p-sum").html("￥" + p * n)
```

**减小计功能：**

```js
//小计 减功能
        //爸爸的爸爸的兄弟 结构一定要看清楚
        var p = $(this).parent().parent().siblings(".p-price").html();
        //console.log(p);
        p = p.substr(1);//去掉￥符号  截取字符串
        console.log(p);
        //小计模块
        $(this).parent().parent().siblings(".p-sum").html("￥" + p * n)
```

**保留2位小数**

```js
        var price = (p * n).toFixed(2);//声明变量
        //小计模块
        //$(this).parents(".p-num").siblings(".p-sum").html("￥" + p * n);
        //就可以写成
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
```

```js
//熟练后不用声明变量 直接可以写
//$(this).parents(".p-num").siblings(".p-sum").html("￥" + p * n);

     //熟练后保留2位小数：

$(this).parents(".p-num").siblings(".p-sum").html("￥" +( p * n).toFixed(2);
```

![1571833303141](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571833303141.png)

```js
        //toFixed(2) 可以让我们保留2位小数  后面3就是3位小数喽
        var price = (p * n).toFixed(2);
```

![1571833555303](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571833555303.png)

 //4. 用户修改文本框的值 计算 小计模块  (修复直接输入数量 小计不求和bug)

```js
    //4. 用户修改文本框的值 计算 小计模块
	//change 单选框与复选框改变后触发的事件。
    $(".itxt").change(function () {
        //先得到文本框的里面的值 乘以 当前商品的单价
        var n = $(this).val();//拿到文本框修改过的值
        //当前商品的单价 修改了那个 就把那个拿过来
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));

    })
```



## 5.4 返回指定祖先元素parents();

```js
<body>
    <div class="one">
        <div class="two">
            <div class="there">
                <div class="four">俺不容易</div>
            </div>
        </div>
    </div>
    <script>
        console.log($(".four").parent().parent().parent());
        console.log($(".four").parents());
        //比如我只想找到叫one的父亲
        console.log($(".four").parents(".one"));
        
    </script>
</body>
```

```js
 原代码：
 //$(this).parent().parent().siblings(".p-sum").html("￥" + p * n);

修改后：
  $(this).parents(".p-num").siblings(".p-sum").html("￥" + p * n);
```

![1571833342711](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571833342711.png)

# 6.jquery元素操作

主要是**遍历**、创建、添加、删除元素操作。

## 6.1遍历元素

jquery隐式迭代是对同一类元素做了同样的操作。如果想要给同一类元素做**不同操作**，就需要用到遍历。

### 语法1：

```js
$("div").each(function(index,domEle){xxx;})
```

1. each()方法遍历匹配的每一个元素。主要用DOM处理。each每一个
2. 里面的回调函数有2个参数：index 是每个元素的索引号；demEle是每个**DOM元素对象，不是jquery对象**
3. 所以要想使用jquery方法，需要给这个dom元素转换为jquery对象$(domEle)

```js
    <script>
        $(function () {
            //$("div").css("color","red");
            //如果针对于同一类元素做不同操作，需要用到遍历元素(类似for 但是比for强大)
            var sum = 0;
            //1. each() 方法遍历元素
            //指定一个数组
            var arr = ["red","green","blue"];
            // $("div").each(function(index,domEle){
            $("div").each(function (i, domEle) {
         //回调函数 第一个参数一定是索引号 可以自己指定索引号名称
                //我们这里把index换成 i
                //console.log(index);
                console.log(i);
                //回调函数 第二个参数一定是DOM元素对象
                console.log(domEle);//获取了每一个元素 是dom对象
                //domEle.css("color"); dom对象没有css方法
                //$(domEle).css("color", "pink");
                $(domEle).css("color", arr[i]);
                //sum+= $(domEle).text();
                sum += parseInt($(domEle).text());
                //把拿过来的值 转换成数值型
            })
            console.log(sum);
        //字符形式  连在一起了所有转换成 数值型
            
        })
    </script>
```

### 语法2：

```js
$.each(object,function(index,element){xxx;})
```

1. $.each()方法可用于遍历任何对象。主要用于数据处理，比如数组，对象
2. 里面的函数有2个参数：index是每个元素的索引号；element遍历内容

```js
body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        $(function () {
            //$("div").css("color","red");
            //如果针对于同一类元素做不同操作，需要用到遍历元素(类似for 但是比for强大)
            var sum = 0;
            //1. each() 方法遍历元素
            //指定一个数组
            var arr = ["red","green","blue"];
            // $("div").each(function(index,domEle){
            $("div").each(function (i, domEle) {
                //回调函数 第一个参数一定是索引号 可以自己指定索引号名称
                //我们这里把index换成 i
                //console.log(index);
                //console.log(i);
                //回调函数 第二个参数一定是DOM元素对象
                console.log(domEle);//获取了每一个元素 是dom对象
                //domEle.css("color"); dom对象没有css方法
                //$(domEle).css("color", "pink");
                $(domEle).css("color", arr[i]);
                //sum+= $(domEle).text();
                sum += parseInt($(domEle).text());//把拿过来的值 转换成数值型
            })
            console.log(sum);//字符形式  连在一起了所有转换成 数值型


            //2. $.each() 方法遍历元素 主要用于遍历数据 ， 处理数据
            //$.each() 主要处理数据的 
            //$.each($("div"),function(i,ele){
                // console.log(i);
                // console.log(ele);
                
                
            //});
            // $.each(arr,function(i,ele){
            //     console.log(i);
            //     console.log(ele);
                
                
            // })
            $.each({
                name:"andy",
                age:18
            },function(i,ele){
                console.log(i);//输出name  age 属性名
                console.log(ele); //输出 andy  18 属性值
                
                //$.each  能遍历数组也能遍历对象 
                //如果是数据 (对象啊 数组啊 就$.each)
                //遍历dom(各种各样标签)  就用each 比较合适  
            })
        })
    </script>
</body>
```

**ps：**

语法1是each  ：遍历dom(各种各样标签)  就用each 比较合适 

语法2是$.each：数据 (对象啊 数组啊 就$.each) ；$.each  能遍历数组也能遍历对象；主要处理数据！

## 6.2  案例：购物车案例模块-计算总计和总额

1. 核心思路：把所有文本框里面的的值相加就是总计数量。总额同理
2. 文本框里面的值不相同，如果想要相加需要用到each遍历。声明一个变量，相加即可。
3. 点击+号 -号 ，会改变总计和总额，如果用户修改了文本框里面的值同样会改变总计和总额
4. 因此可以封装一个函数求总计和总额的，以上2个操作调用这个函数即可。
5. 注意1：总计是文本框里面的值相加用val()  总额是普通元素的内容用text()
6. 要注意普通元素里面的内容要去掉￥并且转换为数字型才能相加

![1571842916873](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571842916873.png)

```js
    //5. 计算总计和总额模块
    getSum();// 第一次打开页面 默认加购一件 打开页面默认选购三件
    //打开页面没有选择的话 默认选中三件

    function getSum(){
        var count = 0; //计算总件数
        var money = 0; //计算总价钱
        $(".itxt").each(function(i,ele){
            count += parseInt($(ele).val());//转换成数值
        });
        $(".amount-sum em").text(count);

        //总计 思路 获取所有小计+起来  还有转换传给你数值型
        $(".p-sum").each(function(i,ele){
            money += parseFloat($(ele).text().substr(1));
            //先把值取过来 去掉人民币符号  在转换成小数
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
```

## 6.3 创建元素

语法：

```
$("<li></li>");
```

动态的创建了一个<li>

### 6.3.1 添加元素

**1.内部添加**

```js
element.append("内容")
```

把内容放入匹配元素**内部**最**后面**，类似原生appendChild。

------



```js
element.prepend("内容")
```

把内容放入匹配元素**内部**的最**前面**。

------

**2.外部添加**

```js
element.after("内容")  //把内容放入目标元素后面
```

```js
element.before("内容") //把内容放入目标元素前面
```

1. **内部添加元素，生成之后，他们是父子关系**
2. **外部添加元素，生成之后，他们是兄贵关系**

**3.删除元素**

```js
element.remove()  //删除匹配的元素(本身)
```

```js
element.empty() //删除匹配的元素集合中所有的子节点
```

```js
element.html("") //清空匹配的元素内容
```

```js
<body>
    <ul>
        <li>原先的li</li>
    </ul>
    <div class="test">我是原先的div</div>
    <script>
        $(function(){
            // //1. 创建元素
            // var li = $("<li>我是后来创建的li</li>")
            // //1.创建元素

            // //(1).内部元素
            // // $("ul").append(li); 
        //内部添加并且放到内容的最后面
            // $("ul").prepend(li); 
        //内部添加并且放到内容的最前面
            
            
            //(2).外部元素
            var div = $("<div>我是后妈生的</div>")
            // $(".test").after(div);
            $(".test").before(div);

            //3. 删除元素
            //$("ul").remove();
        //可以删除匹配的元素 就是自杀
            // $("ul").empty(); 
        //可以删除匹配的元素里面的子节点 孩子
            $("ul").html(""); 
        //可以删除匹配的元素里面的子节点 孩子
        //下面两个的作用是一样的都是把里面的子节点清空
        })
    </script>
</body>
```

## 6.4购物车模块-清理购物车

![1571879236442](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571879236442.png)

1. 核心思路：把商品remove()删除元素即可
2. 有三个地方需要删除：1.商品后面的删除按钮 2. 删除选中的商品 3.清理购物车
3. 商品后面的删除按钮：一定是删除当前的商品，所以从$(this)出发
4. 删除选中的商品：先判断小的复选框按钮是否选中状态，如果是选中，则删除对应的商品

```js
    //6. 删除商品模块
    //(1) 商品后面的删除按钮
    $(".p-action a").click(function(){
        //删除选中的商品
        $(this).parents(".cart-item").remove();
        getSum();
    })
    //(2) 删除选中的商品
    $(".remove-batch").click(function(){
        //删除的是小的复选框中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();//利用隐式迭代 
        getSum();
    })
    //(3) 清空购物车 删除全部商品
    $(".clear-all").click(function(){
        $(".cart-item").remove();
        getSum();
```

6.5案例：购物车案例模块-选中商品添加背景

1. 核心思路：选中的商品添加背景，不选中移除背景即可
2. 全选按钮点击：如果全选是选中的，则所有的商品添加背景，否则移除背景
3. 小的复选框点击：如果是选中状态，则当前的商品添加背景，否则移除背景
4. 这个背景，可以通过修改类名，添加类和删除类。

```js
        if($(this).prop("checked")){
            //让所有的商品添加check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        }else{
            //check-cart-item  移除
            $(".cart-item").removeClass("check-cart-item");
        }
```

```js
        if($(this).prop("checked")){
            //让当前的商品添加check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else{
            //check-cart-item  移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
```

![1571887240991](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571887240991.png)

![1571887278632](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571887278632.png)

# 7.jquery尺寸、位置操作

## 7.1尺寸方法

| 语法                                  | 用法                                                |
| ------------------------------------- | --------------------------------------------------- |
| width()/ hright()                     | 取得匹配元素宽度和高度值 只算width/ height          |
| innerWidth() / innerHeight()          | 取得匹配元素宽度和高度值包含padding                 |
| outerwidth() / outHeight()            | 取得匹配元素宽度和高度值包含 padding 、boder        |
| outerWidth(true) /  outerHeight(true) | 取得匹配元素宽度和高度值包含 padding、borde、margin |

- 以上参数为空，则是获取相应值，返回的是数字型
- 如果参数为数字，则是修改相应值
- 参数可以不必写单位。

```js
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            padding: 10px;
            border: 15px solid red;
            margin: 20px;
        }
    </style>
</head>

<body>
    <div></div>
    <script>
        $(function () {
            //1. width() / height() 获取设置元素 width 和 height大小
            console.log($("div").width());//200 宽度大小
            //$("div").width(300);把款修改为300px
            //2. innerWidth() / innerHeight() 获取设置元素 width 和height + padding 大小
            console.log($("div").innerWidth());//220px width再加上左右的padding值

            //3. outerWidth() / outerHeight() 获取设置元素 width 和 height + padding + border 大小
            console.log($("div").outerWidth());//250   10*2+15*2+200
            //4. outerWidth(true) / outerHeight(true) 获取设置 width 和 height + padding + border + margin
            console.log($("div").outerWidth(true)); //250+margin: 20px; * 2 = 290
        })
    </script>
</body>

```

## 7.2 jquery 位置

位置主要有三个：**offset()**、position()、**scrollTop() / scrollLeft()**

### **1.offset()设置或获取元素偏移**

1. offset()方法设置或返回被选元素相对于**文档**的偏移坐标，跟父级没有关系。
2. 该方法有2个属性left，top，offset().top 用于获取距离文档顶部的距离，offset().left用于获取距离文档左侧的距离
3. 可以设置元素的偏移：offset({ top:10, left:30});

### 2.position()获取元素偏移

1. position()方法用于返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准。

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="jquery.min.js"></script>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .father{
            width:400px;
            height:400px;
            background-color: pink;
            margin: 100px;
            overflow: hidden;
            position: relative;
        }
        .son{
            width: 150px;
            height:150px;
            background-color: purple;
            position: relative;
            left:10px;
            top: 10px;

        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
        $(function(){
            //1. 获取设置距离文档的位置(偏移) offset
            //console.log($(".son").offset());
            //console.log($(".son").offset().left);
            // $(".son").offset({
            //     top:200,
            //     left:200
            // });

            //2. 获取距离带有定位父级位置(偏移) position  如果没有带有定位的父级 ，则以文档为准
            //这个方法只能获取不能设置偏移 
            console.log($(".son").position());
                $(".son").position({
                    top:200,
                    left:200
                });
        })
    </script>
</body>
</html>
```

### 3.scrollTop()/ scrollLeft ()设置或获取元素被卷去的头部和左侧

1. scrollTop()方法设置或返回被选元素被卷去的头部
2. animate动画函数里面有个scrollTop属性，可以设置位置
3. 但是是元素做动画，因此$("body,html").animate({scrollTop})

```js
<script>
        $(function(){
            $(document).scrollTop(100);//赋值操作
            //被卷去的头部 scrollTop() / 被卷去的左侧 scrollLeft()
            //页面滚动事件
            var boxTop = $(".container").offset().top;
            $(window).scroll(function(){    //页面滚动
                console.log(11);
                console.log($(document).scrollTop());
                if($(document).scrollTop() >= boxTop){
                    $(".back").fadeIn();
                    ////fadeIn() 方法使用淡入效果来显示被选元素，假如该元素是隐藏的。
                }else{
                    $(".back").fadeOut();
                    // //fadeOut() 方法使用淡出效果来隐藏被选元素，假如该元素是隐藏的。
                }
                
            });
            //返回顶部
            $(".back").click(function(){
                //$(document).scrollTop(0);
                $("body,html").stop().animate({
                    scrollTop:0
                });
                // $(document).stop()animate({
                //     scrollTop:0
                // });// 不能是文档而是html和body 元素做动画
            })
        })
    </script>
```

## 7.3  案例：品优购电梯导航

1. 当我们滚动到今日推荐模块，就让电梯导航显示出来
2. 点击电梯导航页面可以滚动到相应内容区域
3. 核心算法：因为电梯导航模块和内容模块一一对应的
4. 当我们点击电梯导航某个小模块，就可以拿到当前小模块的索引号
5. 就可以把animate要移动的距离求出来：当前索引号内容模块它的offset().top
6. 然后执行动画即可

```js
$(function(){
    //1.显示隐藏电梯导航
    $(window).scroll(function(){
        var toolTop = $(".recommend").offset().top;
        if($(document).scrollTop() >= toolTop){
            $(".fixedtool").fadeIn();
        }else{
            $(".fixedtool").fadeOut();
        }
    });
```

```
//2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function(){
          //每次点击小li  先拿到当前的索引号
            console.log($(this).index());
            //当我们每次点击小li  就需要计算出页面要去往的位置
            //选出对应索引号的内容区的盒子  计算它的 .offset().top
            var current = $(".floor .w").eq($(this).index()).offset().top

            //页面动画滚动效果
            $("body,html").stop().animate({
                scrollTop:current
            });
        })
    })
```

此时有个小bug  刷新页面 会发小电梯导航消失，写代码时 是让页面滚动才会显示出来，如果不滚动页面探后刷新 ，没有办法显示！

所以正确的做法是：把页面滚动这段代码封装到一个函数里面去，当一加载 就调用，当页面滚动再调用一次。

```js
    //1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    function toggleTool(){
        if($(document).scrollTop() >= toolTop){
            $(".fixedtool").fadeIn();
        }else{
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function(){
        
    });
```

```js
 //点击之后，让当前的小li 添加current  类名 兄弟移除current类名
        $(this).addClass("current").siblings().removeClass()
```

**品优购电梯导航**

1. 当我们点击电梯导航某个小li，当前小li添加current类 ，兄弟移除类名
2. 当我们页面滚动到内容区域某个模块，左侧电梯导航，相对应的小li模块，也会添加current类，兄弟移除current类。
3. 触发的事件是页面滚动，因此这个功能要写到页面滚动事件里面。
4. 需要用到each，遍历内容区域大模块。each里面能拿到内容区域每一个模块元素和索引号
5. 判断条件：被卷去的头部大于等于内容区域里面的每个模块的offset().top
6. 就利用这个索引号找到相应的电梯导航小li 添加类



![1571993576853](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571993576853.png)

```js
$(function () {
    //当我们点击了小li 此时不需要执行 页面滚动事件里面的li  的背景选择 添加 current
    //节流阀  互斥锁 
    var flag = true;
    //1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function () {

        toggleTool();
        //3. 页面滚动到某个内容区域，左侧电梯导航小li 相应添加和删除 current类名
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    //就利用这个索引号找到相应的电梯导航小li 添加类
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }


    });
    //2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        //每次点击小li  先拿到当前的索引号
        console.log($(this).index());
        //当我们每次点击小li  就需要计算出页面要去往的位置
        //选出对应索引号的内容区的盒子  计算它的 .offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top

        //页面动画滚动效果
        $("body,html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        //点击之后，让当前的小li 添加current  类名 兄弟移除current类名
        $(this).addClass("current").siblings().removeClass();
    })

})
```

