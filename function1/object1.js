// let obj = {
//   firstName: 'Adulahad',
//   lastName: 'Asrorov',
//   fullName() {
//       return obj.firstName + ' ' + obj.lastName;
//   }
// }

// let user = obj;
// obj = null;

// console.log(user.fullName());

// let user ={
//     name:"Webbrain",
//     sayHi:function(){
//         console.log();
//     }
// }
//  user.sayHi();
// function sayHi(){
//     console.log("Hi");
// }

let user ={
         name:"Webbrain",
         sayHi(){
            console.log(Hi,${this.name});
         }
}        
user.sayHi();

function getName(name){
    this.name=name;
    this.sayHi=function(){
        console.log("hi",this,name);
        return "hey"
    }
}
new getName("eshmat"),sayHi();
new getName("toshmat"),sayHi();