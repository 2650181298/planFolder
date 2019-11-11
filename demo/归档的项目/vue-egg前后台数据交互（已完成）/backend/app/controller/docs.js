'use strict';

const Controller = require('egg').Controller;

class DocsController extends Controller {
   //添加内容
  async create() {
    try {
        const body = this.ctx.request.body
        const createdocs = await this.ctx.service.docs.create(body);
        this.ctx.body = {
            code: 20000,
            data: createdocs
        }
       } catch (error) {
        this.ctx.body = {
            code: 30000,
            data: "失败"
        }
       }
  }

//查看内容
async show() {
    try {
        const id = this.ctx.params.id
        const getdocs = await this.ctx.service.docs.md(id);
        var content = getdocs[0]
        this.ctx.body = {
            code: 20000,
            data: content.dataValues.md_content
        }
    } catch (error) {
        this.ctx.body = {
            code: 30000,
            data: "失败"
        }
    }
}

async update() {
    try {
        const body = this.ctx.request.body
        const id = this.ctx.params.id
        body.festival_id=id
        const putdocs = await this.ctx.service.docs.put(body);
        this.ctx.body = {
            code: 20000,
            data: putdocs
        }
    } catch (error) {
        this.ctx.body = {
            code: 30000,
            data: "失败"
        }
    }
}

async destroy() {
    try {
        const body = this.ctx.request.body
        const deldocsr = await this.ctx.service.docs.delete(body);
        this.ctx.body = {
            code: 20000,
            data: deldocsr
        }
    } catch (error) {
        this.ctx.body = {
            code: 30000,
            data: "失败"
        }
    }
}
}

module.exports = DocsController;
