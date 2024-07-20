//setTime out 
// function x(){ 
//     setTimeout(()=>{ 
//         console.log("I am king")
//     },2000)
// }

// x()

//setInterval
// function y(){
//     let count=0
//     setInterval(()=>{ 
//         count ++
//         console.log(count)
        
//     },1000)
    
// }

// y()

//clear interval
let count=0
const increment=setInterval(()=>{ 
    count ++;
    console.log(count)
    if(count ===5){ 
        clearInterval(increment)
    }
},1000)

increment
