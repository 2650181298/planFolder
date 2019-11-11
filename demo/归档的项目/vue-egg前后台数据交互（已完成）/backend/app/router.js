'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.login.create);//登录
  
  //网站前端展示效果
  router.get('/', controller.home.index);//前端展示页面
  router.get('/content/:id', controller.content.index);//前端展示页面
  router.get('/content/:id/:festival', controller.content.getDetail);//前端展示页面
  router.get('/contact', controller.contact.index);//前端展示页面
  
  router.resources('book', '/book', app.middleware.checktoken(), controller.book)//书籍的增删改查
  router.resources('chapter','/chapter',app.middleware.checktoken(),controller.chapter)//章的增删改查
  router.resources('festival', '/festival', app.middleware.checktoken(), controller.festival)//节的增删改查
  router.resources('union','/union',app.middleware.checktoken(),controller.union)//节联查章
  router.resources('docs', '/docs', app.middleware.checktoken(), controller.docs)//内容的增删改查  
  router.resources('uploadimg', '/uploadimg', app.middleware.checktoken(), controller.img)//添加图片
  router.resources('deleteimg', '/deleteimg', app.middleware.checktoken(), controller.deleteimg)//删除图片  
  // router.post('/create',controller.user.create)//添加用户
  router.get('/index',controller.home.admin)//后台管理页面
  router.post('/seo',app.middleware.checktoken(),controller.seo.create)
  router.get('/seo',app.middleware.checktoken(),controller.seo.index)
};
