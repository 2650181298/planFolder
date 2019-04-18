  ## Js代码笔记篇
  ### Js部分
  
   
  #### 常用部分   
  * 字符串变数字  
  > Number  
    
  * 单调弹框
  > alert("");  
    
  * 确定取消弹框  
  > prompt("");
    
  * 可返回输入的字符串的弹框  
  > cofirm("");  
    
  * 数组的长度  
  > 数组名.length  
    
  * 在数组后添加新值  
  > 数组名.push  
    
  * 改变数组arr的间隔符号再把结果给一个变量  
  > document.write(arr.join(","))
    
    
    
    
    
    
  #### Dom部分  
    
  * 创建一个文本节点  
  > textNode = document . createText Node(" ");  
    
  * 将（节点名1）节点添加到（节点名2）标签中  
  > 节点名2.appendChild(节点名1)  
    
  * 获取元素（）/ 获取多个元素  
  > querySelector("html中的元素Id或者cliss");  
  > querySelectorALL("html中的元素Id或者cliss");  
    
  * 点击事件（剩下事件自己搜） 
  > onclick/click;  
     
  * 创建一个元素节点（比如说一个hello word标签）  
  > var a = document.creatElement("hello word");  
    
  * 覆盖之前文本节点的内容  
  > ().innerHTML=" "  
     
  * 作为一个节点对象返回父节点，没有父节点则返回“无”(null)  
  > parent Node  
    
  * 可从子节点列表中删除某个节点此方法可返回被删除的节点  
  > removeChild()  
  
  * 函数在指定毫秒后单次执行
  > setTimeout(function(){}),1000) :一秒后执行
  
  * 函数在指定毫秒后重复执行
  > setInterval(function(){}),1000) :一秒又一秒
  
  
    
  #### math数学方法
  
  * 获取圆周率
  > var 变量名 = Math.PI;
  
  * 向下取整
  > var 变量名 = Math.floor(要取整的变量名);
  
  * 向上取整
  > var 变量名 = Math.ceil(要取整的变量名);
  
  * 四舍五入
  > var 变量名 = Math.round(要四舍五入的变量名);
  
  * 获取绝对值
  > var 变量名 = Maht.abs(要取绝对值的变量名);
  
  * 获取0~1之间的随机数
  > var 变量名 = Math.random();
  
  * 获取0~()之间的随机数
  > var 变量名 = Math.random()*();
  
  #### Date时间对象
  
  * Date()可返回当天的日期和时间，如果只提取某个时间需要
  > var nDate =newDate() :当天的日期和时间
  > var NDate =nDate.getTime :将时间换成毫秒并输出 
  > var nDate =Date("2016-6-6 0:0:0") :获取一个时间为2016年六月六日零点
  
  #### 正则表达式
  
  * 创建正则表达式
  > var reg = newRegExp()
  
  * 简写
  > var reg = /123/;
  > var unm = "123";
  > console.log(reg.sest(unm)):测试是否匹配匹配输出(true)不匹配输出(false)
  > console.log(reg.exer(unm)):输出匹配的内容
  
  ### 正则表达式常用语句
  
  * 语句
  > [] : 设定匹配的范围(只能匹配一位0~1 A~Z)
  > []+ :指定匹配多位
  > /^$/ : ^表示开头 $表示结尾
  > {} :指定匹配的位数用","隔开{1,3}表示可输入1到三位数的数字
  
  ### Vue
  
  * 用{{}}语法绑定数据(在HTML标签中);
    
  * js中用new Vue()创建一个Vue
    
  * el : "" :选择器
    
  * data : {} :数据(可拉取Html标签中用vue语绑定的数据)
    
  * 将data中的数据绑定到HTML元素属性上
  > v-bind:src = "img_src" :绑定src属性(data里面可以通过输入img_src引用)
     
  * 绑定点击事件
  > v-on:click = "" / @click = "" :(写在HTML元素里面)
  > @click = "点击事件名(输出的参数)" :事件可以传递参数
  
  * 列表显示
  > v-for = "集合中的每个元素,元素的索引值 in (data中的属性(变量即为属性))"
    
  * 替换 / 删除 / 添加
  > splice ( 数组的起始下标 , 替换 / 删除的长度 ,替换的值(删除的话为空) )
  > this.要执行删除/替换/添加的数组.splice() :写法

  * 清楚定时器
  > clearInterval(this.定时器名)


  未经正则允许禁止转载如需转载联系
  电话：18332561057
  qq：2650181298
  微信：wcx18332561057