'use strict';

const Controller = require('egg').Controller;

class DeleteimgController extends Controller {
  //删除图片
  async create(){
    try {
         let url = this.ctx.request.body.url;
         console.log(url);
         fs.unlink(url, () => {
           this.ctx.body = "删除成功"
         });
         this.ctx.body = "123"
    } catch (error) {
      this.ctx.body="删除失败"
    }
  }
}

module.exports = DeleteimgController;

