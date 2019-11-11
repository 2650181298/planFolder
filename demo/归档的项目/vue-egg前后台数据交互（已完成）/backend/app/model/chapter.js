module.exports = app => {
    const { STRING } = app.Sequelize; 

    const Chapter = app.model.define('chapter',{
        name:STRING,  //章
    })
    Chapter.associate = function() {  //所属与那本书，指向书籍的主键
        app.model.Chapter.belongsTo(app.model.Book,{
            foreignKey: 'book_id',
            as:'book'
        })
    }
    return Chapter;

}