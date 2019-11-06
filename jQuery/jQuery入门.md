# jQuery入门导读

- 能够说出什么是jQuery
- 能够说出jQuery的优点
- 能够简单使用jQuery
- 能够说出DOM对象好和jQuery对象的区别

## 目录

### jQuery的概述

### jQuery的基本使用



# 1.jQuery的概述

## 1.1 javascript库

仓库：可以把很多东西放到这个仓库里面，找东西只需要到仓库里面查找就可以了。

**JavaScript库**：既library，是一个**封装**好的特定的**集合**(方法和函数)。从封装一大堆函数的角度理解，就是在这个仓库中，封装了很多预定义好的函数在里面，比如动画anlimate、(显示，隐藏)hide、show、比如获取元素等。

简单理解：就是一个js文件，里面对我们原生js代码进行了封装，存放到里面，这样我们就可以快速高效的利用这些封装好的功能了。

比如jQuery，就是为了快速方便的操作DOM，里面基本都是函数(方法)。

**常见的JavaScript库**

- jQuery
- prototype
- Yull
- Dojo
- Ext JS
- 移动端zepto

这些库都是对原生JavaScript的封装，**内部都是JavaScript实现的**，我们主要学习的是**jQuery**。

## 1.2jQuery概念

**jQuery是**一个快速、简洁的**JavaScript库**，其设计宗旨就是“write Less。，Do More” 。即提倡写更少的代码，做更多的事情。

j就是JavaScript；Query查询；意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能。

**jQuery封装了JavaScript常用的功能代码，**优化了DOM操作、事件处理、动画设计和Ajax交互。

**学习jQuery本质：就是学习调用这些函数(方法)。**

**jQuery出现的目的是加快前段人员的开发速度，我们可以非常方便的调用和使用它，**从而提高开发效率

![1571626069823](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571626069823.png)

## 1.3 jQuery的优点

**优点**

- 轻量级。核心文件才几十kb，不会影响页面加载速度
- 跨浏览器兼容。基本兼容了现在的主流浏览器
- 链式编程，隐式迭代
- 对事件、样式、动画支持，大大简化了DOM操作
- 支持插件扩展开发。有着丰富的第三方插件，例如：树形菜单、日期控件、轮播图等
- 免费、开源

# 2.jQuery的基本使用

## 2.1jQuery的下载

官方网址：https://jquery.com/

![1571632012684](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1571632012684.png)

## 2.2 jQuery的入口函数

```
       $(function(){
           $('div').hide(); //此处是页面DOM加载完成的入口
       });
```

```
        $(document).ready(function () {
            $('div').hide();//此处是页面DOM加载完成的入口
        });
```

1.等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery帮我们完成了封装。

2.相当于原生js中的DOMcontentLoaded。

3.不同于原生js中的load事件是等页面文档，外部的js文件、css文件、图片加载完毕才执行内部代码

4.更推荐使用第一种方式。

## 2.3 jQuery的顶级对象$

1.$是jQuery的别称，在代码中可以使用jQuery替代$，但一般为了方便，通常都直接使用$.

2.$是jQuery的顶级对象，相当于原生JavaScript中的window。把元素利用$包装成jQuery对象，就可以调用jQuery的方法。

```
    <script>
        //1. $是jQuery的别称(另外的名字)
        /*
        $(function(){
            alert(11)
        });
        */

        jQuery(function() {
            alert(11)
            $('div').hide();//隐藏
        });
        //2. 同时也是jQuery的  顶级对象
    </script>
```

## 2.4jQuery对象和DOM对象

   1.用原生js获取过来的就叫DOM对象

2. jQuery对象： 用jQuery方式获取过来的对象就是jQuery对象。本质：通过$把 DOM元素进行了包装
3.  jQuery对象 只能使用jQuery方法，DOM对象则使用原生的JavaScript属性和方法

```
    <script>
        //1. DOM对象：  用原生js获取过来的对象就是DOM对象
        var myDiv = document.querySelector('div');
        var myspan = document.querySelector('span');
        console.dir(myDiv);

        //2. jQuery对象： 用jQuery方式获取过来的对象就是jQuery对象。本质：通过$把 DOM元素进行了包装
        $('div');//是一个jQuery对象
        $('span');//是一个jQuery对象
        console.dir($('div'));
        console.dir($('span'));
        
        //3. jQuery对象 只能使用jQuery方法，DOM对象则使用原生的JavaScript属性和方法
        myDiv.style.display = 'none';//原生js方法  
        //myDiv.hede();//myDiv是一个dom对象 不能使用jQuery里面的hide方法
        //$('div').style.display = 'none';这个$('div')是一个jQuery对象不能使用原生js 的属性和方法
    </script>
```

**DOM对象与jQuery对象之间是可以相互转换的。**

因为原生js比jQuery更大，原生的一些属性和方法jQuery没有给我们封装，要想使用这些属性和方法需要把jQuery对象转换为DOM对象才能够使用！

举例：视频里面有播放功能，播放叫做play方法 ，play只有在原生js里面有的，在jQuery里面并没有这个play方法，想要视频播放就不能使用jQuery对象，只能使用DOM对象。

但是jQuery对象获取更方便！把jQuery对象转换成DOM对象，就可以使用播放这个方法了！

1.DOM对象转换为jQuery对象：**$(DOM对象)**

```
$('div')

例如：
    $('video');
```

2.jQuery对象转换为DOM对象(两种方式)

```
$('div')[index]   index是索引
```

```
$('div').get(index)  index是索引

 例如：
     $('video')[0].play()
     $('video').get[0].play()
```

