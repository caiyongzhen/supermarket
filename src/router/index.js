import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// const Home=()=>import('../views/home/Home.vue')
import Home from '../views/home/Home.vue'
const Category=()=>import('../views/category/Category.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Profil=()=>import('../views/profil/Profil.vue')




const routes=[
   {
     path:'',
     redirect:'/home' 
   },
   {
     path:'/home',
     component:Home  
   },
   
   {
    path:'/category',
    component:Category 
  },
  
  {
    path:'/cart',
    component:Cart 
  },
  
  {
    path:'/profil',
    component:Profil 
  }
] 


const router=new VueRouter({
  routes,
  mode:'history'



})


export default router