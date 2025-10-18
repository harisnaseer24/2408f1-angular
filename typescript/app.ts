// console.log("hi")
// let abv :number = 6;
// console.log(abc);


// // type inference
// let bdf="hello";
// console.log(bdf)
//  bdf=5;  //error


// function add(a:number,b:number):void{
// console.log(a+b)
// }


// add(5,6);

// transpilation TS --> JS  tsc app.ts


// const students: string[]=["Jarvis","Tony","Vision","Steve"]
// console.log(students)
// students.push("Banner")
// console.log(students.length)

// index --> location of element in array

// console.log(students[6])

// students[-3]="Natasha"
// students[8]="Loki"
// console.log(students)
// console.log(students[-3])
// sequene 0 1 2 3 4 ... 8
// console.log(students)

// for (let i = 0; i < students.length; i++) {
//   console.log(`student no ${i+1} : ${students[i]}`)
    
// }
// students.forEach((std:string,index:number)=>{
//   console.log(`student no ${index+1} : ${std}`)

// })


//objects
// let employee: {
//     name: string;
//     age: number;
//     education: string[];
// }={
//     name:"Haris",
//     age:34,
//     education:["BSCS","MCS"]
// }




//array of objects

// let employees: {
//     name: string;
//     age: number;
//     education: string[];
// }[]=[


//     {
//     name:"Haris",
//     age:34,
//     education:["BSCS","MCS"]
// },
// {
//     name:"Javed Khan",
//     age:34,
//     education:["BSCS","MCS"]
// }
// ,
// {
//     name:"Farooq Jaleel",
//     age:24,
//     education:["BSCS"]
// }
// ,{
//     name:"Shaqoor Bhai",
//     age:44,
//     education:["PHD"]
// }

// ]


// employees.forEach((emp,index:number)=>{
//   console.log(`Details of employee no ${index+1} :`)
//   console.log(`Name : ${emp.name} :`)
//   console.log(`Age : ${emp.age} :`)
//   console.log(`Education : ${emp.education[0]} :`)

// })

// create an array of animals having following properties (name, eat:[], isPet: true/false);
// add atleast 5 animals in the Array
// print all details with proper sequence using loop
// also print can be adopted as pet if isPet is true other wise not adoptable as pet

// let myvalue1:string = "haris"; 
// myvalue1=8;


// let myvalue:any = "haris"; 
// myvalue=8;


// OOP (Object Oriented Programming)
// paradigm
// parent / base / super class
class User{
  //properties
   username:string =""
   pass:string =""
   age:number = 0
   //object initialization(object banana)
   constructor(un:string,ps:string,ag:number){
    this.username=un
    this.pass=ps
    this.age=ag
   }
//methods or functions

   showDetails(){
    console.log(`Username : ${this.username} , Password : ${this.pass} , Age : ${this.age}`)
   }

   login()
   {
    console.log(`${this.username} is logged in`)
   }
    logout()
   {
    console.log(`${this.username} is logged out`)
   }
}


let user1 = new User("haris","abc123",76);
// console.log(user1.username)
// console.log(user1.pass)
// console.log(user1.age)

user1.login();
user1.showDetails();
user1.logout();

let user2 = new User("shakoor","abc345",26);
// console.log(user2.username)
// console.log(user2.pass)
// console.log(user2.age)

user2.login();
user2.logout();

// ABSTRACTION  (DATA HIDING)
// ENCAPSULATION (DATA BUNDLING)
// INHERITANCE (DATA SHARING / REUSABILITY)
// POLYMORPHISM (SAME NAME DIFFERENT BEHAVIOR)
// INTERFACE  (STRUCTURE SHARING)


//child class/sub class / derived class

class Admin extends User{
  role:string="admin"
  email:string=""
constructor(un:string,ps:string,ag:number,em:string){
   super(un,ps,ag) // parent class constructor
   this.email=em;
   }

 addProduct()
   {
    console.log(`Product added by ${this.username}`)
   }
    deleteProduct()
   {
      console.log(`Product deleted by ${this.username}`)
   }
editProduct()
   {
    console.log(`Product edited by ${this.username}`)
   }

}

let myAdmin = new Admin("tony", "tony123", 44,"tonystark@gmail.com")

myAdmin.login();
myAdmin.addProduct();



// add(5,6); 
// add(1,2,3);

//login(user)
//login(admin)



