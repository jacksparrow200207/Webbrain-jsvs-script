// let obj = { name: "John", surname: "Smith" };

// obj.name = "Pete";
// delete obj.name;

// console.log(Object.values(obj));

let obj = {
  john: 100,
  ann: 160,
  pate: 130,
};
let res = 0;
for (i in obj) {
  res += obj[i];
}
console.log(res);

obj.forEach((obj)=>{
  areas.push(obj.john.value*2)
});
console.log(res);
