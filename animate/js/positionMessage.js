function positionMessage() {
    var ele = document.getElementById("message");
    ele.style.position = "absolute";
    ele.style.top = "10px";
    ele.style.left = "20px";
    moveElement('message', 200, 200, 10);
}
addLoadEvent(positionMessage);