'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {
    //添加书籍
    async create() {
        const bookname = this.ctx.request.body.name;
        if (await this.ctx.service.book.createbook(bookname)) {
            const book_content = await this.ctx.service.book.findById();
            this.ctx.body = {
                code: 20000,
                data: book_content
            }
        } else {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }
    }
    //查看书籍
    async index() {
        try {
            const book_list = await this.ctx.service.book.findById();
            this.ctx.body = {
                code: 20000,
                data: book_list
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }
    }
    //修改书籍
    async update() {
        try {
            const body = this.ctx.request.body;
            const id = this.ctx.params.id;
            body.putbookid = id
            await this.ctx.service.book.update(body);
            const book_update = await this.ctx.service.book.update
            this.ctx.body = {
                code: 20000,
                data: book_update
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }
    } 
    //删除
    async destroy() {
        try {
            const id = this.ctx.params.id;
            const book_delete = await this.ctx.service.book.destroy(id);
            this.ctx.body = {
                code: 20000,
                data: book_delete
            }
        } catch (error) {
            this.ctx.body = {

                code: 30000,
                data: "失败"
            }
        }
    } 
}

module.exports = BookController;