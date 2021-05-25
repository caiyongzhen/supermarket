import axios from 'axios'


// export function request(config){
//     const instance1=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
 
//     instance1(config.baseConfig)
//     .then(res=>{
//       config.success(res)
//     })
//     .catch(err=>{
//      config.failure(err)
//     })
// }


export function request(config){
//    return new Promise((resolve,reject)=>{
//         const instance1=axios.create({
//               baseURL:'http://123.207.32.32:8000',
//               timeout:5000
//           })
         
        // instance1(config)
        // .then(res=>{
        //    resolve(res)
        // })
        // .catch(err=>{
        //    reject(err)
        // })
        // instance1.interceptors.request.use(config=>{
        //     console.log(config)
        //     return config
            
        // },err=>{
        //     console.log(err)
        // })
        
        // instance1.interceptors.response.use(res=>{
        //     return res.data
        // },err=>{
        
        // })
        // instance1(config).then(res=>{
        //     resolve(res)
        // })
      
       
        // })
    const instance1=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    }) 

    instance1.interceptors.request.use(config=>{
            return config
    },err=>{

    })

    instance1.interceptors.response.use(res=>{
         return res.data
    },err=>{
        console.log(err)
    })







    return instance1(config)
    
}



