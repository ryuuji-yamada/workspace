function applyOperation(op1,op2,operator){
    op1 = parseInt(op1);
    op2 = parseInt(op2);

    if(operator == "+")return op1 + op2;
    if(operator == "-")return op1 - op2;
    if(operator == "*")return op1 * op2;
    if(operator == "/")return op1 / op2;

    return NaN;
}

const op1 = document.getElementById("operator1");
const op2 = document.getElementById("operator2");

const answer = document.getElementById("answer");

const operatorButtons = document.querySelectorAll(".operator-btn");

for(let i = 0; i < operatorButtons.length; i++){
    let opElement = operatorButtons[i];
    opElement.addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,opElement.innerHTML);})
}