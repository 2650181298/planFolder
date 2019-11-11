'use strict';

const Controller = require('egg').Controller;

class JavaController extends Controller {
    async index() {
        const code = this.ctx.params.code;
        await this.ctx.render(`content/${code}.html`)
    }
}

module.exports = JavaController;