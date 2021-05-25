export default {
    incrment(state){
      state.counter++
    },
    decrment(state){
      state.counter--
    },
    someIncrent(state,count){
      state.counter+=count
    },
    stunObj(state,stu){
      state.studren.push(stu)

    },
    upDataInfo(state){
        
     // state.info['adrren']='纽约'
     Vue.set(state.info,'address','纽约')
     // Vue.delete(state.info,'name')
     
    }
      
   
  }