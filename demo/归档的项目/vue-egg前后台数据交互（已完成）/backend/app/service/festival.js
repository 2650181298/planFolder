'use strict';

const Service = require('egg').Service;

class FestivalService extends Service {

    //添加
    async create(body) {
        try {
            const festival = {
                name: body.name,
                chapter_id: body.chapter_id
            }
        const festival_model = await this.app.model.Festival.create(festival);
        const docs = {
            html_content:"",
            md_content:"",
            festival_id: festival_model.dataValues.id
          }
        await this.app.model.Docs.create(docs);
        const list = await this.app.model.Festival.findAll();
        return list
    } catch (error) {
        console.log(error);
        return "失败"
    }
}

//删除
    async delete(id) {
        try {
            const docs = await this.app.model.Festival.findOne({
                where: {
                    id: id
                }
            })
            docs.destroy()

            const festival = await this.app.model.Docs.findOne({
                where: {
                    id: id
                }
            })
            const festivalList = await this.app.model.Festival.findAll();
            festival.destroy()
            return festivalList
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    //查找
    async get() {
        try {
            const list = await this.app.model.Festival.findAll();
            return list
        } catch (error) {
            console.log(error);
            return "失败";
        }
    }

    //联查
    async show(id) {
        try {
            const List = await this.app.model.Festival.findAll({
                where: {
                    chapter_id: id
                }
            });
            return List
        } catch (error) {
            console.log(error);
            return "失败";
        }
    }

    //修改
    async put(body) {
        try {
            const row = {
                    name: body.name,
                    chapter_id: body.chapter_id
                },
                options = {
                    where: {
                        id: body.id
                    }
                }
            await this.app.model.Festival.update(row, options);
            const festivallist = await this.app.model.Festival.findAll();
            return festivallist
        } catch (error) {
            console.log(error);
            return "失败";
        }
    }
}

module.exports = FestivalService;