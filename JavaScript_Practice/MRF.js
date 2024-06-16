// let a=[52,78,98,32,54,100]
// txt=""

// for(i of a){
//     txt+=i+"\n"
// }
// console.log(txt)

// for(i in a){
//     txt+=a[i]+"\n"
// }
// console.log(txt)

// a.forEach((element)=>{
//     console.log(element)
// })

// Map
// let x=[10,20,30,40,50,60]
// console.log("Map: ")
// const p=x.map((element)=>{
//     return element*2
// })
// console.log(p)

// // Reduce
// console.log("Reduce: ")
// let y=[1,2,3,4,5,6,7]

// const q=y.reduce((e1,e2)=>{
//     return e1+=e2
// })
// console.log(q)

// //Filter
// console.log("Filter: ")
// let z=[2,3,78,33,23,90,54,34]

// const r=z.filter((element)=>{
//     if(element%2==0)
//         return element
// })
// console.log(r)

// let a=3
// const x=new Promise((res,rej)=>{ 
//     if(a<10)
//     return res()
//     else
//     return rej()
// })

// x.then(()=>{
//     console.log("The number is less than 10")
// })
// .catch(()=>{
//     console.log("The number is greter than 10")
// })

// Map filter reduce
// console.log("Map: ")
// let x=[10,20,30,40,50,60]
// const m=x.map((element)=>{ 
//     return element*2
// })
// console.log(m)

// console.log("Filter: ")
// const f=x.filter((element)=>{ 
//     if(element >30){ 
//         return element
//     }
// })
// console.log(f)

// console.log("Reduce: ")
// const r=x.reduce((element1,element2)=>{ 
//     return element1+=element2 ;
// })
// console.log(r)


const x={ 
    Name:"Avishkar",
    Age:"21",
    Work:"NO",
    course:"MSC Computer Science"
}

console.log(Object.keys(x).length)