'use strict';

const Service = require('egg').Service;

class SeoService extends Service {
  async create(body) {
    try {
        const create = {
            keywords:body.keywords,
            description:body.description,
        }
        await this.app.model.Seo.create(create);
        const seo = await this.app.model.Seo.findAll();
        console.log(seo)
        return seo
    } catch (error) {
        console.log(error);
        return "失败";
        }
  }

  async index(){
    try {
    const seo = await this.app.model.Seo.findAll();
        // console.log("scopedSlots")
        console.log(seo)
        
    return seo
    } catch (error) {
        console.log(error);
        return "失败";
    }
  }

  async update(body){
      try {
          const row={
            keywords:body.keywords,
            description:body.description
          },
          options = {
            where: {
                id: body.id
            }
        }
        await this.app.model.Seo.update(row,options)
      } catch (error) {
          
      }
  }
}

module.exports = SeoService;
