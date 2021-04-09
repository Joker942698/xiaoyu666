function ShopList() {
    this.init()
}
ShopList.prototype = {
    constructor: ShopList,
    init() {
        $("#page1").load("../../dist/html/pubhead.html");
        $("#page2").load("../../dist/html/pubfooter.html");
        window.onload = function () {
            let list = document.querySelector('.list');
            // console.log(big, list);
            list.onmouseover = function () {
                list.style.display = 'block';
            }
        }
    }

}


new ShopList();
function convertStrToObj(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}
window.onload = function () {
    let num = document.querySelector('b')
    let storage = window.localStorage;
    let storage_str = storage.getItem('carts') ? storage.getItem('carts') : '';
    //转对象
    let storage_obj = this.convertStrToObj(storage_str);
    let sum = 0;
    //遍历对象
    for (let key in storage_obj) {
        sum += storage_obj[key].num;
    }
    num.innerText = `${sum}`;

    // console.log(num);
    num.parentNode.onclick = function () {
        location.href = '../dist/html/index04.html';
    }
}
