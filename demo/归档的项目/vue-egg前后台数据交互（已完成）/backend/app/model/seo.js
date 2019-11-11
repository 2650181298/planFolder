module.exports = app => {
    const { STRING } = app.Sequelize; 
    
    const Seo = app.model.define('seo',{
        keywords:STRING,
        description:STRING
    })
    return Seo
}