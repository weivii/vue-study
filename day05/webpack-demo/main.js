import $ from 'jquery'
$(function(){
    $('li:even').css('backgroundColor',"pink")
    $('li:odd').css('bakgroundColor',"orange")
})
// impport 语法支持引入css语法
import './src/css/index.css'
import './src/css/1.less'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'

import  login from './src/login.vue'
 let vm = new Vue({
     el:"#app",
     data:{
         msg:"xxx"
     },
     render:function(createElement){
         return createElement(login)
     }
 })
