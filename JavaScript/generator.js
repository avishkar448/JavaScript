function* example(){
    yield 1;
    yield 2;
    yield 3;
}

const generator=example()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())


function* idgenerator(){ 
    let id=1;
    while(id < 3){ 
        yield id++;
    }
}

const genId=idgenerator()

console.log(genId.next())
console.log(genId.next())
console.log(genId.next())
console.log(genId.next())

function TimeX(){ 
    console.log("My Name is :")
    setTimeout(()=>{ 
        console.log("I am Web Devloper")
    },1000)
    console.log("Avishkar")
    setImmediate(()=>{
        console.log("Hello Javascript")
    })
}
TimeX()

