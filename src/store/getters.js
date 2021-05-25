export default {
    douleMath(state){
     return state.counter*state.counter
    },
    bigchildAge(state){
      return state.studren.filter(s=>{
        return s.age>20
      })
    },
    howMoreLength(state,getters){
       return getters.bigchildAge.length
    },
    moreAgeStue(state){
       // return function(age){
       //     return state.studren.filter(s=>{
       //      return s.age>age
       //     })
       // }
         // return age=>state.studren.filter(s=>s.age>age)
         return age=>{
            return state.studren.filter(s=>s.age>age)
         }
  }
 }