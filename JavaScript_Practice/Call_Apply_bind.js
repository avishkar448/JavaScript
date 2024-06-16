// // Call
// const x={
//     fullnm:function(){
//         return this.Id +"\n"+this.name
//     }
// };

// let a={
//     Id:1,
//     name:"Avishkar"
// }

// console.log(x.fullnm.call(a))

//apply

// const x = {
//   Name: "Avishkar",
//   Edu: "Msc",

//   cc: function (state, country) {
//     return (
//       this.Name + "\n" + this.Edu + "\n" + state + "\n" + country
//     );
//   },
// };

// const nn = {
//   Name: "Ashok",
//   Edu: "Btech",
// };

// //console.log(x.cc.call(nn,"Maharashtra","India"));
// s=["Maharashtra","India"]
// console.log(x.cc.apply(nn,s));

// Bind
// const a={
//     Name:"Avishkar",
//     Age:"21",
//     xx:function(){
//         return this.Name+"\n"+this.Age
//     }
// }

// const mm={
//     Name:"Abhay",
//     Age:"17"
// }

// let w=a.xx.bind(mm)
// console.log(w())

//Debbuger

