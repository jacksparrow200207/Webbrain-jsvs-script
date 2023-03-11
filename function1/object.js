// let obj = { name: "John", surname: "Smith" };

// obj.name = "Pete";
// delete obj.name;

// console.log(Object.values(obj));

// let obj = {
//   john: 100,// 0+100
//   ann: 160, // 100 +160
//   pate: 130,// 260 +130 =390
// };
// let res = 0;
// for (i in obj) {
//   res += obj[i];
// console.log(res);

///====================================


let menu = {

  width: 200,
  height: 300,
  title: "My menu"
};

for (let key in menu ) {
  if ( typeof menu[key] === 'number' ) {
    return menu[key] *= 2;  } else {
    return 0
  }
}
console.log(menu);




//console.log(res);

// obj.forEach((obj)=>{
//   areas.push(obj.john.value*2)
// });

// console.log(res);
