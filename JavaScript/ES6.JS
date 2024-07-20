// const x=[1,2,3]
// const y=[...x,4,5]
// console.log(y)

////map
let a=[1,2,3,4,5,6,7,8,9]
let x=a.map(i => i*2)
console.log(x)

//filter
let y=a.filter(i => i%2==0)
console.log(y)

//reduce
let z=a.reduce( (b,c) => b+c)
console.log(z)

//rest parameter
const data=(x,y,...num)=>{ 
    console.log("x :",x)
    console.log("y :",y)
    console.log("rest paramemter: ",...num)
}

data(2,3,4,5,6)