
// 加验证
let examine = [2, 2, 2, 2, 2, 2];
let usname = document.getElementsByClassName('phonenumber')[0]
// 设置账号验证
// k) 账号验证要求： 长度6~12 位， 必须是字母与数字组成。 不能出现特殊字符

let name_verify = /0?(13|14|15|17|18|19)[0-9]{9}/;
let name_1 = document.getElementsByClassName('helpblock')[0];
// 添加用户名失焦事件
usname.onblur = function () {
    console.log(11);

    if (name_verify.test(usname.value)) {
        name_1.style.display = 'none';
        usname.style.border = '1px solid #cccccc'
        examine[0] = 1;
    } else {
        name_1.style.display = 'inline';
        usname.style.border = '1px solid red'
        examine[0] = 2;
    }
}
// l)	密码验证要求：长度6~20位，可包含字母、数字、下划线
let pas = document.getElementsByClassName('upwd')[0]
let pas_verify = /^[A-Za-z0-9_]{6,20}$/;
let pas_1 = document.getElementsByClassName('helpblock')[1];
pas.onblur = function () {


    if (pas_verify.test(pas.value)) {
        pas_1.style.display = 'none';
        pas.style.border = '1px solid #cccccc'
        examine[1] = 1;
    } else {
        pas_1.style.display = 'inline';
        pas.style.border = '1px solid red'
        examine[1] = 2;
    }
}
// 密码强度
var safety = document.querySelectorAll('.safety P')
var pwd_verify_r = /^[A-Za-z0-9_]{6,}$/;
var pwd_verify_z = /^(?=.*[\w])(?=.*\d)[\w\d]{6,}$/;
var pwd_verify_q = /^(?=.*[\w])(?=.*\d)[\w\d]{10,}$/;
pas.onkeyup = function () {
    let pas_1 = document.getElementsByClassName('helpblock')[1];
    if (pas_verify.test(pas.value)) {
        if (pwd_verify_r.test(pas.value)) {
            safety[0].style.backgroundColor = 'red'
            if (pwd_verify_z.test(pas.value)) {
                safety[1].style.backgroundColor = 'orange'
                safety[0].style.backgroundColor = '#cccccc'
                if (pwd_verify_q.test(pas.value)) {
                    safety[2].style.backgroundColor = 'green'
                    safety[0].style.backgroundColor = '#cccccc'
                    safety[1].style.backgroundColor = '#cccccc'
                } else {
                    safety[2].style.backgroundColor = '#cccccc'
                    safety[1].style.backgroundColor = 'orange'
                    safety[0].style.backgroundColor = '#cccccc'
                }
            } else {
                safety[2].style.backgroundColor = '#cccccc'
                safety[1].style.backgroundColor = '#cccccc'
                safety[0].style.backgroundColor = 'red'
            }
        } else {
            safety[2].style.backgroundColor = '#cccccc'
            safety[0].style.backgroundColor = '#cccccc'
            safety[1].style.backgroundColor = '#cccccc'
        }
    } else {
        safety[2].style.backgroundColor = '#cccccc'
        safety[0].style.backgroundColor = '#cccccc'
        safety[1].style.backgroundColor = '#cccccc'
    }
}
// m) 确认密码验证要求： 必须和密码一致
let pas_ok = document.getElementsByClassName('pasok')[0];
let pas_2 = document.getElementsByClassName('hint')[0];
let pas_3 = document.querySelector('.yes .helpblock')
pas_ok.onblur = function () {

    if (pas_ok.value == pas.value) {
        pas_2.style.display = 'none';
        pas_3.style.display = 'none';
        examine[2] = 1;
    } else {
        pas_2.style.display = 'inline';
        let timer = setInterval(

            function () {
                pas_2.style.display = 'none';
                clearInterval(timer);
            }, 2000
        );

        examine[2] = 2;
    }
}

// 做验证码
function RandomRange(min, max) {
    var returnStr = "",
        range = (max ? Math.round(Math.random() * (max - min)) + min : min),
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < range; i++) {
        var index = Math.round(Math.random() * (arr.length - 1));
        returnStr += arr[index];
    }
    return returnStr;
}

// 给个验证码
let num = RandomRange(4, 4)
let img = document.querySelector('.img')
let agan = document.querySelector('.agan')
img.innerText = num;
agan.onclick = function () {
    let num = RandomRange(4, 4)
    img.innerText = num;
}

// 图片验证码
let pic = document.querySelector('.auth input')
let pic_1 = document.querySelector('.auth .helpblock')
pic.onblur = function () {
    if (pic.value == img.innerText) {
        examine[3] = 1;
    } else {
        examine[3] = 2;
        pic_1.style.display = 'none';
    }
}
let hint = document.querySelector(' .phoneauth .hint')

// 手机验证码
let pho = document.querySelector('.phoneauth input')

if (pho.value == '') {
    examine[4] = 2;
    pho.onblur = function () {
        if (pic.value == '') {
            examine[4] = 2;
        } else {
            examine[4] = 1;
        }
    }
}


// 是否勾选已阅读
let red = document.querySelector('.check input');
let red_1 = document.querySelector('.check .helpblock');
red.onclick = function () {
    if (examine[5] == 1) {
        examine[5] = 2;
    } else if (examine[5] == 2) {
        examine[5] = 1;
        red_1.style.display = 'none';
    } console.log(examine[5])
}


// 提交
let sub = document.querySelector('.now input')
sub.onclick = function () {
    console.log(examine);
    if (examine.indexOf(2) == -1) {
        //后端验证
        //获取当前cookie/localStorage/数据库中的用户
        /*
            key :  users
            value : {用户名:密码,用户名:密码}
        */
        //当前用户
        let uname = usname.value;
        //当前密码
        let upwd = pas.value;
        let $ = new Tool();
        let cookie_str = $.getCookie('users') ? $.getCookie('users') : '';
        alert(cookie_str);
        //转对象
        let cookie_obj = $.convertStrToObj(cookie_str);
        //判断当前用户是否存在
        if (uname in cookie_obj) {
            alert('用户已存在！');
            return;
        } else {
            cookie_obj[uname] = upwd;
            //存入cookie
            $.cookie('users', JSON.stringify(cookie_obj), { expires: 9, path: '/' });
            alert('注册成功!');
        }



    } else {
        if (examine[0] == 2) {
            name_1.style.display = 'inline';
            usname.style.border = '1px solid #f2c9c5'
        };
        if (examine[1] == 2) {
            pas_1.style.display = 'inline';
            pas.style.border = '1px solid #f2c9c5'
        };
        if (examine[2] == 2) {
            pas_3.style.display = 'inline';
            pas_ok.style.border = '1px solid #f2c9c5'
        };
        if (img.innerText = '') {
            pic_1.style.display = 'inline';
            pic.style.border = '1px solid #f2c9c5'

        };
        if (examine[5] == 2) {
            red_1.style.display = 'inline';
        };
        if (examine[3] !== 1) {
            let num = RandomRange(4, 4)
            img.innerText = num;
            hint.style.display = 'inline';
            let timer = setInterval(
                function () {
                    hint.style.display = 'none';
                    clearInterval(timer);
                }, 2000
            );
        };




    }
}
let go = document.querySelector('.go')
// 去注册
go.onclick = function () {
    window.open("../html/index05.html")
}



