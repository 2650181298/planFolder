module.exports = app => {
    const { TEXT } = app.Sequelize; 

    const Docs = app.model.define('docs',{
       
        md_content:TEXT,  //md格式内容
        html_content:TEXT,//html格式内容
       
    })

    Docs.associate = function() {  //创建外键，指向文章章节的主键
        app.model.Docs.belongsTo(app.model.Festival,{
            foreignKey: 'festival_id',
            as:'festival'
        })
    }

    return Docs;

}