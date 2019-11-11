/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1569042874002_5024';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.jwt = {
        secret: "123456"
    };
    config.sequelize = {
        dialect: 'mysql',
        database: 'xiaozhou',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'wang',
    }


    config.security = {
        csrf: {
            enable: false, // 前后端分离，post请求不方便携带_csrf
            ignoreJSON: true
        },
        domainWhiteList: ['http://www.baidu.com', 'http://localhost:8080', "http://192.168.1.178:8080", "http://127.0.0.1:8080"], //配置白名单
    };

    config.cors = {
        // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
        credentials: true, // 允许跨域请求携带cookies
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    // config.security = {
    //   csrf: {
    //     enable: false,
    //   }, 
    //   domainWhiteList: [
    //     'http://127.0.0.1:3000'
    //   ],
    // };
    config.view = {
        defaultViewEngine: 'nunjucks'
    }
    return {
        ...config,
        ...userConfig,
    };
};