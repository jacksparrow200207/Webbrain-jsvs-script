// let user = [1, 8, 7, 4, 5, 15, 14, 75, 54, 36, 10, 47]

// let task = "Webbrain Academy";

// const getquantity = () => {
//   res = 0;
//   count = 0;
//   for (i of task) {
//     if (i === i.toUpperCase()) {
//       res += 1;
//     } else return count++;
//   }
// };

// console.log(getquantity());
// console.log(task);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

// let num = [2, 2, 2, 2, 2, 4, 4, 4, 4, 3, 5, 5, 5, 5, 5, 7, 8, 8];

// const getRemoveArrDouble = (arr) => {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]);
//     else array.push(arr[i]);
//   }
//   return array;
// };
// console.log(getRemoveArrDouble(num));
// let array = [1, 2, 3, 4, 5, 8, 13, 15];

const funct = (n) => {
  n%2===0 ? console.log("juft") : "toq"
  
};

console.log(funct(8));

// 2 - Masala:
// Ojbect ichidagi agelar yigindisini toping ?

let obj2 = {
  title: "Webbrain",
  age: 2,
  child: {
    age: 4,
    name: "Webbrain",
    child: {
      age: 23,
    },
  },
};

const getObjAgeTotal = (obj) => {
  let res = 0;

  while (obj) {
    res += obj.age;
    obj = obj.child;
  }

  return res;
};
// console.log(getObjAgeTotal(obj2));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 - Masala:
// Object ichidagi Boolean tipidagi malumotlarni chiqaring keylari bilan birga?

let obj3 = {
  id: 1,
  name: "webbrain",
  offline: true,
  online: true,
  individual: false,
};

const getBoolean = (obj) => {
  let res = {};
  for (key in obj) {
    if (typeof obj[key] === "boolean") res[key] = obj[key];
  }
  return res;
};
// console.log(getBoolean(obj3));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ----------------------- Array Boyicha Masalalar:

// 1 - Masala:
//Array ichidagi doublikat sonlarni chiqarib yuboring? new Setsiz!

let arr1 = [2, 2, 2, 2, 4, 4, 4, 5, 6, 7];

const getDoublicateArr = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) res.push(arr[i]);
  }
  return res;
};
// console.log(getDoublicateArr(arr1));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 - Masala:
// Arraylarni bir-biriga taqqoslang?

let arr2 = [1, 2, 3];
let arr3 = [1, 2, 3];

const getComporasionArr = (arr1, arr2) => {
  let oneArr = arr1.join("");
  let twoArr = arr2.join("");

  return oneArr === twoArr;
};
// console.log(getComporasionArr(arr2, arr3));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 - Masala:
// Array ichidagi ikki honali sonlarni chiqaring ?

let arr4 = [1, 65, 4, 67, 567];

const getTwoRoom = (arr) => {
  let res = [];
  let strArr = arr.join(" ").split(" ");

  for (value of strArr) {
    if (value.length === 2) res.push(+value);
  }
  return res;
};
// console.log(getTwoRoom(arr4));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// -------------------------- Advenced Homeworks:
// [2,3,2,4,5,2,3]
// [2,3,2,1,2,3]
// [2,2,1,2]
// [1,2]
// [1]
// Berilgan Array shu korinishda chiqishi kerak ?

let arr5 = [2, 3, 2, 4, 5, 2, 3];

const arrTwoMax = (arr) => {
  for (value of arr) {
    let sortArr = arr.sort((a, b) => a - b);
    let max = sortArr.pop() - sortArr.pop();

    sortArr.push(max);

    let total = sortArr.filter((value) => value);
    console.log(total);
  }
};
// arrTwoMax(arr5);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~