function displayCitations() {
    //检查用到的函数方法是否可行
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    //找到所有的blockquote标签
    var quotes = document.getElementsByTagName("blockquote");
    //遍历集合
    for (var i = 0, len = quotes.length; i < len; i++) {

    }
}