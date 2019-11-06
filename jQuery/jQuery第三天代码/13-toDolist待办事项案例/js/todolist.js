$(function () {
    //KeyCode判断用户按下回车键(13)
    //1. 按下回车  把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{title:"xxx",done: false}]
    load()//每次页面一加载就显示这个页面
    $("#title").on("keydown", function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入您要的操作");
            } else {
                //读取本地储存原来的数据
                //去调用这个函数  这个函数的作用就是读取本地存储的数据
                var local = getDate();// getDate()  
                //console.log(local);

                //把local数组进行更新数据  把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                //把数组local  存储给本地存储
                saveDate(local);

                //2. loDOList 本地存储数据渲染加载到页面
                load();
                //输入后当前文本框清空
                $(this).val("");
            }
        }
    });

    //3. toDoList 删除操作
    $("ol,ul").on("click", "a", function () {
        //alert(11);
        // 先获取本地存储
        var data = getDate();
        // 修改数据
        var index = $(this).attr("id");
        //console.log(index);
        data.splice(index, 1);
        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();
    });


    //4. toDoList 正在进行和已经完成选项操作
    $("ol,ul").on("click", "input", function () {
        // 先获取本地存储的数据
        var data = getDate();

        // 修改数据  拿到兄弟a的索引号 就可以得到input的索引号
        var index = $(this).siblings("a").attr("id");
        console.log(index);//检测能否拿到索引号

        //固有属性通过prop()获取 ， 自定义属性通过attr()获取
        data[index].done = $(this).prop("checked");
        console.log(data);//检查有没有修改属性  可以看到点了的把done 就改成了true

        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();

    });

    //这是单独封装的函数
    //读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            //本地存储里面的数据是字符串格式的   但是我们需要的是对象格式的
            return JSON.parse(data);//这一步很重要
            //JSON.parse 可以把我们字符串格式的数据 转换为我们要的对象格式 转换完毕之后再返回
        } else {
            return [];
        }
    }
    //保存本地存储数据
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    //渲染加载数据

    function load() {
        //读取本地存储的数据
        var data = getDate();
        // console.log(data);
        //遍历之前清除ol里面的元素内容
        $("ol,ul").empty();        //   empty：清空里面元素的
        var todoCount = 0;// 正在进行的个数
        var doneCount = 0;// 已经完成的个数
        //遍历这个数据
        $.each(data, function (i, n) {
            // console.log(n);


            //新增一个条件，如果当前数据的done为true 就是已经完成，就把列表渲染加载到ul里面
            //done是false 。则是待办事项，就把列表渲染加载到ol里面。

            if (n.done) {    //如果你当前的数据：n ，你的done属性
                //已经完成放在ul里面
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "> </a></li>");
                doneCount++;
            } else {
                //就追加元素  prepend：追加的意思 
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "> </a></li>");
                todoCount++;
            }

        });
        //text改为todo变量，遍历完毕之后才统计  
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);


    }

})
