function applyOperation(op1,op2,operator){
    //str型からint型へ変更
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

//答えを出力するinputタグ
const answer = document.getElementById("answer");

//オペランドのボタンにクリックイベントリスナーを追加
//addEventListener(種類,関数)
//上で指定したanswer(タグ)のvalue属性に関数で出力した値を代入
//JSではinputタグのvalue属性を直接変更できる
document.getElementById("plusOperator").addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,"+")});//足し算
document.getElementById("minusOperator").addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,"-")});//引き算
document.getElementById("timesOperator").addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,"*")});//掛け算
document.getElementById("divideOperator").addEventListener("click",function(){answer.value = applyOperation(op1.value,op2.value,"/")});//割り算