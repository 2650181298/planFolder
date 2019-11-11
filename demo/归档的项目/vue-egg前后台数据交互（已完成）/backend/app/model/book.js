module.exports = app => {
    const { STRING, DATE } = app.Sequelize; 

    const Book = app.model.define('book',{
        name:STRING,  //书名
        created_at:DATE, //创建时间
        updated_at:DATE, //修改时间
    })

    return Book;

}