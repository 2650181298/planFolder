'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home.html')
  }
//查账号
  async user() {  
    var md5=require('md5-node');//引入加密文件MD5（或者说是依赖？）
    const user = this.ctx.request.body;//获取前台数据
    const password = md5(user.password);//加密
    const userlist = await this.app.model.User.findOne(//查到user表并赋值到userlist
      {
        where:{     //附加条件
          name:user.account,//获取用户名
          password:password//获取密码（其实不写也行因为一个用户名对应一个密码）
        }
      }
    );

    if(userlist==null){//中间拦截一下防止出现500的报错
      this.ctx.body="用户名输入错误";
      return
    }else{
      this.ctx.session.user = user;
      this.ctx.redirect("/clazz")
    };

  }

  async registers() {
    await this.ctx.render('register.html')
  }
  async hell() {
   this.ctx.body=""
  }
  async register() {  
    var md5=require('md5-node');
      //获取前端传过来的参数
      const body = this.ctx.request.body;
      //将前端的数据赋值到User
      const User = {
          name:body.account,
          password:md5(body.password),
      }
      //将clazz的数据添加到Clazz
      await this.app.model.User.create(User);
      //重定向添加后跳到页面（添加班级后跳到学生页面）
      this.ctx.redirect("/")

  }

  async constern(){
    delete this.ctx.session.user;  //删除session中的用户，取消用户登录状态
    this.ctx.redirect("/");
  }

}
module.exports = HomeController;
