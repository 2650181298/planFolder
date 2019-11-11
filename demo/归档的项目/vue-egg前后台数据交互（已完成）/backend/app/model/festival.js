module.exports = app => {
    const { STRING } = app.Sequelize; 

    const Festival = app.model.define('festival',{
        name:STRING,      //章节名称
    })
    Festival.associate = function() {  //所属与那本书，指向书籍的主键
        app.model.Festival.belongsTo(app.model.Chapter,{
            foreignKey: 'chapter_id',
            as:'chapter'
        })
    }

    return Festival;
}