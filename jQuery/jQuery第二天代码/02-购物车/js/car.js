$(function () {
    //1. 全选 全部选功能模块
    //就是把全选按钮(checkall) 的状态赋值给 三个小按钮 (j-checkbox)就可以了
    //事件可以使用change
    $(".checkall").change(function () {
        //console.log($(this).prop("checked"));
        //$(".j-checkbox").prop("checked",true);//点全选 是哪个按钮全部选上去了
        //全选和全部选  
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        
        
        if($(this).prop("checked")){
            //让所有的商品添加check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        }else{
            //check-cart-item  移除
            $(".cart-item").removeClass("check-cart-item");
        }
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
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {

            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        if($(this).prop("checked")){
            //让当前的商品添加check-cart-item 类名
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else{
            //check-cart-item  移除
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });


    //3. 增减商品数量模块 首先声明一个变量，当我们点击+号(increment)，就让这个值++，然后赋值给文本框
    $(".increment").click(function () {
        //得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        //console.log(n);
        n++;
        $(this).siblings(".itxt").val(n)

        //3. 购物车案例模块-修改商品小计
        //计算小计模块 根据文本框的值 乘以 当前商品的价格 就是 商品的小计
        //当前商品价格 p
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        //console.log(p);
        p = p.substr(1);//去掉￥符号
        console.log(p);
        //toFixed(2) 可以让我们保留2位小数
        var price = (p * n).toFixed(2);
        //小计模块
        //$(this).parents(".p-num").siblings(".p-sum").html("￥" + p * n);
        //就可以写成
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
        getSum();
    });

    $(".decrement").click(function () {
        //得到当前兄弟文本框的值
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        //console.log(n);
        n--;
        $(this).siblings(".itxt").val(n)

        //小计 减功能
        //爸爸的爸爸的兄弟 结构一定要看清楚  parents(".p-num")返回指定的祖先元素
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        //console.log(p);
        p = p.substr(1);//去掉￥符号  截取字符串
        console.log(p);
        //小计模块
        //$(this).parent().parent().siblings(".p-sum").html("￥" + p * n);
        //$(this).parents(".p-num").siblings(".p-sum").html("￥" + p * n);
        //熟练后保留2位小数：
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });

    //4. 用户修改文本框的值 计算 小计模块 change事件
    $(".itxt").change(function () {   //change 单选框与复选框改变后触发的事件。
        //先得到文本框的里面的值 乘以 当前商品的单价
        var n = $(this).val();//拿到文本框修改过的值
        //当前商品的单价 修改了那个 就把那个拿过来
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
        getSum();
    });

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
            money += parseFloat($(ele).text().substr(1));//先把值取过来 去掉人民币符号  在转换成小数
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

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
    })
})