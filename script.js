function getHistory(){
    return document.getElementById("hisvalue").innerHTML;
}
function printHistory(num){
    document.getElementById("hisvalue").innerHTML=num;
}

function getOutput(){
    return document.getElementById("outputvalue").innerHTML;
}
function printOutput(num){
    document.getElementById("outputvalue").innerHTML=num;
}

var operator= document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){

        if(this.id=="crl"){
            printOutput("")
            printHistory("")
        }else{
        var output=getOutput();
        var history=getHistory();
        if(output!=""){
            history=history+output;
            if(this.id=="="){
                var result=eval(history)
                printOutput(result)
                printHistory("")
            }else{
                history=history+this.id;
                printHistory(history);
                printOutput("");
            }
        }}
    })
}
var number= document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=getOutput()
        if(output!=NaN){
            output=output+this.id;
            printOutput(output)
        }
    })
}