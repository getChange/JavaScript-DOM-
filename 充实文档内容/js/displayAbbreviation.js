function displayAbbreviations() {
    var abbreviations = document.getElementsByTagName("attr"); //拿到所有的abbr元素
    if (abbreviations.length < 1) { //判断文档中的缩略语元素是否存在
        return false;
    }
    var defs = new Array(); //创建一个新数组来存储数据
    for (var i = 0, len = abbreviations.length; i < len; i++) {
        //增加代码的易读性
        var items = abbreviations[i];
        //拿到abbr的title
        var definition = items.getAttribute("title");
        //拿到abbr的nodevalue
        var key = abbreviations[i].lastChild.nodeValue;
        //将definition和key放到数组里
        defs[key] = definition;
    }
}