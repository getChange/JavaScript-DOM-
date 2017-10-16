function displayCitations() {
    //检查用到的函数方法是否可行
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    //找到所有的blockquote标签
    var quotes = document.getElementsByTagName("blockquote");
    //遍历集合
    for (var i = 0, len = quotes.length; i < len; i++) {
        //找到cite属性
        if (!quotes[i].getAttribute("cite")) {
            continue;
        }
        var qoutes_url = quotes[i].getAttribute('cite');
        /** 
         * 寻找blockqoute的最后一个元素
         * 然而答案并不是 qoutes[i].lastChild
         * 因为这之中还包含至一个<br/>标签
         * 所以要像以下方法去获取最后一个元素
         */
        var qoutesElements = quotes[i].getElementsByTagName("*"); //获取qoutes标签内的所有标签
        if (qoutesElements.length < 1) {
            continue;
        }
        //拿到最后一个元素
        var lastEle = qoutesElements[qoutesElements.length - 1];
        /**
         * 创建链接
         */
        var qoute_link = document.createElement("a");
        //创建一个`source`的文本节点
        var link_text = document.createTextNode("source");
        qoute_link.appendChild(link_text);
        qoute_link.setAttribute("href", qoutes_url);
        /**
         * 插入链接
         */
        var super_script = document.createElement("sup");
        super_script.appendChild(qoute_link);
        lastEle.appendChild(super_script);
    }
}

addLoadEvent(displayCitations);