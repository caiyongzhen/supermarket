<template>
    <div>
      <h2>首页</h2>
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
