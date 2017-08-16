# JavaScript-picture-library
## 主题：
    - 产生原因：网页拥有多的图片需要加载，用户不会花费过多的时间去等待。
    - 解决办法：利用JavaScript创建图片库 - 把整个图片库的浏览链接集中安排在图片库主页里，只在用户点击了这个主页的某个链接时才把相应的图片传送给他

## 应用点：
### DOM属性：
- childNodes：用来获取任何一个元素的所有子元素
```javascript
element.childNodes; //语法
```
- nodeType：每一个节点都有`nodeType`属性，值是一个数字。
```
元素节点：`nodeType`属性值是1。
属性节点：`nodeType`属性值是2。
文本节点：`nodeType`属性值是3。
```
- nodeValue：得到（设置）一个节点的值。
```javascript
node.nodeValue; //语法

//举例
desc.childNodes[0].nodeValue;
```
- firstChild
- lastChild