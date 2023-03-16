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

let str1 = "webbrain academy"
let str2 = ""
function check (a,b){
    if(a.localeCompare(b) > 0){
        console.log("qisman o'xshash")
    }else if(a.localeCompare(b) < 0){
        console.log("teng emas")
    }else{
        console.log("bular teng")
    }
    console.log(a.localeCompare(b));
}
check(str1,str2)