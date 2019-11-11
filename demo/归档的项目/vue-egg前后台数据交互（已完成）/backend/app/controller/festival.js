'use strict';

const Controller = require('egg').Controller;

class FestivalController extends Controller {
  async create() {
        try {
        const body = this.ctx.request.body
        const createfestival = await this.ctx.service.festival.create(body);
         this.ctx.body = {
             code: 20000,
             data: createfestival
         }
        } catch (error) {
         this.ctx.body = {
             code: 30000,
             data: "失败"
         }
        }
  }
  async index(){
    try {
        const show = await this.ctx.service.festival.get();
        this.ctx.body = {
            code: 20000,
            data: show
        }
    } catch (error) {
        this.ctx.body = {
            code: 30000,
            data: "失败"
        }
    }
  }


  async show() {
    try {
        const id = this.ctx.params.id
        const getchapter = await this.ctx.service.festival.show(id);
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

  async update() {
    try {
        const body = this.ctx.request.body
        const putfestival = await this.ctx.service.festival.put(body);
        this.ctx.body = {
            code: 20000,
            data: putfestival
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
        const id = this.ctx.params.id
        const deletefestival = await this.ctx.service.festival.delete(id);
        this.ctx.body = {
            code: 20000,
            data: deletefestival
        }
    } catch (error) {
        this.ctx.body = {
            code: 30000,
            data: "失败"
        }
    }

}
}

module.exports = FestivalController;
