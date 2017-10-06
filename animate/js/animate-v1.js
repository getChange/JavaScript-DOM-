function moveElement(eleId, final_x, final_y, interval) {
    var ele = document.getElementById(eleId);
    if (ele.movement) {
        clearTimeout(ele.movement);
    };
    //安全检测 防止left,top未设置值
    if (!ele.style.left) {
        ele.style.left = "0px";
    };
    if (!ele.style.top) {
        ele.style.top = "0px";
    };
    var x_position = parseInt(ele.style.left);
    var y_position = parseInt(ele.style.top);
    var dist = 0;
    if (x_position == final_x && y_position == final_y) {
        return true;
    };
    if (x_position < final_x) {
        dist = Math.ceil((final_x - x_position) / 10);
        x_position = x_position + dist;
    } else if (x_position > final_x) {
        dist = Math.ceil((x_position - final_x) / 10);
        x_position = x_position - dist;
    };
    if (y_position < final_y) {
        dist = Math.ceil((final_y - y_position) / 10);
        y_position = y_position + dist;
    } else if (y_position > final_y) {
        dist = Math.ceil((y_position - final_y) / 10);
        y_position = y_position - dist;
    };
    ele.style.left = x_position + "px";
    ele.style.top = y_position + "px";
    //为了书写更加的简介
    var moveTag = "moveElement('" + eleId + "'," + final_x + "," + final_y + ", " + interval + ")";
    //变量作用域的问题
    //js中允许为元素创建属性
    //element.property = value;
    ele.movement = setTimeout(moveTag, interval);
}