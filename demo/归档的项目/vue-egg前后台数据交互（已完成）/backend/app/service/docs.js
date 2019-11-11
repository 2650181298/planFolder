'use strict';

const Service = require('egg').Service;

class DocsService extends Service {
    //添加
    async create(body) {
        try {
            const chapter = {
                html_content: body.html,
                md_content: body.md,
                festival_id: body.festival_id
            }
            await this.app.model.Docs.create(chapter);
            const docsList = await this.app.model.Docs.findAll();
            return docsList
        } catch (error) {
            console.log(error);
            return "失败";
        }
    }

    //删除
async delete() {
  try {
      let id = this.ctx.params.id
      const docs = await this.app.model.Docs.findOne({
          where: {
              id: id
          }
      })
      const docsList = await this.app.model.Docs.findAll();
      docs.destroy()
      return docsList
  } catch (error) {
      console.log(error);
      return "失败";
  }
}

//联查html
async get(id) {
  try {
      const docsList = await this.app.model.Docs.findAll(
          {
              where:{
                festival_id:id
              }
          }
      );

      const List = await this.app.model.Festival.findAll({
        where: {
            id: id
        }
    });
    const content = docsList[0]
        const fest = List[0]
        const result = {
          festName:'',
          htmlContent:'',
          chapterID:''
      }
    result.festName = fest.dataValues.name
    result.htmlContent = content.dataValues.html_content,
    result.chapterID = fest.dataValues.chapter_id
    return result;
  } catch (error) {
      console.log(error);
      return "失败";
  }
}

//查看
async show() {
    try {
        const docsList = await this.app.model.Docs.findAll();
        console.log(docsList)
        return docsList
    } catch (error) {
        console.log(error);
        return "失败";
    }
  }


//联查md
async md(id) {
    try {
        const docsList = await this.app.model.Docs.findAll(
            {
                where:{
                  festival_id:id
                }
            }
        );
        console.log(docsList)
        return docsList
    } catch (error) {
        console.log(error);
        return "失败";
    }
  }

//修改
async put(body) {
  try {
      const row = {
        html_content: body.puthtml,
        md_content:body.putmd,
        festival_id: body.festival_id
      },
          options = {
              where: {
                  id: body.festival_id
              }
          }
      await this.app.model.Docs.update(row, options);
      const Docslist = await this.app.model.Docs.findAll();
      return Docslist
  } catch (error) {
      console.log(error);
      return "失败";
  }
}
}

module.exports = DocsService;
