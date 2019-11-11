'use strict';

const Controller = require('egg').Controller;

class ChapterController extends Controller {
    //添加章
    async create() {
       try {
        const chaptername = this.ctx.request.body
        const createchapter = await this.ctx.service.chapter.create(chaptername);
        this.ctx.body = {
            code: 20000,
            data: createchapter
        }
       } catch (error) {
        this.ctx.body = {
            code: 30000,
            data: "失败"
        }
       }
    }
    //查看章
    async index() {
        try {
            const getchapter = await this.ctx.service.chapter.get();
            this.ctx.body = {
                code: 20000,
                data: getchapter
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }
        
    }
    //查看章返回对应的书的章节
    async show() {
        try {
            const id = this.ctx.params.id
            const getchapter = await this.ctx.service.chapter.show(id);
            this.ctx.body = {
                code: 20000,
                data: getchapter
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }
    }

    //修改章
    async update() {
        try {
            const chaptername = this.ctx.request.body
            const putchapter = await this.ctx.service.chapter.put(chaptername);
            this.ctx.body = {
                code: 20000,
                data: putchapter
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }
    
    }
    //删除章
    async destroy() {
        try {
            const id = this.ctx.params.id
            const chapter =  await this.ctx.service.chapter.delete(id);
            this.ctx.body = {
                code: 20000,
                data: chapter
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }
    
    }
}

module.exports = ChapterController;
