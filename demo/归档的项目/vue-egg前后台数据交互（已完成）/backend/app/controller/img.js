'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')
const pump = require('mz-modules/pump')

class ImgController extends Controller {


    async create() {
        const stream = await this.ctx.getFileStream();
        const filename = new Date().getTime() + path.extname(stream.filename).toLowerCase();
        const target = path.join(this.config.baseDir, 'app/public/uploads/images', filename);
        const writeStream = fs.createWriteStream(target);
        await pump(stream, writeStream);
        this.ctx.body = { 
            name: filename,
            file: `/public/uploads/images/${filename}`  //正式地址
            // file: `http://127.0.0.1:7001/public/uploads/images/${filename}`  //临时服务器地址
        }
        console.log(this.ctx.body)
      }
}

module.exports = ImgController;
