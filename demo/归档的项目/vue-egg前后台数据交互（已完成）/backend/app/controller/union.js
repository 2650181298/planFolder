'use strict';

const Controller = require('egg').Controller;

class UnionController extends Controller {
    async show() {
        try {
            const id = this.ctx.params.id
            const getchapter = await this.ctx.service.union.show(id);
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
}

module.exports = UnionController;
