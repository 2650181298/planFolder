'use strict';

const Service = require('egg').Service;
var md5 = require('md5-node');

class UserService extends Service {
  //账号添加
  async user(body) {    
    const create = {
      name:body.name,
      pass:md5(body.pass),
  }
  await this.app.model.User.create(create);
  }
}

module.exports = UserService;
