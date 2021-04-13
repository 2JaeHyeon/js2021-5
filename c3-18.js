
const repl = require ('repl');

repl.start({
    prompt: "숫자입력 -> ",
    eval:(command,context,filename,callback) =>{
        let number =Number(command)
        if(isNaN(number)){
            console.log("숫자가 아닙니다 !")
        }else{
            console.log("숫자 입니다.")
        }
        callback();
    }
});