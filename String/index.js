//                   Homework
// 1. check(str1,str2)-function yozilsin.berilgan parametrlar bir biriga mos yoki umuman to'g'ri kelmasligi va
// va qisman to'g'ri ekanligini ifodalovchi natija qaytarsin.
// Ex:str1="webbrain academy",str2-'acsa'
 
// 2. getCount(str)-function yozilsin.function str dagi xarflar sanog'ini chiqarb bersin.
// ex:str="webbrain"{w:1,e:1,b:2,r:1,a:1, i:1,n:1}

// 3. truncate(str,n) - function yozilsin.berilgan stringdan n ta xarf ajratb chiqarb bersin
// ex:str='webbrain academy',n=5
// res:'webbr'

// 4. getCurrency(str) - berilgan pul birligini faqat raqamlarini ajratb chiqaring.
// ex:str='$1200'-1200

// 5. berilgan string ichidan raqam,string vacharacterlarni aloxida sanogi bn chiqaring
// ex:'webbr@<>!n_2022'
// res:{latter:6,char3,numbers:4}

//  6.capitilize(str)-berilgan stringdagi barcha sozlarni faqatbosh xarfini katta xarfga o'zgartiring
// ex:webbrain academy,
// res:Webbrain Academy
// let str1="Webbrain academy"
// let str2="acsa"

// function Check(a, b) {
//   console.log(a.localCompare(b));
//   if (a.localCompare(b)=1) {
//     console.log("mutloq oxshashlik");
//   } else if (a.localCompare(b)=0)
//  {console.log("qisman oxshashlik")} else{console.log("mutlaqo oxshashlik yoq");}
// }

// Check(a, b)

// let str1 = "webbrain academy"
// let str2 = ""
// function check (a,b){
//     if(a.localeCompare(b) > 0){
//         console.log("qisman o'xshash")
//     }else if(a.localeCompare(b) < 0){
//         console.log("teng emas")
//     }else{
//         console.log("bular teng")
//     }
//     console.log(a.localeCompare(b));
// }
// check(str1,str2)


//function to print occurrence of character
// function printans( ans )
// {
//   for( let [ key ,value] of ans)
//   {
//     // if()
//     console.log(`${key}  occurs  ${value} times` );
       
//   }
 
// }
 
// // function count occurrence of character
// function count( str , outp_map )
// {
//   for( let i = 0 ;i < str.length ;i++)
//   {
 
//     let k = outp_map.get(str[i]);
//     outp_map.set(str[i], k+1) ;
         
     
//   }
//   //calling  print function
//   printans(outp_map);
// }
 
// //function create map to count character
// function count_occurs( test , callback )
// {
//   //checking string is valid or not
//   if( test.length === 0 )
//   {
//     console.log(" empty string ");
//     return ;
//   }
//   else
//   {
//     // map for storing count values
//     let ans = new Map();
//     for( let i = 0 ;i < test.length;i++)
//     {
//       ans.set(test[i], 0);
//     }
     
//     callback( test ,ans);
     
//   }
 
// }
 
// // test string
// let test =  "webbrain";
// count_occurs( test ,count);


// function getData(str) {
// let res = {};
// for (i of str) {
//   if (i in res){
//     res[i]++;
//   } else res[i] = 1;
// } console.log(str);

// }
// getData("webbr@<>!n_2022")

// // 'webbrain' --> 'wweebbbbrraaiinn'

// const doublicate = (str) => {
//   let res = '';
//   for(value of str) {
//     res += value + value;
//   }
//   return res;
// }
// // console.log(doublicate('webbrain'));

// // ------------------------------------------------------------------------------

// const func = (str) => {
//   let res='';
//    for(let i = str.length - 1; i >= 0; i-- ){
//     res = res+str[i]
//    }
//    return res===str
// }

// console.log(func("aziza"));

// // ------------------------------------------

// const funct = (str) => {
// let res = ''
// for (let i = 0; i < str.length; i++){
//  res += str[i] + str[i] 
// }
// return res
// }

// console.log( funct("webbrain"));
// let str = 'web';
// console.log(str[i]);
















































































// let string = 'Zuhriddin';

// for ( i = string.length - 1; i >= 0; i--){
//   console.log(string[i]);
// }

// // --------------------------------------------------------------------

// const zipper = function(str) {
//   let obj = {};
//   for (value of str) {
      
//   }
// }
// console.log(zipper('wweeeeebbbbrain'));




const functi = (numbers) => {
  res = 1
  for (let i = 0; i <= numbers; i++){
    res += numbers * numbers 
  }
  return res
}

console.log(functi(123))



// const text = (str) => {
//       let res = ""
//       let count = 1
//       for (let i = 0; i < str.length; i++) {
//           if (str[i] === str[i + 1]) {
//               count++
//           } else {
//               res += str[i]
//               if (count > 1) {
//                   res += count
//                   count = 1
//               }
//           }
//       }
//       console.log(res)
//   }
//   text("wwwweebbbrrrraaaaaiiiiiinnnnnnn")