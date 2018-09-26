# SliderCheck
angular 实现的拼图滑动验证功能

# 可能会导致崩溃,奔溃原因为图片链接找不到

h3 查找到这行代码,替换返回值即可

```
getRandomImg() {
    return 'https://picsum.photos/300/200/?image=' + this.getRandomNumberByRange(0, 400);
  }
```


![image](https://raw.githubusercontent.com/cirelir/SliderCheck/master/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-09-26%20%E4%B8%8B%E5%8D%885.59.04.png)
