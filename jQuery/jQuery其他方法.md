# jQuery其他方法

## 目录

- 能够说出jQuery对象的拷贝方法
- 能够说出jQuery多库共存的的2中方法
- 能够使用jQuery插件

1. jQuery拷贝对象
2. 多库共存
3. jQuery插件

# 1.jQuery拷贝对象

如果想要把某个对象拷贝(合并) 给另外一个对象使用，此时可以使用$.extend()方法

语法：

```js
$.extend([deep],target,object1,[oobjectN])
```

1.deep:如果设为true 为深拷贝，默认为false 浅拷贝

2.target：要拷贝的目标对象

3.object1：待拷贝到第一个对象的对象。

4.objectN：待拷贝到第N个对象的对象

5.浅拷贝是把被拷贝的对象**复杂数据类型中的地址**拷贝给目标对象，修改目标对象**会影响**被拷贝对象

6.深拷贝，前面加true，完全克隆(拷贝的对象，而不是地址)，修改目标对象不会影响被拷贝对象。

# 2.jQuery多库共存

问题概述：

jQuery使用$作为标识符，随着jQuery的流行，其他js库也会用$作为标识符，这样一起使用会起冲突。

客观需求：

需要一个解决方案，让jquery和其他js库不存在冲突，可以同时存在，这就叫做多库共存。

jQuery解决方案：

1.把里面的$符号 统一改为jQuery，比如jQuery("div")

2.jQuery变量规定新的名称： $.noConflict()     

var xx  = $.noConflict();

```js
    <script>
        $(function() {
            function $(ele){
                return document.querySelector(ele);
            }
            //1.  如果是$ 符号冲突 我们就使用 jQuery
            console.log($("div"));
            jQuery.each();
            // 2. 让jQuery释放对$控制权  让用户自己决定
            var llg = jQuery.noConflict();
            console.log(llg("span"));
            llg.each();
        })
    </script>
</head>

<body>
    <div></div>
    <span></span>
</body>
```

# 3.jQuery插件

jQuery功能比较有限，想要复杂的特效效果，可以借助于jQuery插件完成。

注意：这些插件也是依赖于jQuery来完成的，所以必须要引入jQuery文件， 因此也称为jQuery插件。

### **jQuery插件常用的网站**：

