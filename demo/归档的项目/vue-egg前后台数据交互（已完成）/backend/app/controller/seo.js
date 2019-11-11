'use strict';

const Controller = require('egg').Controller;

class SeoController extends Controller {
  async create() {
   try {
    const body = await this.ctx.request.body
    console.log(body)
    const seo = await this.ctx.service.seo.create(body)
    this.ctx.body = {
        code:20000,
        data:seo
    }
   } catch (error) {
       this.ctx.body = {
        code:30000,
        data:error
       }
   }
  }

  async index(){
      try {
        const seo = await this.ctx.service.seo.index
        this.ctx.body = {
            code:20000,
            data:seo
        } 
      } catch (error) {
        this.ctx.body = {
            code:30000,
            data:error
           }
      }
  }

  async update() {
      try {
        const body = await this.ctx.request.body
        const id = await this.ctx.params.id
        body.id = id
        const seo = await this.ctx.service.seo.update(body)
        this.ctx.body = {
            code:20000,
            data:seo
        } 
      } catch (error) {
        this.ctx.body = {
            code:30000,
            data:error
           }
      }
  }

  async destroy(){
      
  }
}

module.exports = SeoController;
