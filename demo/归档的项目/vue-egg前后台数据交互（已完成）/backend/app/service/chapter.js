'use strict';

const Service = require('egg').Service;

class ChapterService extends Service {
    //添加
    async create(chaptername) {
        try {
        const chapter = {
            name: chaptername.name,
            book_id: chaptername.id
        }
        await this.app.model.Chapter.create(chapter);
        const ChapterList = await this.app.model.Chapter.findAll({
            include:[{
                model: this.app.model.Book,
                as: 'book'
            }]
        });
        return ChapterList
        } catch (error) {
            console.log(error);
            return "失败";
        }
    }
    
    //删除
    async delete(id) {
        try {
            const chapter = await this.app.model.Chapter.findOne({
                where: {
                    id: id
                }
            })
            const festival = await this.app.model.Festival.findAll({
                include:[{
                    model:this.app.model.Chapter,
                    as:"chapter"
                }],where:{
                    chapter_id:id
                }
            })
            const chapterList = await this.app.model.Chapter.findAll();
            if(festival[0]){
                const tips = "章中有节不可删除"
                return tips
            }else{
                chapter.destroy()
                return chapterList
            }
        } catch (error) {
            console.log(error);
            return "失败";
        }
    
    }

    //查找
    async get() {
        try {
            const ChapterList = await this.app.model.Chapter.findAll({
                include: [{  
                    model: this.app.model.Book,
                    as: 'book'
                }]
            });
            return ChapterList
        } catch (error) {
            console.log(error);
            return "失败";
        }
    }


    //联查
    async show(id) {
        try {
            const list = [];
            const chapterList = await this.app.model.Chapter.findAll({
                where:{
                    book_id:id
                }
            });
            for(let i = 0;i<chapterList.length;i++){
                const chapter = chapterList[i].dataValues;
                const chapterId = chapter.id;
                const festivalList = await this.app.model.Festival.findAll({
                    where:{
                        chapter_id:chapterId
                    }
                });
                chapter.festiveList = festivalList;
                list.push(chapter);   
            }
            console.log(list);
            return list
           
        } catch (error) {
            console.log(error);
            return "失败";
        }
    }

    //联查
    async show1(id) {
        try {
            const ChapterList = await this.app.model.Chapter.findAll({
                where:{
                    book_id:id
                }
            });
            return ChapterList
        } catch (error) {
            console.log(error);
            return "1234";
        }
    }


    //修改
    async put(chaptername) {
        try {
            let row = {
                name: chaptername.name,
                book_id: chaptername.book_id
            },
                options = {
                    where: {
                        id: chaptername.id
                    }
                }
            await this.app.model.Chapter.update(row, options);
            const chapterlist = await this.app.model.Chapter.findAll({
                include: [{  //联查书的数据
                    model: this.app.model.Book,
                    as: 'book'
                }]
            });
            return chapterlist
        } catch (error) {
            console.log(error);
            return "失败";

        }
    }
}

module.exports = ChapterService;
