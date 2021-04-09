//匿名函数自调
$(function () {
    //声明函数，参数三个：导航标题、当前选择项、当前标题显示内容
    function tabs(tabTit, on, tabCon) {
        //找到所有标题并添加单机事件
        $(tabTit).children().click(function () {
            //声明当前选择项
            var index = $(tabTit).children().index(this);
            //为当前选中项增加active，移除其兄弟元素的active
            $(this).addClass(on).siblings().removeClass(on);
            //选中项显示内容，未选中项隐藏内容
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    };
    tabs(".tab-hd", "active", ".tab-bd");
});

function Login() {
    this.uname = this.$get('.phonenumber');
    this.upwd = this.$get('.upwd');
    this.sub = this.$get('.go');
    this.go = this.$get('.register');
    this.verify = this.$get('.verify');
    this.img = this.$get('.img');
    this.arr = [false, false, false];
    this.agan = this.$get('.agan1');
    this.hint = this.$get('.hint');
    this.worry = this.$get('.worry');
    this.helpblock = this.$get('.helpblock');
    this.yexy = this.$get('.yexy');
    this.addEvent();
}
Login.prototype = {
    constructor: Login,
    // 验证码生成
    RandomRange(min, max) {
        var returnStr = "",
            range = (max ? Math.round(Math.random() * (max - min)) + min : min),
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (var i = 0; i < range; i++) {
            var index = Math.round(Math.random() * (arr.length - 1));
            returnStr += arr[index];
        }
        return returnStr;
    },
    $get(selector) {
        return document.querySelector(selector);
    },
    addEvent() {
        let that = this;
        // 给个验证码
        let num = that.RandomRange(4, 4)
        that.img.innerText = num;
        that.agan.onclick = function () {
            let num = that.RandomRange(4, 4)
            that.img.innerText = num;
        }
        // 去注册
        that.go.onclick = function () {
            window.open("../html/index06.html")
        }
        // 登录
        that.sub.onclick = function () {
            if (that.uname.value !== '') {
                that.arr[0] = 1
            }
            if (that.upwd.value !== '') {
                that.arr[1] = 1
            }
            if (that.verify.value !== '') {
                that.arr[2] = 1
            }
            if (that.arr[2] == 1 && that.arr[1] == 1 && that.arr[0] !== 1) {
                that.helpblock.style.opacity = 1;
                that.uname.style.border = ' 1px solid red';
                that.upwd.style.border = '1px solid #cccccc';
                that.verify.style.border = '1px solid #cccccc ';
            }
            if (that.arr[0] == 1 && that.arr[1] == 1 && that.arr[2] !== 1) {
                that.helpblock.style.opacity = 1;
                that.yexy.innerText = '此项必填'
                that.verify.style.border = ' 1px solid red';
                that.uname.style.border = '1px solid #cccccc ';
                that.upwd.style.border = '1px solid #cccccc ';
            }
            if (that.arr[0] == 1 && that.arr[2] == 1 && that.arr[1] !== 1) {
                that.helpblock.style.opacity = 1;
                that.yexy.innerText = '请填写密码'
                that.verify.style.border = ' 1px solid #cccccc';
                that.uname.style.border = ' 1px solid #cccccc ';
                that.upwd.style.border = '1px solid red';
            }
            if (that.arr[0] !== 1 && that.arr[1] !== 1 && that.arr[2] !== 1) {
                that.helpblock.style.opacity = 1;
                that.yexy.innerText = '此项必填'
                that.verify.style.border = ' 1px solid red';
                that.uname.style.border = '1px solid red';
                that.upwd.style.border = '1px solid red ';
            }
            if (that.arr[0] == 1 && that.arr[1] == 1 && that.arr[2] == 1) {
                if (that.verify.value !== that.img.innerText) {
                    that.hint.style.display = 'inline';
                    let timer = setInterval(
                        function () {
                            that.hint.style.display = 'none';
                            clearInterval(timer);
                            let num = that.RandomRange(4, 4)
                            that.img.innerText = num;
                        }, 2000
                    );
                } else {
                    //后端
                    let uname = that.uname.value;
                    let upwd = that.upwd.value;
                    let $ = new Tool();
                    let cookie_str = $.getCookie('users') ? $.getCookie('users') : '';
                    let cookie_obj = $.convertStrToObj(cookie_str);
                    if (uname in cookie_obj) {
                        if (cookie_obj[uname] === upwd) {
                            alert('登录成功');
                            // location.href = 'product.html';
                        } else {
                            that.worry.style.display = 'inline';
                            let timer = setInterval(
                                function () {
                                    that.worry.style.display = 'none';
                                    clearInterval(timer);
                                    let num = that.RandomRange(4, 4)
                                    that.img.innerText = num;
                                }, 2000
                            )
                        }
                    } else {
                        that.worry.style.display = 'inline';
                        let timer = setInterval(
                            function () {
                                that.worry.style.display = 'none';
                                clearInterval(timer);
                                let num = that.RandomRange(4, 4)
                                that.img.innerText = num;
                            }, 2000
                        )
                    }
                }

            }
        }
    }
}

new Login();




