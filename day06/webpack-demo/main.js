
import Vue from 'vue'
import VueRouter from 'vue-router'
import  login from './src/login.vue'
import app from './src/app.vue'
import res from './src/resaa.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {path:'/login',component:login},
        {path:'/res',component:res}
    ]
})
 let vm = new Vue({
     el:"#app",
     data:{
         msg:"xxx"
     },
     router,
     render: c=>c(app)
 })
