# web-font-enhanced
chromium浏览器的拓展，优化文字显示效果，方便阅读

由于Windows的渲染实在是太拉了（穷），当用户在低分辨率屏幕上使用浏览器阅读文档或者浏览网页的时候网站的文字很虚，看久了眼睛很累，所以有了这个拓展，其实原理就是给文字增加text-shadow；粗暴一点就直接给body增加text-shadow样式就行了，但是这样会把样式应用到页面所有文字，不太美观，所以此项目会针对一些网站进行优化，不断地新增新的网站匹配规则...

下面是效果：

![效果图](https://raw.githubusercontent.com/uncledwyane/imageBed/master/img/20220815174917.png)