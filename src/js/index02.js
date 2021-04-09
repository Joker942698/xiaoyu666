function ShopList() {
    this.init()
}
ShopList.prototype = {
    constructor: ShopList,
    init() {
        $("#page1").load("../../dist/html/pubhead.html");
        $("#page2").load("../../dist/html/pubfooter.html");
        window.onload = function () {
            function convertStrToObj(str) {
                if (!str) {
                    return {};
                }
                return JSON.parse(str);
            }

            let num = document.querySelector('b')
            let storage = window.localStorage;
            let storage_str = storage.getItem('carts') ? storage.getItem('carts') : '';
            //转对象
            let storage_obj = convertStrToObj(storage_str);
            let sum = 0;
            //遍历对象
            for (let key in storage_obj) {
                sum += storage_obj[key].num;
            }
            num.innerText = `${sum}`;

            // console.log(num);
            num.parentNode.onclick = function () {
                location.href = '../../dist/html/index04.html';
            }










            let big = document.querySelector('.big-cate');
            let list = document.querySelector('.list');
            console.log(list);
            big.onmouseover = function () {
                list.style.display = 'block';
            }
            list.onmouseover = function () {
                list.style.display = 'block';
            }
            big.onmouseout = function () {
                list.style.display = 'none';
            }
            list.onmouseout = function () {
                list.style.display = 'none';
            }
            $.get("../../dist/JSON/index.json",
                (date) => {
                    var $arr = date;
                    for (let key in $arr) {
                        $('.shopList').append(
                            // 用地址可以访问 但是调用JSON就不能访问
                            `
                        <div class="col-md-2 shop shop-1">
                <div class="pic">
                    <a href="../../dist/html/index03.html">
                        <img src="${$arr[key].src}"
                            class="advertising">
                    </a>
                    <a href="javascript:;" class="get-cart">
                        加入购物车
                    </a>
                </div>
                <div class="caption">
                    <a href="" class="name">
                        ${$arr[key].namef}
                        <span class="highlight">
                            天机
                        </span>
                        ${$arr[key].name}
                    </a>
                    <div class="price">
                        ￥${$arr[key].price}
                    </div>
                    <div class="promotion">
                        <span class="discount-tag" style="${$arr[key].style}">${$arr[key].act}</span>
                    </div>
                </div>
            </div>
                        `
                        )

                    }
                }
            )
        }
    }

}

new ShopList();

