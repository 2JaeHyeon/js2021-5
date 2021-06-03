# 이재현[201840223]
<hr/>

#### git clone: 복사한 주소
를 붙여 넣으면 그 파일의 .js파일등 코드들이 복사가됨
#### `${exception.name}` 은 예외가된 언어를 표시해준다

## [6월 01일]
window객체 : 웹 페이지 자체를 나타낸다<br>
새로운 화면을 열거나 웹 브라우저의 크기를 변경하는 일<br>
대표적으로 경고 출력을 하는 경고창과 입력을 하는 프롬프트를 제공<br>
alert(<메시지>) -> 경고창을 출력<br>
prompt(<메시지>,<임시 글자>) -> 프롬프트를 출력<br>

var input = prompt('글자를 입력해주세요','여기에 입력해주세요')<br>
alert(input)<br>

## Screen
<table>
[width(너비),<br>
height(높이),<br>
availWidth(실제화면 넓이),<br>
availHeight(실제 화면 높이),<br>
colorDepth(사용가능한 색상의수),<br>
pixelDepth(한 픽셀당 비트수)]
</table>

location객체,history객체<br>
메소드 ><br>
assign(<링크>) : 매개 변수로 전달한 위치로 이동<br>
reload() : 새로고침<br>
replace() : 매개 변수로 전달한 위치로 이동(뒤로가기 불가능)<br>

### (Ex)
location = 'http://hanbit.co.kr';<br>
location.href = 'http://hanbit.co.kr';<br>
location.assign('http://hanbit.co.kr');<br>
location.replace('http://hanbit.co.kr');<br>

### history객체 메소드
forward() : 앞으로 이동<br>
back() : 뒤로이동<br>

### navigator 객체
웹 페이지를 실행하는 웹 브라우저 정보가 들어있음<br>
사용자의 웹 브라우저,운영체제를 구분가능<br>

### 문서 객체 모델
문서 객체 : HTML 태그를 자바스크립트에서 사용할 수 있는 객체로 만든다<br>
    >문서 객체를 조작한다는 말은 태그를 조작한다는 말과 같다<br>
    >노드 : 각요소<br>

넓은 의미 > 웹 브라우저가 HTML 페이지를 인식하는 방법<br>
좁은 의미 > document 객체와 관련된 객체의 집합을 나타냄<br>

'정적으로 문서 객체를 생성한다'<br>
웹 페이지를 처음 실행할 때 html 페이지에 있는 태그를 읽으면서 생성<br>
'동적으로 문서 객체를 생성'<br>
자바스크립트를 사용해 프로그램 실행 중에 문서 객체를 생성<br>

문서 객체 선택<br>
>html태그를 자바스크립트에서 문서 객체로 변환<br>
>문서 객체를 선택하면 자바스크립트로 실행 중에 내부 글자를 변경하거나 스타일 변경가능 <br>
script 태그를 읽을 때 h1,h2 태그가 생성되어있지 않으면 오류가 발생한다.<br>

### 속성조작
setAttribute(속성이름.속성값) -> 속성을 지정<br>
getAttribute(속성이름) -> 속성을 추출<br>

### 이벤트
이벤트 속성 : onload
이벤트 이름, 이벤트 타입 : load
이벤트 리스너,이벤트 핸들러 : 이벤트 속성에 넣는 함수
이벤트 모델 : 문서 객체에 이벤트를 연결하는 방법

### jQuery
객체 탐색 메소드 <br>
parent() -> 부모 태그를 선택<br>
find() -> 후손 태그를 찾음<br>
$('h1').parent(); -> h1 태그의 부모 태그를 선택<br>
$('h1').find('i') -> h1 태그 내부에 있는 i 태그 선택<br>
<hr>
length 선택된 문서 객체의 수를 구한다.
get() 선택한 문서 객체 중 하나를 선택
each() 선택한 문서 객체에 반복을 적용
<hr>
text() html태그 내부의 문자 조작<br>
html() html태그 내부의 문자를 조작<br>
$('h1').text()<br>
$('h1').html()<br>
<hr>
css() -> 스타일을 조작<br>
attr() -> 속성을 조작<br>


