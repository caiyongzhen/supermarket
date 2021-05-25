<template>
    <div>
      <h2>分类</h2>
      <div>{{$store.state.a.name}}</div>
      <button @click="upChangName">按钮</button>
      <ul>
          <li>{{$store.state.a.name}}</li>
          <li>{{$store.getters.fullName}}</li>
          <li>{{$store.getters.fullName2}}</li>
          <li>{{$store.getters.fullName3}}</li>
      </ul>
      <button @click="upChangName">更改提交</button>
    </div>
</template>

<script>
export default{
    name:'Category',
    data(){
        return {

        }
    },
    methods:{
     upChangName(){
        this.$store.commit('upDataName','saolilei')

     },
     upChangName(){
         this.$store.dispatch('upDataNan')
     }





    }








}

</script>
<style>

</style>