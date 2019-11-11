import Vue from 'vue'
import Router from 'vue-router'
import index from './views/Index.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },

        {
            path: '/index',
            name: 'index',
            component: index,
            // children: [{
            //     path: '/createdocs',
            //     name: 'CreateDocs',
            //     component: CreateDocs,
            // }]
        },

    ]
})

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem("token");
    // console.log(token)
    if (token || to.path === "/") {
        next();
    } else {
        next({
            path: "/"
        });
    }
})

export default router