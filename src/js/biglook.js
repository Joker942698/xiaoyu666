class magnifyingGlass {
    constructor() {
        // 获取元素  遮罩层  大图  滑块  大盒子
        this.cover = document.getElementById("cover");
        this.big_box = document.getElementById("big");
        this.small_box = document.getElementById("small");
        this.big_img = document.getElementById("big_pic");
        this.float = document.getElementById("docu");
        // 给遮罩层添加滑过事件
        // 滑过时  大盒子出现 滑块出现
        // 计算出鼠标的当前相对坐标值
        // 设置鼠标跟随
        // 鼠标在滑块的中心  那么滑块的left就是鼠标当前坐标值-滑块本身宽度的一半
        this.cover.onmousemove = function (eve) {
            // 划过时大盒子和滑块出现
            this.big_box.style.display = 'block';
            this.float.style.display = 'block';
            // 获取鼠标坐标
            this.e = eve || window.event;
            this.dis_left = this.e.offsetX;
            this.dis_top = this.e.offsetY;
            this.left = this.dis_left - this.float.offsetWidth / 2;
            this.top = this.dis_top - this.float.offsetHeight / 2;
            // 设置边界
            if (this.left <= 0) {
                this.left = 0;
            } else if (this.left >= this.small_box.offsetWidth - this.float.offsetWidth) {
                this.left = this.small_box.offsetWidth - this.float.offsetWidth - 4;
            };
            if (this.top <= 0) {
                this.top = 0;
            } else if (this.top >= this.small_box.offsetHeight - this.float.offsetHeight) {
                this.top = this.small_box.offsetHeight - this.float.offsetHeight - 4;
            };
            this.float.style.left = this.left + 'px';
            this.float.style.top = this.top + 'px';

            // 放大核心
            // 滑块移动的距离 / 大图移动的距离 = 小图的宽度 / 大图的宽度
            // 大图移动的距离 = 滑块移动的距离*大图的宽度/小图的宽度
            this.big_left = -(this.left * this.big_img.offsetWidth / this.cover.offsetWidth)
            this.big_top = -(this.top * this.big_img.offsetHeight / this.cover.offsetHeight)
            this.big_img.style.left = this.big_left + 'px';
            this.big_img.style.top = this.big_top + 'px';
        }.bind(this);
        // 给一个鼠标划出事件， 划出时 滑块 大盒子消失
        this.cover.onmouseout = function () {
            this.float.style.display = 'none';
            this.big_box.style.display = 'none';
        }.bind(this);

    }

}

window.onload = function () {
    new magnifyingGlass();
}
