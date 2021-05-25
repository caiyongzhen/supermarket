<template>
    <div>
        <h2>购物车</h2>
        <div>{{$store.state.counter}}</div>
        <p>{{$store.getters.bigchildAge}}</p>
        <button @click="addCounter(10)">+10</button>
        <button @click="addCounter(5)">+5</button>
        <button @click="commnd">按键</button>
        <h2>{{$store.state.info}}</h2>
        <button @click="upDataInfo">更新</button>
    </div>
</template>

<script>
export default{
 name:'Cart',
 data(){
     return {

     }
 },
 methods:{
   addCounter(count){
    return this.$store.commit('someIncrent',count)
   },
   commnd(){
      let stu={id:9,name:'葫芦娃',age:23}
      this.$store.commit('stunObj',stu)
   },
   upDataInfo(){
    //    this.$store.commit('upDataInfo')
        // this.$store.dispatch('aupDataInfo',{
        //     message:'我是携带的信息',
        //     success:()=>{
        //      console.log('回调完成了')
        //     }
        // })
        this.$store
        .dispatch('aunDataInfo','playload传参')
        .then(res=>{
           console.log(res)
        })
   }



 }




 

}





</script>
<style>

</style>