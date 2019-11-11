'use strict';

const Controller = require('egg').Controller;

class ClazzController extends Controller {
    //查询班级列表
    async index() {  
        //查到clazz表并赋值到clazzList
        const clazzList = await this.app.model.Clazz.findAll();
        await this.ctx.render('clazz_list', {
            clazzList: clazzList
        })
    }

    //添加班级的页面
    async insertClazz(){  
        await this.ctx.render('create_clazz.html')
    }

    //在数据库中添加班级
    async create() {
        //获取前端传过来的参数
        const body = this.ctx.request.body;
        //将前端的数据赋值到clazz
        const clazz = {
            name:body.name
        }
        //将clazz的数据添加到Clazz
        await this.app.model.Clazz.create(clazz);
        //重定向添加后跳到页面（添加班级后跳到学生页面）
        this.ctx.redirect("/clazz")
    }

    //通过id在数据库中删除班级
    async destroy() {
        //查找数据
        const id = this.ctx.request.body.clazz_id;
        //查找id=id
        const clazz = await this.app.model.Clazz.findOne({
            where: {
                id: id
            }
        });
        //删除数据
        clazz.destroy();
        this.ctx.redirect("/clazz")
    }
}

module.exports = ClazzController;
