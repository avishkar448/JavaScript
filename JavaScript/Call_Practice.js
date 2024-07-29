
// const xyz={ 
//     x:"Avishkar",
//     y:"Gawali",
//     z:function(city,dist){ 
//         return `My name is ${this.x} ${this.y} I live in ${city},${dist}`
//     }
// }

// const a={ 
//     x:"Abhay",
//     y:"Gawali"
// }

// const result=xyz.z.call(a)
// // console.log(result)
// const result2=xyz.z.apply(a,["Pune","Maharashtra"])
// console.log(result2)

function* generatorExample(){ 
    yield "Avishkar"
    yield 1
    yield 2
}

const x=generatorExample()

console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())

