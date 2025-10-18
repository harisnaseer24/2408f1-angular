// console.log("hi")
// let abv :number = 6;
// console.log(abc);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    //object initialization(object banana)
    function User(un, ps, ag) {
        //properties
        this.username = "";
        this.pass = "";
        this.age = 0;
        this.username = un;
        this.pass = ps;
        this.age = ag;
    }
    //methods or functions
    User.prototype.showDetails = function () {
        console.log("Username : ".concat(this.username, " , Password : ").concat(this.pass, " , Age : ").concat(this.age));
    };
    User.prototype.login = function () {
        console.log("".concat(this.username, " is logged in"));
    };
    User.prototype.logout = function () {
        console.log("".concat(this.username, " is logged out"));
    };
    return User;
}());
var user1 = new User("haris", "abc123", 76);
// console.log(user1.username)
// console.log(user1.pass)
// console.log(user1.age)
user1.login();
user1.showDetails();
user1.logout();
var user2 = new User("shakoor", "abc345", 26);
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
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(un, ps, ag, em) {
        var _this = _super.call(this, un, ps, ag) || this; // parent class constructor
        _this.role = "admin";
        _this.email = "";
        _this.email = em;
        return _this;
    }
    Admin.prototype.addProduct = function () {
        console.log("Product added by ".concat(this.username));
    };
    Admin.prototype.deleteProduct = function () {
        console.log("Product deleted by ".concat(this.username));
    };
    Admin.prototype.editProduct = function () {
        console.log("Product edited by ".concat(this.username));
    };
    return Admin;
}(User));
var myAdmin = new Admin("tony", "tony123", 44, "tonystark@gmail.com");
myAdmin.login();
myAdmin.addProduct();
// add(5,6); 
// add(1,2,3);
//login(user)
//login(admin)
