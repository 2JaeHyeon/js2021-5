# 이재현[201840223]
<hr/>

#### git clone: 복사한 주소
를 붙여 넣으면 그 파일의 .js파일등 코드들이 복사가됨

## [4월 27일]
스페이스를 적용 X
배열은 요소에 접근할 때 인덱스를 사용하고, 객체는 키를 사용
요소 : 배열 내부에 있는 값 하나하나를 뜻한다
속성 : 객체 내부에 있는 값 하나하나를 뜻한다
### 반복 출력
for(let product of products){
product.print();
}

array[0] = '빨간색'
array[1] = '검은색'

0-빨간색
1-검은색

객체 선언
let product = {
제품명: 쿠쿠다스
유형:
성분:
원산지:
}
product['제품명'] -> 쿠쿠다스

let object ={
name : '초코파이' , 
price : 900
(추가) print : function(){
	console.log(`${this.name}의 가격은 ${this.price}원 입니다.`)
 }
}
console.log(object.name); -> 초코파이
console.log(object.price); -> 900
object.print(); -> 초코파이의 가격은 900원 입니다.

### 객체 지향 프로그래밍
	└ 현실의 객체를 모방해서 프로그래밍 
배열과 객체를 사용하면 여러 개의 데이트를 쉽게 다룰수 있다.
let products ={
{name : 'red' , price:100},
{name : 'black' , price:300},
{name : 'white' , price:500},
{name : 'blue' , price:150},
{name : 'green' , price:120}
}

### 생성자 함수
객체를 만드는 함수,대문자로 시작하는 이름 사용
-생성자 함수-
fuction Product(name,price){
this.name=name;
this.price=price;
}
-생성자 함수를 사용한 객체 생성-
let product = new Product("red",100);
console.log(product); -> name:red , price:100

### 프로토타입
생성자 함수로 만든 객체는 프로토타입 공간에 메소드를 지어해서 모든 객체가
공유 하도록 한다. 해당 함수를 생성자 함수로 사용시 의미가 이싿.

## [04월 13일]
<br>

### 익명 함수
let 함수이름 = function(){};
함수 호출시 내부 코드전부가 실행
<br>

### 선언적 함수
function  함수(){};
console.log(함수)부분으로 [Function:함수]
문자를 출력
<br>

### 화살표 함수
하나의 표현식을 리턴하는 함수를 만들 때 생략이 가능하다.
let 함수 = () =>{
    console.log("함수의 첫 번째 줄")
}
=>은 Function 대체로 사용된다.
함수();
console.log(함수);
실행결과 :
함수의 첫 번째 줄
[Function]
<br>

### 함수 매개 변수 초기화
function print(name,count){
    함수 매개 변수 초기화
    if (!count){
        count = 1;
    }
    console.log('${name}이/가 ${count}개 있습니다.');
}
 함수 호출
 print("사과");
 >> 조건문으로 매개 변수를 확인하고 count가 undefined일 때 1로 초기화
<br>

#### callback();함수
나중에 호출되는 함수
특정 시점에 도달했을 때 시스템에서 호출하는 함수를 뜻한다.
 <br>

### 변환함수
parselnt() : 문자열을 정수로 변환
paresFloat() : 문자열을 실수로 변환
공백으로 시작하면 공백은 무시
문자열을 대입하면 NaN값을 반환
<br>

### 표준 내장 함수
'특정 시간 후에' 또는 '특정 시간마다' 어떤 일을 할 때 사용
setTimeout(함수,시간) 
> 특정 시간 후에 함수를 실행
<br>
setlnterval(함수,시간)
> 특정 시간마다 함수를 실행

<br>
종료 : Ctrl + c

clearlnterval(아이디)
특정 시간마다 실행하던 함수 호출을 정지

### 익명 함수와 화살표 함수의 차이
내부에서 this 키워드가 가지는 의미

┌─ 익명 함수 생성 후 곧바로 호출 <br>
(function (){
    console.log(this);
})(); <br>
┌─ 화살표 함수 생성 후 곧바로 호출 <br>
(() => {
    console.log(this);
})();
<hr>

## [04월 06일]
&nbsp = 스페이스기능<br>

### 객체 선언 및 초기화<br>
let foo = new Array();<br>
let bar =[];<br>
foo = [1,10,오렌지];<br>
bar =[1,10,오렌지];<br>
<hr>
### 선언과 동시에 초기화<br>
let foo = new Array(1,10,오렌지);<br>
let bar =[1,10,오렌지];<br>
<hr>
### 배열의 길이<br>
console.log(foo.length);<br>
### push는 배열의 끝에 원하는 값을 추가해주는 함수.<br>
bar =[0];<br>
console.log("\n push");<br>
foo.push("자료구조",1,0.5);<br>
bar.push(1,2,3);<br>
console.log(foo);<br>
<hr>
### pop은 배열의 마지막 주소에 있는 값을 제거해주는 함수
console.log("\n pop");
foo.pop();
console.log(foo);

console.log(foo.slice(1,5));
인덱스 4는 범위의 마지막이기 때문에 포함되지않는다.
즉 마지막 인덱스1에서 4까지만 반환한다.

## [03월30일]
<p>
 중첩 조건문 : 여러개가 겹쳐있는 상태 <br>
삼항 연산자를 사용할시 한줄로 표시할수있을때만 사용하면 좋다.<br>
while문을 사용할때에 '무한반복'이 되지않도록 주의하면서 코드를 짜야한다.
for반복문은 원하는 횟수만큼 반복하고 싶을 때 사용
일반적으로 for 반복문을 많이 사용하고 while문은 외부요인으로 조건을 변경할때 사용한다.
 
<p>
## [03월23일]
<p>
"문자열"[0]
>> '문' 출력<br>

let a = "hello world!";
a[4] 출력을 하면  - o를 출력<br>
'23+58'
>> '23+58'<br>
'52+273 = ${52+273}'
>> '52 + 273 = 325' <br>
'52+273=' + (52+273)
>> '52+273=325' <br>
'올해는'+ new Data().getFullYear()
>> 전체가 문자열로 이루어진다
>> '올해는 2021' 출력. <br>
'올해는 ${new Data().getFullYear()}'[4];
>>  2 출력<br>
23>250;
>>flase<br>
23<250;
>>true<br>
"하마"<"가방";
>>flase<br>
"하마" <"혀니";
>>true<br>
### 범위 지정 
let date = new Date();
h = date.getHours();
console.log(h< 3|| h>8);
console.log(h>= 3 && h<= 8);
>> 1. true  / 2. false <br>
### 변수
let 식별자 
let pi = 3.14~;
undefined 

표현이 불가능한 수치형 결과를 나타내는 값
자기 자신과 일치하지 않는 유일한 값
자기 자신과도 일차하지 않기 때문에 NAN==NAN FLASE

### if 조건문 
let date = new 





<p>

## [03월16일]
> 오늘 배운 내용 요약 <br>
> 여러줄 요약 <br>
> 3번
<hr/>

<p> 배운내용
'#'하나당 h1 태그와 동일하다. <br>
TERMINAL에서 실행시키는 방법 > node Hello.js 입력시 실행이된다.<br> 
console.log("입력할내용"); << 입력시 "입력할내용"이 출력이된다.<br> 
console.log는 System.out.println과 같은 출력시키는 내용이라고 생각하면될꺼같다.<br>
alert는 ?
연산자는 곱셉 나눗셈 먼저 연산이 이루어진다.

<p>

<table>

</table>