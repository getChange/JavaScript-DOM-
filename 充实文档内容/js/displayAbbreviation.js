function displayAbbreviations() {
    var abbreviations = document.getElementsByTagName("abbr"); //拿到所有的abbr元素

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
        var key = items.lastChild.nodeValue;
        //将definition和key放到数组里
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for (key in defs) { //对于defs关联数组里的每个键,把它的值赋给变量key
        var definition = defs[key];
        //创建dt元素
        var dtitle = document.createElement("dt");
        //key创建一个文本节点
        var dtitle_text = document.createTextNode(key);
        //文本添加到dt元素
        dtitle.appendChild(dtitle_text);
        //创建一个dd元素
        var ddesc = document.createElement("dd");
        //definition创建一个文本节点
        var ddesc_text = document.createTextNode(definition);
        //文本内容添加到dd元素
        ddesc.appendChild(ddesc_text);
        //将文本添加到dl中
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //插入定义列表
    var header = document.createElement("h2");
    var header_content = document.createTextNode("Abbreviations");
    header.appendChild(header_content);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);