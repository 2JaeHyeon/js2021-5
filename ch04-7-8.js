let output = "";
// for(let i=0; i<10; i++){
//     for(let j=0; j<i+1; j++){
//         output += "*";
//     }
//     output +="\n";
// }  
//     console.log(output);

//┌─ 이등변 삼각형 
for(let i=0; i<10;i++){
    for(let j=0; j<10-i; j++){
        output += " ";
    }
    for(let j=0; j<i+1; j++){
        output += "*";
    }
    // for(let j=1; j<i+1; j++){
    //     output += "*";
    // }

    for(let j=0; j<i-1; j++){
        output += "*";
    }
       
    output += "\n";
}
console.log(output);