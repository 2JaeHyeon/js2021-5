let date = new Date();
h = date.getHours();

console.log(h< 3|| h>8);
console.log(h>= 3 && h<= 8);



// (date.getHours()==0)
if(input%2==0){
    console.log("짝수");
}else{
    console.log("홀수");
}

if(date.getHours()<12){
    console.log("오전");
}
console.log("오후");

//Date()
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getMinutes());
console.log(date.getSeconds());