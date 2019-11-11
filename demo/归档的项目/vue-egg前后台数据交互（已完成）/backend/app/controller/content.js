'use strict';

const Controller = require('egg').Controller;

class ContentController extends Controller {
    async index() {
        let bookList = await this.ctx.service.book.findById();
        const bookID = this.ctx.params.id; //电子书的ID
        const festID = this.ctx.params.festival //小节的ID
        const chapterList = await this.ctx.service.chapter.show(bookID) //通过1过去第一本电子书的节
        const content = await this.ctx.service.docs.get(festID); //通过节的id获取文档内容
        const detail = {
            htmlContent:content.htmlContent,
            bookID: bookID,
            chapterID: content.chapterID,
            festID
        }
        await this.ctx.render(`content.html`, {
            chapterList: chapterList,
            detail,
            title: content.festName,
            bookList
        })
    }

    async getDetail(){
        let bookList = await this.ctx.service.book.findById();
        const bookID = this.ctx.params.id; //电子书的ID
        const festID = this.ctx.params.festival //小节的ID
        const chapterList = await this.ctx.service.chapter.show(bookID) //通过1过去第一本电子书的节
        const content = await this.ctx.service.docs.get(festID); //通过节的id获取文档内容
        const detail = {
            htmlContent: content.htmlContent,
            bookID: bookID,
            chapterID: content.chapterID,
            festID
        }
        console.log("~~~controller.content.js~~~~");
        console.log(content)
        await this.ctx.render(`detail.html`, {
            chapterList: chapterList,
            detail,
            title: content.festName,
            bookList
        })
    }
}

module.exports = ContentController;
