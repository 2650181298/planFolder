'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async create() {
        try {
        const body = this.ctx.request.body;
        console.log("body")
        console.log(body)
        const create = await this.ctx.service.user.user(body);
        this.ctx.body = {
            code: 20000,
            data: create

        }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                data: "失败"
            }
        }
    }
}

module.exports = UserController;
