$("#page1").load("../../dist/html/pubhead.html");
$("#page2").load("../../dist/html/pubfooter.html");



$.get("../../dist/JSON/indexshop.json",
    (date) => {
        var $arr = date;
        $('.shop-img').append(
            `                <div class="row biglook">
                    <div id="small">
                        <div id="cover"></div>
                        <span id="docu"></span>
                        <img src="${$arr.q.thumbnail.q}"
                            alt="">
                    </div>
                    <div id="big">
                        <img src="${$arr.q.thumbnail.q}"
                            alt="" id="big_pic">
                    </div>
                </div>
                <!-- 一行缩略图 -->
                <div class="row smalllook">
                    <div class="img">
                        <ul class="slider-thumb">
                            <li class="">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.q}">
                                    </span>
                                </div>
                            </li>
                            <li class="">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.z}">
                                    </span>
                                </div>
                            </li>
                            <li class="">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.w}">
                                    </span>
                                </div>
                            </li>
                            <li class="">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.e}">
                                    </span>
                                </div>
                            </li>
                            <li class="active">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.r}">
                                    </span>
                                </div>
                            </li>
                            <li class="">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.a}">
                                    </span>
                                </div>
                            </li>
                            <li class="">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.s}">
                                    </span>
                                </div>
                            </li>
                            <li class="">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.d}">
                                    </span>
                                </div>
                            </li>
                            <li class="">
                                <div class="thumb-item">
                                    <span>
                                        <img
                                            src="${$arr.q.thumbnail.f}">
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="btn666"><i class="glyphicon glyphicon-menu-right"></i></div>
                </div>`
        )

        $('.shop-particulars').append(

            `
            
                <div class="row">
                    <h1>
                        ${$arr.q.name}
                    </h1>
                </div>
                <div class="row">
                    <div class="item-sub-title">${$arr.q.introduce}</div>
                </div>
                <div class="row pice">
                    <div class="row price">
                        <span class="one">￥${$arr.q.price}</span>
                        <span href="javascripi:;" class="two">手机购买↓
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABI0lEQVQ4jc3TsW6DMBAG4EMevFTNymCJV0g2T/hVIvECqbqiQMUD8AI8jDvxGid56Eo2R7K4mqiiqoAeY277Buv8+84Az1SGfO+dEkR2oSNokwrR1Amn06ilDFC0tx0CmZHbJZ26rFlT7C49QjHfZVNTotSp4jfflmL15OA8P82m8lwbIPeT/a8MWe8DdeUVGCV36lFhNVw4TUc9OhQflpPxGpUqhmSpo7FAWahaYgXay+Ca4Y3TiXoDDkRglYwGJAgUNSz0moNPlcOXK6fk7g2F+NiPtP/q02qZZV01ACNIvE8dVjSuKM79i9T5UHOKu6SR4u6yeuwnxUTAKe68TafP2NpVIanyctghEyfWlRWn2J0QQb3fOMVEVgaBc/ZNPU99A6SdqbKN00sIAAAAAElFTkSuQmCC"
                                alt="">
                        </span>

                    </div>
                    <div class="row gift">
                        <div class="activity-wrap promotions-all-show">
                            <div class="dt">优惠信息：</div>
                            <div class="dd activity-content">
                                <div class="promotion-list more-gift">
                                    <div class="activity-txt" data-skus="null">
                                        <span class="label-danger">赠品</span>
                                        <a href="">
                                            <img
                                                src="https://image.ztemall.com/ccb721e6cf0b2c9b230dc2315a9db838.jpg?x-oss-process=image/resize,w_440,h_440">
                                        </a>
                                        x 1&nbsp;&nbsp;
                                        <a href="">
                                            <img
                                                src="https://image.ztemall.com/f9b8b9e1dd9c8017ca0a48d162e9b98b.jpg?x-oss-process=image/resize,w_440,h_440">
                                        </a>
                                        x 1&nbsp;&nbsp;
                                        <a href="">
                                            <img
                                                src="https://image.ztemall.com/81eca476101fd2d4a4967dea24e80b4b.jpg?x-oss-process=image/resize,w_440,h_440">
                                        </a>
                                        x 1&nbsp;&nbsp;（购满1件即赠，赠完为止）
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 选择类 -->
                <div class="category">
                    <div class="dashed"></div>
                    <div class="row  same color ">
                        <div class="col-md-2 name">
                            颜色
                        </div>
                        <div class="col-md-10">
                            <div class="col-md-4  imgimg">
                                <img src="${$arr.q.color.one.src}"
                                    alt="${$arr.q.color.one.name}">
                            </div>
                            <div class="col-md-4  imgimg">
                                <img src="${$arr.q.color.two.src}"
                                    alt="${$arr.q.color.two.name}">
                            </div>
                            <div class="col-md-4  imgimg">
                                <img src="${$arr.q.color.thr.src}"
                                    alt="${$arr.q.color.thr.name}">
                            </div>
                            <div class="col-md-4  imgimg">
                                <img src="${$arr.q.color.for.src}"
                                    alt="${$arr.q.color.for.name}">
                            </div>
                        </div>
                    </div>
                    <div class="row  same edition ">
                        <div class="col-md-2 name">
                            版本
                        </div>
                        <div class="col-md-10 ">
                            <div class="col-md-4 typtyp">
                                ${$arr.q.edition.one}
                            </div>
                            <div class="col-md-4 typtyp">
                                ${$arr.q.edition.two}
                            </div>
                            <div class="col-md-4 typtyp">
                                ${$arr.q.edition.thr}
                            </div>
                        </div>
                    </div>
                    <div class="row  same network ">
                        <div class="col-md-2 name">
                            网络制式
                        </div>
                        <div class="col-md-10">
                            <div class="col-md-4 netnet">
                                ${$arr.q.network}
                            </div>
                        </div>
                    </div>
                    <div class="row  same has ">
                        <div class="col-md-2 name">
                            已选择商品
                        </div>
                        <div class="col-md-10">
                            <div class="hasShop">
                                1台
                            </div>
                        </div>
                    </div>
                    <div class="row  same num ">
                        <div class="col-md-2 name">
                            数量
                        </div>
                        <div class="col-md-10">
                            <div class=" buy-number">
                                <!-- <button type="button" class="btn btn-reduct">-</button> -->
                                <a href="javascript:void(0);" class="btnn btn-reduct">-</a>
                                <input type="text" name="item[quantity]" min="1" max="5" value="1"
                                    class="action-quantity-input">
                                <a href="javascript:void(0);" class="btnn btn-add">+</a>
                                <!-- <button type="button" class="btn btn-add">+</button> -->
                            </div>
                        </div>
                    </div>
                    <div class="row  buy ">
                        <a href="javascript:;" class="btnn btn-buy ">
                            立即购买
                        </a>
                        <a  href="javascript:;" class="btnn btn-caution ">
                            加入购物车
                        </a>
                        <!-- <a href="javascript:void(0);" class="btn btn-caution btn-xl btn-addcart action-open-dialog hide">
                                    <span><span>到货通知</span></span>
                                </a> -->
                    </div>
                </div>`
        )
        $(document).ready(function () {
            let $sm_btn = $('.btn666')
            let $ul = $('.slider-thumb')
            let $li = $('.slider-thumb  li img')
            let $img = $('.biglook img')

            $li.mouseover(function () {
                let $src = $(this).attr('src')
                $img.attr('src', $src)
            })
            // $sm_btn.css({ 'border': '1px solid red' }),
            $sm_btn.click(
                function () {
                    if ($sm_btn.html() == '<i class="glyphicon glyphicon-menu-left"></i>') {
                        $sm_btn.html('<i class="glyphicon glyphicon-menu-right"></i>')
                        $ul.css({ 'left': "0px" })
                    } else if ($sm_btn.html() == '<i class="glyphicon glyphicon-menu-right"></i>') {
                        $sm_btn.html('<i class="glyphicon glyphicon-menu-left"></i>');
                        $ul.css({ 'left': "-333px" })
                    }
                }
            )

            function Product() {
                //实例属性
                this.cart_btn = document.querySelector('.look  b');

                //加购按钮
                this.buy = document.querySelector('.btn-caution');
                // 数字
                this.num = document.querySelector('b')
                //初始化方法（购物车中的数量

                this.init();
                //添加事件
                this.addEvent();
            }
            Product.prototype = {
                constructor: Product,
                addEvent() {
                    let that = this;
                    that.buy.onclick = function () {
                        alert('请先选择完整商品信息1')
                    }
                    this.cart_btn.parentNode.onclick = function () {
                        location.href = '../../dist/html/index04.html';
                    }
                    // 给每一个颜色框加点击事件 点击之后 图片信息放入一个地方里面 等等调用.
                    let shop_name = '';
                    let shop_src = '';
                    let shop_pic = '';     //价格
                    let shop_net = '';  //网络制式
                    let shop_type = '';   //内存
                    let yes = [1, 1, 1];
                    let shop_num = document.querySelector('.action-quantity-input').value
                    let clas = document.querySelectorAll('.category  .col-md-4')
                    for (let i = 0; i < clas.length; i++) {
                        clas[i].onclick = function () {
                            for (let j = 0; j < this.parentNode.children.length; j++) {
                                this.parentNode.children[j].style.border = '1px solid #cbcbcb'
                            }
                            this.style.border = '1px solid #ca151d'

                            if (this.getAttribute('class') === 'col-md-4  imgimg') {
                                shop_name = this.children[0].getAttribute('alt');
                                shop_src = this.children[0].getAttribute('src');
                                yes[0] = 2;
                            }
                            if (this.getAttribute('class') === 'col-md-4 netnet') {
                                shop_net = this.innerText;
                                yes[1] = 2;
                            }
                            if (this.getAttribute('class') === 'col-md-4 typtyp') {
                                shop_type = this.innerText;
                                yes[2] = 2;
                            }

                            $('.hasShop').text(
                                `${shop_name} ${shop_type}  ${shop_net} ${shop_num}台`
                            )

                            that.buy.onclick = function () {
                                if (yes.indexOf(1) == -1) {
                                    console.log('都选了');
                                    //商品ID
                                    let good_name = $arr.q.name + shop_name + shop_type + shop_net;
                                    //商品缩略图
                                    let good_src = shop_src;
                                    //商品名称
                                    let good_color = shop_name;
                                    //商品价格
                                    let good_price = shop_pic;
                                    // 内存
                                    let good_type = shop_type;
                                    // 网络
                                    let good_net = shop_net;
                                    //判断本地存储中（购物车中）是否购买过当前商品
                                    /*
                                        key : carts
                                        value:
                                        '{
                                            "$arr.q.name" : {
                                                "name" : "shop_name",
                                                "price" : shop_pic,
                                                "src" : "...",
                                                "num" : 3，
                                                "type" : shop_type，
                                                "net" : shop_net，
                                            }
                                        }'
                                    */
                                    //获取本地存储中的数据
                                    let storage = window.localStorage;
                                    let storage_str = storage.getItem('carts') ? storage.getItem('carts') : '';
                                    //转对象
                                    let storage_obj = that.convertStrToObj(storage_str);
                                    //判断当前商品是否存在
                                    if (good_name in storage_obj) {
                                        //如果在，找到当前商品的数量+ 1
                                        storage_obj[good_name].num++;

                                    } else {
                                        // 如果不存在
                                        storage_obj[good_name] = {
                                            "color": good_color,
                                            "price": good_price,
                                            "src": good_src,
                                            "num": 1,
                                            "type": good_type,
                                            "net": good_net
                                        }
                                        //创建storage
                                        // storage.setItem('carts', JSON.stringify(storage_obj));
                                    }
                                    //创建storage
                                    storage.setItem('carts', JSON.stringify(storage_obj));

                                    alert('加入成功')
                                    // 改变购物车按钮中的数量
                                    let num = /(\d+)/.exec(that.cart_btn.innerText)[1];
                                    // alert(num);
                                    that.cart_btn.innerText = `${++num}`;




                                } else {
                                    console.log('没选完');
                                    alert('请先选择完整商品信息2')
                                    console.log(yes);
                                }



                            }
                        }

                    }





                }
                ,
                init() {
                    let that = this;
                    //获取本地存储中的数据
                    let storage = window.localStorage;
                    let storage_str = storage.getItem('carts') ? storage.getItem('carts') : '';
                    //转对象
                    let storage_obj = this.convertStrToObj(storage_str);
                    let sum = 0;
                    //遍历对象
                    for (let key in storage_obj) {
                        sum += storage_obj[key].num;
                    }
                    that.num.innerText = `${sum}`;
                    // console.log(that.num.innerText);
                },
                convertStrToObj(str) {
                    if (!str) {
                        return {};
                    }
                    return JSON.parse(str);
                }
            }

            new Product();



        });

    }
)


