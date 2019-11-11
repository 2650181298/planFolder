'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  async index() {
    let bookList = await this.ctx.service.book.findById();
    await this.ctx.render("index.html", {
        bookList : bookList
    })
}
  async admin(){
    await this.ctx.render("admin.html")
  }
}

module.exports = HomeController;