## [5월 25일]
### Express 모듈
node.js기반으로 웹서버를 만들어주는 기반
$ npm install express @4

요청 메시지 : 클라이언트가 서버로 보내는 편지
응답 메시지 : 서버가 클라이언트로 보내는 편지

express() 서버 애플리케이션 객체를 생성
app[서버] use() 요청이 왔을 때 실행할 함수를 지정
app[서버] listen() 서버를 실행

const express = require('express');
-> 모듈의 객체 생성

const app = express();
-> 서버 생성

app.use((request,response)=>{
    response.send('<h1>Hello express</h1>);
}) -> request 이벤트 리스너 설정

app.listen*52273,()=>{
    console.log('Server runnong at http://127.0.0.1:52273');
});-> 서버 실행

페이지 라우징 : 클라이언트 요청에 적절한 페이지를 제공하는 기술
express 모듈의 페이지 라우팅 메소드
#### Postman Interceptor Chrom web 스토어에서 설치
크롬 애플리케이션 

## [5월 18일]
#### throw 키워드
throw 키워드 뒤에는 문자열 또는 Error 객체를 입력 <br>
throw '강제 예외';

자세한 에외 출력은 Error 객체를 사용<br>
- 어떤 파일의 몇 번째 줄에서 예외가 발생했는지도 확인가능<br>
const error = new Error('메시지');<br>
error.name = '내 마음대로 오류';<br>
error.message = '오류의 메시지';<br>
throw error; => 에러 발생<br>

### 전역 변수
__filename 현재 실행 중인 코드의 파일 경로를 나타냅니다.<br>
__dirname 현재 실행 중인 코드의 폴더 경로를 나타냅니다.<br>
ex> console.log(__filename/__dirname)<br>

### Node.js
env - 컴퓨터 환경 정보를 나타냅니다.<br>
version - 버전을 나타낸다<br>
arch - 프로세서의 아키텍처<br>
platform - 플랫폼 나타냅니다.<br>

on(<이벤트 이름>,<이벤트 핸들러>) : 이벤트를 연결합니다.<br>
exit : 프로세스가 종료될때 발생<br>
uncaughtException : 예외가 일어날 때 발생합니다.<br>

### os 모듈
const os = require('os'); os모듈을 추출<br>


### url 모듈
const url = require('url');<br>

### File System 모듈
const fs = require('fs');<br>
fs.readFileSync(<파일이름>) : 동기적으로 파일을 읽어 들인다.<br>
fs.readFile(<파일이름>,<콜백함수>) : 비동기적으로 파일을 읽어 들입니다.<br>

<hr>
• 웹 서버를 C++ 프로그래밍 언어로 만들면 무척 빠르지만, 개발과 유지 보수는 어려움<br>
• 전 세계 웹 서비스 기업(페이스북, 트위터 등)도 C++로 웹 서버를 개발하지 않고 PHP, 자바, 루비, 파이썬, Node.js 등 프로그래밍 언어로 개발<br>
• 프로그래밍 언어 자체는 느리지만 큰 의미가 없다고 판단해 개발 속도와 유지 보수성이 좋은 프로그래밍 언어를 사용<br>
• 자바스크립트 프로그래밍 언어는 C++, 자바보다 느리지만 Node.js를 사용하면<br>
• 손쉽게 비동기 처리를 구현하여 빠른 처리가 가능<br>
pdf.14


## [5월11일]

#### Date
Month '월'은 0부터 시작을한다.<br>
getOO() 형태 메소드,setOO()형태 메소드<br>
FullYear,Month,Day,Hours,Minutes,Seconds등 사용
getTime():유니게스타임<br>
일 단위(1000*60*60*24) 1000밀리초/60초/60분/24시간<br>
<hr>

