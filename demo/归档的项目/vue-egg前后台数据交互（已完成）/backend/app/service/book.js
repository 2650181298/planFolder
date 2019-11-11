'use strict';

const Service = require('egg').Service;

class BookService extends Service {
    //添加书籍
    async createbook(bookname) {
        try {
            const book={
                name:bookname
            }
            await this.app.model.Book.create(book);
            return true;
        } catch (error) {
            console.log(error);
            return "失败";
        }    
  }

  //查找书籍
  async findById(){
    try {
    const result = await this.app.model.Book.findAll();
    return result
    
    } catch (error) {
         console.log(error);
        return "失败";
    }
  }

  //修改书籍
async update(body) {
    try {
        const row = {
            name: body.putbookname,
        },
        options = {
            where: {
                id: body.putbookid
            }
        }
        await this.app.model.Book.update(row, options);
        const result = await this.app.model.Book.findAll({
            where:{
                id:body.putbookid
            }
        });
        
        return result
    } catch (error) {
        console.log(error);
        return "失败";

    }
}

//删除书籍
async destroy(id) {
    try {
        const book = await this.app.model.Book.findOne({
            where: {
                id: id
            }
        });
        const chapter = await this.app.model.Chapter.findAll({
            include:[{
                model:this.app.model.Book,
                as:"book"
            }],
            where:{
                book_id:id
            }
        })
        const result = await this.app.model.Book.findAll({
            where:{
                id:id
            }
        });
        if(chapter[0]){
            const tips="书中有内容不可删除"
            return tips
        }else {
            book.destroy();
            return result
        }
    } catch (error) {
        console.log(error);
        return "失败"
    }

}
}


module.exports = BookService;
