# JavaScript-picture-library
## 主题：
    - 产生原因：网页拥有多的图片需要加载，用户不会花费过多的时间去等待。
    - 解决办法：利用JavaScript创建图片库 - 把整个图片库的浏览链接集中安排在图片库主页里，只在用户点击了这个主页的某个链接时才把相应的图片传送给他
## 4.1 标记    
- 项目主体:未经完善的项目
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Image Gallery</title>
</head>
<body>
    <h1>Snapshots</h1>
    <ul>
        <li>
            <a href="./images/big17005.jpg" title="rabbit">兔宝宝提莫</a>
        </li>
        <li>
            <a href="./images/big17007.jpg" title="panda">熊猫提莫</a>
        </li>
        <li>
            <a href="./images/big17008.jpg" title="special">欧米茄小队 幽灵特工</a>
        </li>
        <li>
            <a href="./images/big17009.jpg" title="lord">大魔王 提莫</a>
        </li>
    </ul>

</body>
</html>
```
## 4.2 JavaScript
- 思想：更改展位图片的`src`属性.