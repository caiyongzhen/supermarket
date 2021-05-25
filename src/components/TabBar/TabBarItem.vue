<template>
      <div class="tabbar-item" @click="tabBarClick">
        <div v-if="!isActive"><slot name="img-icon"></slot></div>
        <div v-else><slot name="img-active"></slot></div>
        <div :style="isColor"><slot name="img-txt"></slot></div>
      </div>
</template>

<script>
export default {
name:'TabBarItem',
props:{
  path:String,
  activeColor:{
     type:String,
     default:'red'
  }
},
data(){
    return {
        
    }
},
computed:{
    isActive(){
        return this.$route.path.indexOf(this.path)!==-1
    },
    isColor(){
      return this.isActive? {color:this.activeColor}:{}
    }

},
methods:{
    tabBarClick(){
      this.$router.replace(this.path)
    }
}


}



</script>
<style>

.tabbar-item{
     flex: 1;
     text-align: center;
     height: 49px;
     box-shadow: 0 -2px 1px rgba(100,100,100,.1);
     font-size: 12px;
  }

.tabbar-item img{
    width: 20px;
    height: 20px;
    margin-top: 5px;
    vertical-align: middle;
    margin-bottom: 2px;
}








</style>