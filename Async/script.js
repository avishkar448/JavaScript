//Promise
// var x = new Promise((res, rej) => {
//   if (true) {
//     return res();
//   } else {
//     return rej();
//   }
// });

// x.then(function () {
//   console.log("resolve it");
// });
// x.catch(function () {
//   console.log("reject it");
// });

// user will ask for a number between 0 to 9 if the number is below 5 resolve if not reject

// var input = prompt("Enter the number");
// x1=Number(input)

// var ans=new Promise((res,rej)=>{
//     if(x1<5){
//        return res()
//     }
//     else{
//       return  rej()
//     }
// })

// ans.then(function(){
//     console.log("Number is below 5 so it resolve")
// })
// ans.catch(function(){
//     console.log("Number is reject because it greater than 5")
// })

// var x=new Date();
// console.log(x.getHours())

async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json
    console.log(data)
    return 200;
}


async function main(){
    console.log("a");
    console.log("b");
    console.log("c");

    let d=await getData();
    console.log(d);

    console.log("e")
    console.log("f")
}

main()