1.jQuery插件库： [http://www.jq22.com](http://www.jq22.com/) 

2.**jQuery之家**： [http://www.htmleaf.com](http://www.htmleaf.com/) 推荐使用

### **jQuery插件使用步骤**

1.引入相关文件。(jQuery文件和插件文件)

2.复制相关html、css、js(调用插件)。

### 1.瀑布流

### 2.图片懒加载

：(图片使用延迟加载可提高网页下载速度。它也能帮服务器减轻负载)

当我们页面滑动到可视区域，在显示图片。

我们使用jQuery插件库EasyLazyload。注意，此时的js引入文件和js调用必须写到DOM元素(图片)最后面。

### 3.全屏滚动(fullpage.js)

github: https://github.com/alvarotrigo/fullPage.js

中文翻译网站：http://www.dowebok.com/demo/2014/77/

### 4.bootstrap JS**插件**

bootstrap框架也是依赖于jQuery开发的，因此里面的js插件使用，也必须引入jQuery文件。

下载地址 https://v3.bootcss.com/getting-started/#download 

bootstrap插件： https://v3.bootcss.com/javascript/#modals-methods 

 bootstrap组件：https://v3.bootcss.com/components/ 

![1572171239535](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1572171239535.png)

模态框

![1572171800757](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1572171800757.png)

# 4.toDolist案例

1. 文本框里面输入内容，按下回车，就可以生成代办事项。
2. 点击代办事项复选框，就可以把当前数据添加到以完成事项里面。
3. 点击已完成事项复选框，就可以把当前数据添加到待办事项里面
4. **但是本页面内容刷新页面不会丢失。**

## 1.toDoList分析

1. 刷新页面不会丢失数据，因此需要用到本地存储locaStorage
2. **核心思路：不管按下回车，还是点击复选框，都是把本地存储的数据加载到页面中，这样保证刷新页面不会丢失数据**
3. 存储的数据格式：var  todolist = [{title:  'xxx' ,  done: false}](两个参数： 文本框里面的内容，到底是否循环)
4. 注意1：本地存储localStorage里面只能存储字符串格式，因此需要把对象转换为字符串JSON.stringfiy(data)。
5. 注意2：获取本地存储数据，需要把里面的字符串转换为对象格式JSON.parse()我们才能使用里面的数据。

## 2.toDoList按下回车就把新数据添加到本地存储里面

1. 切记：页面中的数据，都要从本地存储里面获取，这样刷新页面不会丢失数据，所以先要把数据保存到本地存储里面。
2. 利用事件对象。KeyCode判断用户按下回车键(13).
3. 声明一个数组，保存数据。
4. 先要读取本地存储原来的数据(声明函数 getData()),放到这个数组里面。
5. 之后要把最新从表单获取过来的数据，追加到数组里面。
6. 最后把数组存储给本地存储(声明函数savaData())

## 3.toDoList本地存储数据渲染加载到页面

1. 因为后面也会经常渲染加载操作，所以声明一个函数load，方便后面调用
2. 先要读取本地存储数据。(数据不要忘记转换为对象格式)
3. 之后遍历这个数据($.each)  ,有几条数据，就生成几个小li 添加到ol里面。
4. 每次渲染之前，先把原先里面的ol的内容清空，然后渲染加载最新的数据。

## 4.toDoList 删除操作

1. 点击里面的a链接，不是删除的li ，而是**删除本地存储对应的数据。**
2. **核心原理：先获取本地存储数据，删除对应的数据，保存给本地存储，重新渲染列表li**
3. 我们可以给链接自定义属性记录当前的索引号
4. 根据这个相关索引号**删除**相关的数据---数组的**splice(i,1)**方法
5. 存储修改后的数据，然后存储给本地存储
6. 重新渲染加载数据列表
7. 因为a是动态创建的，我们使用on方法绑定事件，click是不能给动态绑定事件

## 5.toDoList正在进行和已完成选项操作

![1572192707837](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1572192707837.png)

1. **当我们点了小的复选框，修改本地存储数据，在重新渲染数据列表。**
2. 点击，获取本地存储数据。
3. 修改对应数据属性done 为当前复选框的checked状态(如果是false就放在ol里面，选中复选框，就是ture 就放在下面的已经完成 ul里面)
4. 之后保存数据到本地存储
5. 重新渲染页面加载数据列表
6. load加载函数里面，新增一个条件，如果当前数据的done为true 就是已经完成，就把列表渲染加载到ul里面
7. 如果当前数据的done是false 。则是待办事项，就把列表渲染加载到ol里面。

```js
    //渲染加载数据

    function load() {
        //读取本地存储的数据
        var data = getDate();
        // console.log(data);
        //遍历之前清除ol里面的元素内容
        $("ol").empty();        //遍历这个数据   empty：清空里面元素的
        $.each(data, function (i, n) {
            // console.log(n);
            //就追加元素  prepend 追加的意思
            $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "> </a></li>");

        })
```

```js
$("ol,ul").empty();		
//遍历这个数据   empty：清空里面元素的
//这里注意 ul和ol 都要清空操作
```

![1572224913985](C:\Users\9527llg\AppData\Roaming\Typora\typora-user-images\1572224913985.png)

```js
ul是已经完成  要选定状态  所以 checked='checked'
```

## 6.toDoList统计正在进行个数和已经完成个数

1. 在我们的load函数里面操作
2. 声明2个变量：todoCount代办个数，doneCount已经完成个数
3. 当进行遍历本地存储数据的时候，如果数据done为false，则todoCount++，否则doneCount++
4. 最后修改相应的元素text()

