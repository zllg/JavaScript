# jQuery事件

## 目标

- 能够说出4中常见的注册事件
- 能够说出on绑定事件的优势
- 能够说出jQuery事件委派的优点以及方式
- 能够说出绑定事件与解绑事件

## 目录

- jQuery事件注册
- jQuery事件处理
- jQuery事件对象

# 1. jQuery事件注册

## **1.1单个事件注册**

语法：element.事件(function(){})

$("div").click(function(){事件处理程序})

其他事件和原生基本一致.

比如：mouseover ,  mouseout ,  nlue , focus , change , keydowm , keyup , resize , scroll等



# 2. 事件处理

## 2.1 事件处理on() 绑定事件

on()方法在匹配元素上绑定一个或多个事件的事件处理函数

语法：

```js
element.on(events,[selector],fn)
```

1. ​       1.events:  一个或多个用空格分隔的事件类型，如"click" 或"keydown".

2. selector: 元素的子元素选择器。
3. fn：回调函数 即绑定在元素身上的侦听函数。

### on()方法优势1：

可以绑定多个事件，多个事件处理程序。

```js
$("div").on({
    mouseover:function({}),
    mouseout:function({}),
    click:function({})
});
```



```js
 $("div").on({
                mouseenter:function(){
                    $(this).css("background","skyblue"); 
                },
                click:function(){
                    $(this).css("background","purple"); 
                },
                mouseleave:function(){
                    $(this).css("background","blue"); 
                }
            })
```

**如果事件处理程序相同**

```js
$("div").on("mouseover mouseout", function(){
    $(this).toggleClass("current");
});
```

```js
            $("div").on("mouseenter mouseleave",function(){
                $(this).toggleClass("current");
            })
```

### on()方法优势2：

可以事件委派操作。事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素上身上，就是把事件委派给父元素。

```
$("ul").on("click","li"function(){
	alert("hello ");
});
```

在此之前有bind(),live()  delegate()等方法来处理事件绑定或者事件委派，最新版本的请用on 替代他们  。

------

### on()方法优势3：

动态创建的元素，click() 没有办法绑定事件，on() 可以给动态生成的元素绑定事件

```js
    //(2) on可以给实现事件委托(委派)
    //$("ul li").click();
            $("ul").on("click","li",function(){
                alert(11);
            });
    //click 是绑定在ul身上的  ， 但是 触发的对象是 ul 里面的 小li 

       //(3) on可以给未来动态创建的元素绑定事件
            // $("ol li").click(function(){
            //     alert(11);
            // })

            $("ol").on("click","li",function(){
                alert(11);
            })

    var li = $("<li>我是后来创建的</li>");
            $("ol").append(li);
```

## 2.2 发布微博案例

1. 点击发布按钮，动态创建一个小li ，放入文本框的内容和删除按钮，并且添加到ul中。
2. 点击的删除按钮，可以删除当前的微博留言

```js
 //on可以给动态创建的元素绑定事件
            $("ul").on("click","a",function(){
                //$(this).parent().remove();
                $(this).parent().slideUp(function(){
                    $(this).remove();
                });
            })
        
        })
```

## 2.3 事件处理off()解绑事件

off()方法可以移除通过on()方法添加的事件处理程序。

```js
$("p".off) // 解绑元素所有事件处理程序
$("p").off("click") //解绑p元素上面的点击事件 后面的foo 是侦听函数
$("ul").off("click","li"); //解绑事件委托
```

如果有的事件只想触发一次，可以使用**one()**来绑定事件。

```js
    <script>
        $(function() {
            $("div").on({
                click:function(){
                    console.log("我点击了");
     
                },
                mouseover:function(){
                    console.log('我鼠标经过了');
                    
                }
            });
            $("ul").on("click","li",function(){
                alert(11);
            })
            //1. 事件解绑 off
            //$("div").off();//这个是解除了div身上的所有事件
            $("div").off("click");// 这个是解除了div身上的点击事件
            $("ul").off("click","li");

            //2. one()  但是它只能触发事件一次，
            $("p").one("click",function(){
                alert(11);
            })
        })
    </script>
```

## 2.4 自动触发事件 trigger()

有些事件希望自动触发，比如轮播图自动播放功能跟点击右侧按钮一致，可以利用定时器自动触发右侧按钮事件，不必鼠标点击触发。

```js
element.click()  //第一种简写形式
```

```js
element.trigger("type") //第二种自动触发模式
```

```
element.tirggerHandler(type)  //第三种自动触发模式
```

```js
    <script src="jquery.min.js"></script>
    <script>
        $(function() {
            $("div").on("click",function(){
                alert(11);
            });
            //自动触发事件
            //1. 元素.事件()
            //$("div").click();
            //2. 元素 .trigger('事件');
            //$("div").trigger("click");
            $("input").trigger("focus");
            //3. 元素 .triggerHandler"事件") //就是不会触发元素的默认行为
            $("div").triggerHandler("click");
            $("input").on("focus",function(){
                $(this).val("你好吗？");
            });
            $("input").triggerHandler("focus",function(){

            })
        });
    </script>
```

# 3. jQuery事件对象

```js
element.on(events,[selector],function(event) {})
```

阻止默认行为：event.preventDefault() 或者 return false

阻止冒泡： event.stopPropagation()

```js
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
    <script src="jquery.min.js"></script>
    <script>
        $(function() {
            $(document).on("click",function(){
                console.log("点击了document");
                
            })
            $("div").on("click",function(){
                console.log("点击了div");
                event.stopPropagation();                
            })
        })
    </script>
</head>

<body>
    <div></div>
</body>
```

