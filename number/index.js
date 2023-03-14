// let title=42;

// console.log(title.toString(2));
// console.log(title.toString());

// let name={
//     title:5,
//     wrap:"2 ta bir,1 ta nol qatnashgan"
// }
// console.log(name.title.toString(2));
// console.log(name.wrap);



     //==============================  

        

      

      let obj={
         a:Math.min(2, 3),
         b:Math.max(2, 3)
     }
     const {a, b}=obj;
     console.log(Math.abs(a - b));

             
        

        // //Math ning truncs vs floor vs ceil, parseInt lar bn farqini tushintirib bering

         // console.log(Math.trunc(3.2));//=>(3)nima bolishidan qatiy nazar butun qismini ovoladi kasr qismini tashlab yuboradi sonni musbat manfiysiga qaramaydi 
         // console.log(Math.floor(-3.23));//=>(-4)sonning kasr qismini tashlab yuboradi {manfiy sonda 1 ga kamaytirib yuboradi, musbat sonda 1 ga oshmaydi}
         // console.log(Math.ceil(-3.2));//=>(-3)raqamning kasr qismi bolsa tashlab yuboradi va birga oshirib beradi
         // console.log(parseInt(3.2));//=>sonning kasr qismi bolsa tashlab yuborib butun qismini ozini olib beradi

      //   let obj={
      //       a:Math.min(1, 50),
      //       b:Math.max(1, 50)
      //   }
      //   console.log(Math.random()*50);