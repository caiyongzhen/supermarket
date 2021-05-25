export default {
    state:{
      name:'codelilei'
    },
    mutations:{
      upDataName(state,playload){
         state.name=playload
      }
    },
    getters:{
      fullName(state){
        return state.name+222
      },
      fullName2(state,getters){
        return getters.fullName+333
      },
      fullName3(state,getters,rootStore){
        return getters.fullName2+rootStore.counter
      }
  
    },
    actions:{
      upDataNan(context){
        setTimeout(()=>{
          context.commit('upDataName','lilisao')
        },2000)
      }
    }
  }