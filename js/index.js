$(function(){
    lbt();

    //轮播图
    function lbt() {
        var imgs = $(".photo > img");
        var port = $(".indicator > span");
        var currentIndex = 0; //表示当前图片的下标
        var nextIndex = 0;
        var clear;
        function play() {
            setTimeout(function step() {
                imgs[currentIndex % imgs.length].style.opacity =
                    imgs[currentIndex % imgs.length].style.opacity - 0.05;
                imgs[nextIndex % imgs.length].style.opacity =
                    +imgs[nextIndex % imgs.length].style.opacity + 0.05;



                if (imgs[currentIndex % imgs.length].style.opacity <= 0) {
                    currentIndex = nextIndex;
                    return;
                }
                setTimeout(step, 20)
            }, 0)
        }

        function autoPlay() {
            clear = setInterval(function () {
                nextIndex = currentIndex + 1;
                pointingsChangeColor();
                play();
            }, 5000)
        }

        autoPlay();

        //指示器颜色随着图片切换
        function pointingsChangeColor() {
            port[currentIndex % imgs.length].style.backgroundColor = "#eff8f7";
            port[nextIndex % imgs.length].style.backgroundColor = "#D9EFEC";
        }

        function portOnclick() {
            for (let i = 0; i < port.length; i++) {
                port[i].onclick = function () {
                    //放上去变红色
                    port[i].style.backgroundColor = "#D9EFEC";
                    port[currentIndex % imgs.length].style.backgroundColor = "#eff8f7";
                    //切换到指定的图片
                    nextIndex = i;
                    play();
                };
            }
        }
        portOnclick();
    }

});