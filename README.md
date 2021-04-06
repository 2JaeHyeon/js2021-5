# 이재현[201840223]
<hr/>

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