i=0;
let foo=[2,3,5,4,10];
while (true){
    if(foo[i]%2==0){
        bar = foo[i];
        break;
        
    }
    i += 1;
    console.log(i);
}
console.log(`처음 발견한 짝수는 ${bar}입니다.`);

//pop은 배열의 마지막 주소에 있는 값을 제거해주는 함수.
bar =[0];
console.log("\n push");
foo.push("자료구조",1,0.5);
bar.push(1,2,3);
console.log(foo);

//shift는 배열의 첫번째 주소에 있는 값을 제거한후에 반환해주는
console.log("\n shift");
//push와 pop를 이용하면 stack
//push와 shift를 이용하면 queue로 이용할수있다.

//concat은 두개의 배열을 합쳐주는 함수
foo=foo.concat(bar);
//reverse은 배열을 역순으로 재배치