#### Array
array배열에 : 고구마/1,000원 감자/500원 바나나/1,500원이 들어가있는상태. <br>
let popped = array.pop() -> 배열의 요소를 꺼냄<br>
console.log(popped) -> 배열에서 꺼낸 요소<br>
console.log(pop()) -> 메소드를 호출한 이후의 배열<br>
<hr>
array.push(popped) -> 배열에 추가하기. <b>push</b> <br>
array.push({<br>
    name:'사과'<br>
    price:2000<br>
})<br>
console.log(array)-> 사과 값이 들어간다.<br>
<hr>

##### sort() 메소드 : 배열 정렬
arrayA.sort(); -> 문자열순서로 정렬<br>
console.log(arrayA)<br>
출력값 -> 감자 고구마 바나나<br>
console.log(arrayA.reverse()) -> 문자열로 (역순정렬)<br>
출력값 -> 바나나 고구마 감자<br>
return -1;
return 1;
return 0;
<hr>

#### 콜백 함수를 매개 변수로 받을때
[52,273,32].forEach(item,index)<br>
forEach() -> 배열의 요소를 하나씩 뽑아 반복적으로 돌린다.<br>
map() -> 콜백 함수에서 리턴하는 것을 기반으로 새로운 배열을 생성.<br>
filter() -> 콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 생성.<br>
<hr>

#### 프로토타입에 메소드 추가
-> 프로토타입에 메소드를 추가하면 해당 자료형 전체에 추가가 가능하다<br>
String.prototype.contain = function(input){<br>
    return this.indexOf(input) >= -1<br>
}<br>
<strong>메소드 활용</strong><br>
console.log('안녕하세요'.contain('안녕'))<br>
<hr>

#### underscore.js 라이브러리 설치
npm install underscore<br>
<script src="http://underscorejs.org/underscore.js"></script><br>
<hr>

#### JSON 객체의 메소드
JSON.stringify(<객체>,<변환 함수>,<공백 개수>) -> 자바스크립트 객체를 문자로 생성<br>
-> 문자열 리턴<br>
JSON.parse(<문자열>) -> 문자열을 자바스크립트 객체로 파싱.<br>
-> 객체 리턴<br>
※ 문자열은 큰따옴표로 만든다<br>
※ 모든 키는 큰따옴표로 감싸야한다<br>
※ 숫자,문자열,불 자료형만 사용이 가능하다.<br>
<hr> 

### 예외 처리
예외: 실행에 문제가 발생시 자동중단.<br>
예외처리: 오류에 대처할 수 있게 한다.<br>

기본 예외 처리 : 사전에 해당 데이터가 undefined인지 조건문으로 확인.<br>
예외 상황 확인 : 배열 생성시 길이를 음수로 지정하면 에러 발생<br>
const array = new Array(-2000)<br>
`${exception.name}` 은 예외가된 언어를 표시해준다<br>
<hr>

#### try catch finally 구문
try{<br>
    예외가 발생하면<br>
}catch(excption){<br>
    여기서 처리<br>
}finally{<br>
    이것은 무조건 실행되는 부분<br>
}<br>
catch구문/finally구문 생략이 가능하다.<br>
<hr>
try{<br>
    error.error.error()<br>
}catch(e){<br>
    console.log(e.name)<br>
    console.log(e.message)<br>
}<br>
예외 객체의 name과 message가 뜬다.<br>
throw 키워드 뒤에는 문자열 또는 Error객체를 입력<br>
const error = new Error('메시지')<br>
error.name = ~<br>
error.message = ~<br>
throw error;<br>



## [5월 4일]
### 표준 내장 객체
console.log(typeof number,string,boolean)<br>
객체 자료형이 let number = new Numver(273);<br>
console.log(typeof number);<br>
-> object로 출력값이 나옴<br>
<br>
> 기본자료형과 객체 자료형 모두 속성 메소드를 사용한다.<br>
let string = '과자|1500원';<br>
console.log(string.split('|'));<br>
>차이점 기본 자료형은 객체가 아니기 때문에 속성과 메소드를 추가할수가 없다.<br>

