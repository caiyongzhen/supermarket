import Vue from 'vue'
import Vuex from 'vuex'


import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './module/moduleA'

Vue.use(Vuex)




const state={
  counter:1000,
  studren:[
    {id:1,name:'熊大',age:12},
    {id:2,name:'熊二',age:15},
    {id:3,name:'吉吉国王',age:20},
    {id:4,name:'光头强',age:21},
    {id:5,name:'小雪',age:10},
  ],
  info:{
    name:'lilei',
    age:18
       } 
   }






const store=new Vuex.Store({
     state,
     mutations,
     actions,
     getters,
     modules:{
       a:moduleA
     }


})


export default store