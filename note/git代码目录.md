###下面是git的命令小全  
===========================  
####以后不全的会接续补充  
  
  
  
  
* 将文件夹变成一个仓库    
>git init    
  
* 查看文件夹状态（红色在编辑区）（绿色在暂存区）    
> git status    
  
* 将所有文件放到暂存区    
> git add .    
  
* 将文件放到分支并标明备注    
> git commit -m "备注"    
    
* 输入账号密码  
> git remote add origin https://github.com/2650181298/planFolder.git  
  
* 提交  
> git push -u origin master  
  
* 把github上的文件重新拉下来  
> git pull origin master  
  
* 查看目录下的文件  
> dir  
  
* 删除磁盘上的image文件  
> git rm -r --cached image  
  
* url地址可以下载地址上的东西此时两者保持同步  
> git clone https://,,,,,  
    
* GitHud 名字  
> git config --global user.name ""  
    
* 邮箱  
> git config --global user.email ""  
    
* 在命令行或终端中使用下面的命令可以设置git自己的名字和电子邮件。    
这是因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。  