let users = [
{id: 1, year:1998, engine: 1.2, name: "Tiko"  },
{id: 2, year:2005, engine: 1.5, name: "Matiz"  },
{id: 3, year:2010, engine: 1.6, name: "Gentra"  },
{id: 4, year:2011, engine: 2, name: "Malibu"  },
{id: 5, year:2012, engine: 1.2, name: "Equinox"  },
{id: 6, year:2000, engine: 4, name: "Tracker"  }
];

// const getdata = (data) => {
//   let get = data.filter((value) => value.year > 2010);
//   return get
// }

// console.log(func(users));


// ======================================================


// const func = (eng)=> {
// let sart = eng.sort((a,b)=>b.engine-a.engine)
// return sart
// }


// console.log(func(users));


// ===============================================


// const func = (eng)=> {
//   let sart = eng.sort((a,b)=>b.year-a.year)
//   return sart
//   }
  
  
//   console.log(func(users));

// =================================================


// const func = (eng)=> {
//     let sart = eng.sort((a,b)=>a.name.localeCompare(b.name))
//     return sart
//     }
    
    
//     console.log(func(users));

// ======================================================

// const addstatus = (stat)=> {
//   let str = stat.map ((value)=> {
//     if (value.year < 2000) return{...value, status:"Old"};
//     else return value;
//   });
//   users = str
// }

// addstatus(users)
// console.log(users);


// ==========================================


const addsta = (stat)=> {
  let str = stat.map ((value)=> {
    if (value.year > 2000 && value.year < 2010) return{...value, status:"Old"};
    else return value;
  });
  users = str
}

addsta(users)
console.log(users);