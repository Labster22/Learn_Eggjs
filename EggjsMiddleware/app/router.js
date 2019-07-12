'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const date = app.middleware.date({bbb:"bbb"})
  router.get('/aa', date, controller.home.index);
  router.get('/', controller.lottery.query);
  router.get('/ssqquery', controller.lottery.ssq_query);
  
}; 
