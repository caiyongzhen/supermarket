export default {
    // aupDataInfo(context,playload){
    //   setTimeout(()=>{
    //     context.commit('upDataInfo')
    //     console.log(playload.message)
    //     playload.success()
    //   },2000)
    // }
    aunDataInfo(context,playload){
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
              context.commit('upDataInfo')
              resolve('1111')
              console.log(playload)
            },2000)
        })





    }
   }