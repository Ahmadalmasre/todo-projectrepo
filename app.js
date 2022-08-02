//prompt("ادخل اسمك")

var userName =prompt("ادخل اسمك");
//alreat("wlcome "+userName);




//prompt("ادخل جنسك")


var Age=prompt("عمرك");
while(Age<=0){
    alert("الرجاء ادخال عمرك الحقيقي");
    Age=prompt("عمرك");

}
var ginder =prompt("ادخل جنسك", "write mail or femail");
while(ginder!=="mail"||ginder!=="femail"){
    alert("لا نستقبل شواذ اقلب وجهك من هون"); 
    ginder =prompt("ادخل جنسك", "write mail or femail")
    if (ginder!=="mail"||ginder!=="femail"){
        s=0;

    }else
    break;
}
if(confirm("هل تريد الحصول  رسائل الترحيب؟")){
    alert("Welcome in us page")
}else{
    alert("استمتع بموقعنا") 
}

var Array =[];
if(confirm("هل وجدت ضالتك")){
    Array[0]="Yes";
}else{
    Array[0]="no";
}

if(confirm("هل استمتعت معنا")){
    Array[1]="Yes";
}else{
    Array[1]="no";
}

if(confirm("هل سنراك مجددا")){
    Array[2]="Yes";
}else{
    Array[2]="no";
}
console.log("هل وجدت ضالتك"+A[0]);
console.log("هل استمتعت معنا"+A[1]);
console.log("هل سنراك مجددا"+A[1]);









