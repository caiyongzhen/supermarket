import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url:'http://123.207.32.32:8000/home/data?tpye=sell&page=3'
// }).then(res=>{
//   console.log(res)
// })

// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
// })]).then(axios.spread((res1,res2)=>{
//      console.log(res1)
//      console.log(res2)   

// }))


