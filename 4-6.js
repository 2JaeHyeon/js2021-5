// let foo =[10,20,30,40,50];

// for(let i in foo ){
//     console.log(`${i}번때 요소는${foo[i]}이다.`)
// }
//bar = foo[0];


// for(let item of foo ){ //foo값을 item에 넣어둔다?
//      console.log(item)
//     }
let output = "";
for(let i=0; i<10; i++){
    for(let j=0; j<i+1; j++){
        output += "*";
    }
    output +="\n";
}  
    console.log(output);
