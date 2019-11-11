'use strict';

const Controller = require('egg').Controller;

class ContactController extends Controller {
  async index(){
    let bookList = await this.ctx.service.book.findById();
    await this.ctx.render("contact.html",{bookList})
  }
}

module.exports = ContactController;
