const x=[1,2,3,4,5,6]
//  x.forEach((e)=>{
//     console.log(e)    
// })

// x.map((e)=>{ 
//    return console.log(e*2)
// })

// const a=x.filter((e)=>{ 
//     if(e%3==0){ 
//         return e
//     }
// })
// console.log(a)

const b=x.reduce((a,c)=>{
    return a+=c
})
console.log(b)
