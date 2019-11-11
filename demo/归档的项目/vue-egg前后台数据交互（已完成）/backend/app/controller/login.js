'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async create() {
        var md5 = require('md5-node');
        let username = this.ctx.request.body.username;
        let password = md5(this.ctx.request.body.password);
        const register = await this.app.model.User.findOne({
            where:{
                name:username
            }
        })
        if (username == register.dataValues.name && password == register.dataValues.pass) {
            const token = this.app.jwt.sign({
                name: username
            }, this.app.config.jwt.secret);
            this.ctx.body = {
                code:200,
                token: token
            };
        } else {
            this.ctx.body = {
                code:500
            };
        }
    }
}

module.exports = LoginController;