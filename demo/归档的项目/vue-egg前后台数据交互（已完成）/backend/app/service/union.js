'use strict';

const Service = require('egg').Service;

class UnionService extends Service {
    //联查
    async show(id) {
        try {
            const ChapterList = await this.app.model.Chapter.findAll({
                where:{
                    book_id:id
                }
            });
            return ChapterList
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = UnionService;
