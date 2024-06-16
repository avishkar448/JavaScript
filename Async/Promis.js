// let x=10;

// let p=new Promise((res,rej)=>{
//     if(x>6){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// p.then(function(){
//     console.log("The value is greater than six")
// })
// .catch(function(){
//     console.log("The value is less")
// })

// async function x(){
// let a=await fetch('http://127.0.0.1:5500/Javascript/Async/a.json')
// let res=await a.json();
// console.log(res)

// let c=document.querySelector(".container")

// c.innerHTML+=`<h4>Name: ${res.Name}</h4>
// <h4>Age: ${res.Age} </h4>
// <h4>Course: ${res.Course} </h4>
// <h4>Marks: ${res.Marks}</h4>`


// }

// x()

let main= document.querySelector('.main')
async function Make(){
    let x=await fetch('http://127.0.0.1:5500/Javascript/Async/a.json')
    let data=await x.json()
    console.log(data.Name)

    let newDiv=document.createElement('div')
    newDiv.classList.add('container')
    newDiv.innerHTML=`
    <h4>${data.Name}</h4>
    <h4>${data.Age}</h4>
    <h4>${data.Course}</h4>
    <h4>${data.Marks}</h4>
    <h4>${data.Percentage}</h4>
    `
    main.appendChild(newDiv)

}

Make()