Number 메소드 <br>
toExponemtial() : 숫자를 지수 표시로 나타낸 문자열 리턴<br>
toFixed() : 고정소수점 표시로 나타낸 문자열 리턴<br>
-> console.log(number.toFixed(1)); : 소수점 첫째자리까지 표시<br>
-> console.log(number.toFixed(n)); : 소수점 n번째 자리까지 표시<br>
toPrecision() : 길이에 따라 지수표시 또는 고정 소수점 표시로 리턴<br>
#### 생성자 함수에 속성과 메소드를 추가했을때
function Constructor(){}<br>
Constructor.property = 273;<br>
Constructor.method = function () {}<br>
-> console.log(Constructor.property) => 273<br>
console.log(Constructor.method) =>[Function]<br>
자바스크립트가 너무 큰 수를 다룰 때는 부동소수점 형식으로 숫자를 다루면 된다.<br>

### String 객체
let string~ = '안녕하세요';<br>
let string~~ = new String('안녕하세요');<br>
length = 문자열의 길이를 나타냅니다.<br>
String 객체의 메소드는 변경된 값을 리턴하는 형식<br>

#### 잘못된 String 객체 사용
let a = 'abc';<br>
string.toUpperCase();<br>
console.log(a);<br>
->abc => 자기자신을 변경하지 않고 리턴하기때문에 대문자가 아닌 소문자로 출력<br>
#### <<올바른값>>
string = string.toUpperCase();<br>
console.log(string);<br>
->ABC<br>
indexOf() = 특정 문자열이 있는지 확인,위치를 리턴<br>
문자열이 포함되어 있지 않을 때는 -1리턴한다.<br>


## [4월 27일]
스페이스를 적용 X
배열은 요소에 접근할 때 인덱스를 사용하고, 객체는 키를 사용<br>
요소 : 배열 내부에 있는 값 하나하나를 뜻한다<br>
속성 : 객체 내부에 있는 값 하나하나를 뜻한다<br>
### 반복 출력
for(let product of products){<br>
product.print();<br>
}<br>
array[0] = '빨간색'<br>
array[1] = '검은색'<br>
0-빨간색<br>
1-검은색<br>
#### 객체 선언
let product = {<br>
제품명: 쿠쿠다스<br>
유형:<br>
성분:<br>
원산지:<br>
}
product['제품명'] -> 쿠쿠다스<br>
let object ={<br>
name : '초코파이' , <br>
price : 900 <br>
(추가) print : function(){  <br>
	console.log(`${this.name}의 가격은 ${this.price}원 입니다.`) <br>
 } <br>
}
console.log(object.name); -> 초코파이<br>
console.log(object.price); -> 900<br>
object.print(); -> 초코파이의 가격은 900원 입니다.

### 객체 지향 프로그래밍
	└ 현실의 객체를 모방해서 프로그래밍 
배열과 객체를 사용하면 여러 개의 데이트를 쉽게 다룰수 있다.<br>
let products ={<br>
{name : 'red' , price:100},<br>
{name : 'black' , price:300},<br>
{name : 'white' , price:500},<br>
{name : 'blue' , price:150},<br>
{name : 'green' , price:120}<br>
}

### 생성자 함수
객체를 만드는 함수,대문자로 시작하는 이름 사용
#### -생성자 함수-
fuction Product(name,price){
this.name=name;
this.price=price;
}
#### -생성자 함수를 사용한 객체 생성-
let product = new Product("red",100);
console.log(product); -> name:red , price:100

### 프로토타입
생성자 함수로 만든 객체는 프로토타입 공간에 메소드를 지어해서 모든 객체가
공유 하도록 한다.<br>해당 함수를 생성자 함수로 사용시 의미가 있다.
<br>
아예 값이 없는 상태를 구분할 때 null값을 활용한다

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