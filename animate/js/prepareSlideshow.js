function prepareSlideshow() {
    var list = document.getElementById("linkslist");
    var links = list.getElementsByTagName("a");
    var preview = document.getElementById("preview");
    //初始化图片样式
    preview.style.position = "absolute";
    //注册onmousemove事件
    // for (var i = 0; i < links.length; i++) {
    //     links[i].onmousemove = function () {
    //         moveElement("preview", -100 * i, 0, 10);
    //     }
    // }
    links[0].onmousemove = function () {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmousemove = function () {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmousemove = function () {
        moveElement("preview", -300, 0, 10);
    }
}

addLoadEvent(prepareSlideshow);