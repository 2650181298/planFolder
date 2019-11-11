'use strict';

const Controller = require('egg').Controller;



// let listname = await this.app.model.Clazz.findAll();//学生姓名
// let listlest = await this.app.model.student.findAll();//班级名称

class StudentsController extends Controller {
    
    //查班级
    async index() {
        let listlest = await this.app.model.Clazz.findAll();//查班级的数据库
        // let listname = await this.app.model.Students.findAll();//查学生的数据库
        this.ctx.body = listlest;//查班级的数据
        // this.ctx.body = listlest;//查班级的数据
        // this.ctx.body = listname;//查学生的数据
        // let cazz = lest;
        // console.log(cazz);
    };



    //查学生
    async indexs() {
        // let listlest = await this.app.model.Clazz.findAll();//查班级的数据库
        let listname = await this.app.model.Students.findAll();//查学生的数据库
        // let lest = [listname,listlest];
        this.ctx.body = listname;//查班级的数据
        // this.ctx.body = listname;//查学生的数据
        // let cazz = lest;
        // console.log(cazz);
    };
    
    //联查学生列表
    async cha(){
        const studentList = await this.app.model.Students.findAll({
            include:[{  //联查班级的数据  （相当于左联）
                model:this.app.model.Clazz, 
                as:'clazz'    //model里的对应别名
            }]
        });
        this.ctx.body = studentList;
    };




    //向数据库添加班级数据
    async create(){
        //获取前端传过来的参数
        let name = this.ctx.request.body.name;
        // console.log(name);
        //将前端的数据赋值到clazz
        const clazz = {
            name:name
        }
        //将clazz的数据添加到Clazz
        await this.app.model.Clazz.create(clazz);
        // let listlest = await this.app.model.Clazz.findAll();
        this.ctx.body = listlest;
    };




    //修改班级
    async putss(){
    const { ctx } = this
    console.log(ctx)
    let id = this.ctx.params.id
    console.log(id)
    let putclazz = this.ctx.request.body.putclazz
    console.log(6666666666666)
    console.log(putclazz)
    console.log(6666666666666)
    const clazzList = await this.app.modex.Clazz.findAll()
    console.log(clazzList)
    let row = {
        name:putclazz
    },
    options = {
        where:{
            id:id
        }
    }
    await this.app.model.Clazz.update( row,options);
    }
    









    // //删除班级
    async deslist(){
        const id = this.ctx.params.id;
        // const id = this.ctx.request.body.student_id;
        const student = await this.app.model.Clazz.findOne({
            where:{
                id:id
            }
        });
        student.destroy(id);
        // let id = this.ctx.params.id;
        // list.splice(id,1); //删除数据
        // this.ctx.body = list;
    };

    // 删除学生
    async desstudents(){
        const id = this.ctx.params.id;
        // const id = this.ctx.request.body.student_id;
        const studentss = await this.app.model.Students.findOne({
            where:{
                id:id
            }
        });
        studentss.destroy(id);
        // let id = this.ctx.params.id;
        // list.splice(id,1); //删除数据
        // this.ctx.body = list;
    }
    };





module.exports = StudentsController;