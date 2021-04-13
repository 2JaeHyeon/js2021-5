// code5-1

// let foo = function (){
//     console.log("첫번째 줄>");
//     console.log("두번째 줄>");
// }

// foo();
// console.log(foo);
//-----------------------------------
// let foo =() => console.log("첫번째 줄");

// function power(x){
//     return x * x ;
// }

// console.log(power(10));
//x에 10을 대입을 했고 
// return값으로 10x10 = 100을 출력
//----------------------------------
// function foo(x){
//     let bar = x * x;
//     return bar;
// }
// let foobar = foo(10);

// console.log(foobar);

function callTenTimes(callback){
    //함수 선언 , for문 10회 반복
    for(let i=0; i<10; i++){
        //매개 변수로 전달된 함수를 호출
        callback();
    }
}

callTenTimes(function(){
    console.log('호출합니다.');
})