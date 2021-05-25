<template>
    <div>
      <h2>首页</h2>
      <div>{{$store.state.counter}}</div>
      <button @click="addClick">+</button>
      <button @click="dicrent">-</button>
      <p>{{$store.getters.douleMath}}</p>
      <ul>
          <li>{{$store.getters.bigchildAge}}</li>
          <li>{{$store.getters.bigchildAge.length}}</li>
          <li>{{$store.getters.howMoreLength}}</li>
          <li>{{$store.getters. moreAgeStue(20)}}</li>
          <li>{{$store.state.info}}</li>
      </ul>
    </div>
</template>

<script>
import {request} from '@/network/request.js'
export default{
 name:'Home',
 data(){
     return {

     }
 },
 methods:{
    addClick(){
       this.$store.commit('incrment')
    },
    dicrent(){
        this.$store.commit('decrment')
    }

 }
 

 







}

// request({
//   baseConfig:{

//   },
//   success:function(res){
//       console.log(res)
//   },
//   failure:function(err){
//       console.log(err)
//   }

 



// })


request({
    url:'/home/multidata'
}).then(res=>{
    console.log(res)
})

</script>
<style>

</style>