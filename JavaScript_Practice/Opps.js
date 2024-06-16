
// Class
class Avi{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    display(){
        console.log("Id: ",this.id)
        console.log("Name: ",this.name)
    }
}

const x=new Avi(1,"Avishkar")
//x.display()

//Inheritance
class A{
    constructor(Id){
        this.Id=Id
    }   
}

class B extends A{
    constructor(Id,name){
        super(Id)
        this.name=name
    }

    display(){
        
        console.log("Id: ",this.Id)
        console.log("Name: ",this.name)
    }
}

const w=new B(2,"Abhay")
//w.display()

class Bank{
    constructor(name,bal){
        this.name=name;
        this.bal=bal
    }

    display(){
        console.log("Name: ",this.name)
        console.log("Balence: ",this.bal)
    }

    deposit(amt){
        this.bal+=amt
        this.display()
    }

    widraw(amt){

        if(this.bal>=amt){
            this.bal-=amt;
            this.display()
        }
        else{
            console.log("No sufficient balence!!")
        }
      
    }

}
let a=new Bank("Avishkar",7000)
// a.display()
//  a.deposit(2000)
// a.widraw(6000)

class Course{ 
    price(){
        console.log("The course")
    }
}
class Frontend extends Course{
    price(){
        console.log("Price of this course is 20k");
    }
}
class fullstack extends Course{
    price(){
        console.log("price of this course is 50k")
    }
}

let f=new fullstack();
f.price()