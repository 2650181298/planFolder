'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const gzip = app.middleware.gzip({ threshold: 1024 });
  // app.router.get('/', gzip, app.controller.handler);
  //密码页
  router.get('/',controller.home.index);
  router.get('/hell',controller.home.hell);
  router.get('/students',app.middleware.checklogin(),controller.students.index);
  router.get('/insertstudent',app.middleware.checklogin(),controller.students.insertStudent);
  router.post('/students',controller.students.create);
  router.post('/deletestudent',controller.students.destroy);
  //学生列表
  router.get('/clazz', app.middleware.checklogin(),controller.clazz.index);
  router.get('/insertclazz',app.middleware.checklogin(),controller.clazz.insertClazz);
  router.post('/clazz', controller.clazz.create);
  router.post('/deleteclazz', controller.clazz.destroy);

  //注销
  router.post('/constern',controller.home.constern);

  router.post('/user', controller.home.user);
  router.get('/register', controller.home.registers);
  // app.router.post('/register', gzip, app.controller.handler);
  router.post('/register', controller.home.register);

  //vue前端获取到的数据
  router.get('/messagelest', controller.message.index);//查班级的数据
  router.get('/messagelests', controller.message.indexs);//查学生的数据
  router.post('/messagelests', controller.message.create);//向班级添加
  router.delete('/messagelests/:id', controller.message.deslist);//删除班级
  router.delete('/messagestudents/:id', controller.message.desstudents);//删除学生
  router.get('/messagest', controller.message.cha);//联查学生的数据
  router.put('/messagelests/:id', controller.message.putss);//修改班级的数据
};
