# JavaScript-DOM编程艺术
## 图片库实例
### 主题：
    - 产生原因：网页拥有多的图片需要加载，用户不会花费过多的时间去等待。
    - 解决办法：利用JavaScript创建图片库 - 把整个图片库的浏览链接集中安排在图片库主页里，只在用户点击了这个主页的某个链接时才把相应的图片传送给他

### 应用点：
#### DOM属性：
- childNodes：用来获取任何一个元素的所有子元素；精确查找元素内的全体子元素；返回的是一个数组；
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
- firstChild：第一个子元素；
- lastChild：最后一个子元素；
#### 最佳实践
- 平稳退化
- 分离JavaScript
- 向后兼容
- 性能考虑
#### 图片库的改进
- 平稳退化:是否去除JavaScript操作也可以继续进行；
- 分离JavaScript：.js后缀文件与.html分文件；
- 向后兼容：是否可以做到完整的兼容低版本的浏览器；
- 性能考虑：图片的加载，代码的加载...
### 动态创建标记
#### 传统方法：`document.write` & `innerHTML`
- `document.write()`:方便快捷的把字符串插入到文档里；缺点是违背了“行为应该与表现分离”。
- `innerHTML`属性可以用来读、写某给定元素里的HTML内容。
    - 优势：当需要把一大段HTML内容插入页面；支持读取写入；
    - 缺点：无法却分“出入一段HTML内容”和“替换一段HTML内容”
#### DOM方法
- createElement方法
```javascript
document.createElement(nodeName);

//创建一个p元素
document.createElement("p");
```    

- appendChild方法
```javascript

```
- 在已有元素后面插入一个元素
```javascript
function insertAfter(newElement，targetElement) { //首先引入两个参数
    var parent = targetElement.parentNode; //将目标元素的parentNode属性保存在parent内
    if (parent.lastChild == targetElement) { //判断目标元素是不是parent最后一个元素
        parent.appendChild(newElement);//true 直接添加到最后一个
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);//false 新元素插入目标元素和目标元素的下一个兄弟元素
    }
}

/*
* parentNode属性
* lastChild属性
* appendChild属性
* insertBefore属性
* nextSibling属性
*/
```