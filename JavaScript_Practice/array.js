// let x=[21,334,54,67,87]
// console.log(x)

// let y=new Array(21,4,67,86,43,"Avishkar")
// console.log(y)

// let z= Array.of(1,"Avishkar",{xx:"value"})
// console.log(z)

//call
// const x={
//     Name:"Virat",
//     age:36,
//     zz:function(state,country){
//         return this.Name+"\n"+
//                +this.age+"\n"+
//                state +"\n"+country
//     }
// }

// const a={
//     Name:"Rohit",
//     age:82
// }

// const p=["Gujrat","India"]
// console.log(x.zz.apply(a,p))
// //console.log(x.zz.call(a,"Maharashtra","India"))


//bind
// a={
//     emp:function(post,salary){
//         return this.Name+"\n"+
//                 +this.age+"\n"+
//                 post +"\n"+salary
//     }
// }

// b={
//     Name:"Avishkar",
//     age:21
// }

// let office=a.emp.bind(b,"Web devloper",25000)
// console.log(office())


// Hosted

// a=10
// b=20
// c=a+b
// console.log(c)

// var a
// var b
// var c 

// function foo(x){
//     function inner(y){
//         return x+y
//     }
//     return inner(5)
// }
// console.log(foo(8))

// let a="ABCDEFGH"
// let z=Array.from(a) //create a new array instance from given array
// console.log(z)

//bind
const x={ 
    name:"Avishkar",
    age:52,
    avi:function(){ 
        return this.name+ '\n' +this.age
    }
}

const y={ 
    name:"Abhay",
    age:49
}
let z=x.avi.bind(y)
console.log(z())


