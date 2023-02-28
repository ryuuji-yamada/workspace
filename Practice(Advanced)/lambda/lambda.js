/*sample7:非同期型コールバック
let strage = "old data";

function getData(url){
    setTimeout(() => {
        console.log("getting from " + url);
        strage = "data at " + url;
    },1000);
}

function render(){
    console.log("rendering " + strage);
}

//localに保存されたデータからrenderingする
//本来はデータを取得->renderの順
getData("https://recursionist.io/");
render();
*/

/*sample6:同期型コールバック
//フィボナッチ数を返す関数
function fib(n){
    if(n == 0)return 0;
    else if(n == 1) return 1;
    else return fib(n-1) + fib(n-2);
}

//2乗を返すラムダ関数
let square = function(n){
    return n*n;
}

//引数に関数を受け取る
function printFnResult(callback,n){
    console.log("----start----");
    console.log("n: " + n);
    //ここで受け取った関数を実行する
    console.log("result: " + callback(n));
    console.log("-----end-----");
}
printFnResult(fib,20);
printFnResult(square,10);
printFnResult(n => n*n*n,10);
*/

/*sample5
function greetingFn(name){//nameを受け取り、文字列を返す関数
    return "Hello there " + name + " from Fn.";
}

//nameを受け取り文字列を返す無名関数を変数へ代入
let greetingLambdaFn = (name) => {return "Hello there " + name + " from Lambda."}

function nameGenerator(){//文字をランダムに選び、名前を作る関数
    return Math.random().toString(36).substring(2);
}

function multiCall(f,fInputF,message){//入力として関数への参照を受け取る
    return f(fInputF()) + "....." + message;
}

console.log(multiCall(greetingFn,nameGenerator,"Thank you"));
console.log(multiCall(greetingLambdaFn,nameGenerator,"Thank you"));
*/

/*sample4:関数を返す関数
function helloFunction(){//関数を返す関数
    return function(){return "hello world"};
}

console.log(helloFunction());
console.log(helloFunction()());//戻り値としての関数を実行するか、保存することができる

let outputF = helloFunction();
console.log("Running a function that was generated..." + outputF());

function constantMultiplication(x){//xを取り込み、その後xと入力を乗算する関数を返す
    return function(y){return y*x + "です"};
}

let multiplyBy4 = constantMultiplication(4);
console.log(multiplyBy4(3));
console.log(multiplyBy4(10));
console.log(multiplyBy4(5));
*/

/*sample3:総和と総積
function summation(g,a,b){
    if(b < a) return 0;
    return g(b) + summation(g,a,b-1);
}

//1から25までの2乗の総和
let identity1 = function(i){return i*i};
console.log(summation(identity1,1,25));

//1から10までの3i*(i + 3)の総和
let identity2 = function(i){return 3*i*(i + 3)}
console.log(summation(identity2,1,10));

//1からmまでの2j*(j-1)の総和 m=20
let identity3 = function(j){return 2*j*(j - 1)};
let m = 20;
console.log(summation(identity3,1,m));

function pPi(g,a,b){
    if(b < a)return 1;
    return g(b) * pPi(g,a,b-1);
}

//1から6まで7-kの階乗
let identity4 = function(k){return 7 -k};
console.log(pPi(identity4,1,6));

//3から9までのi^2+3の階乗
let identity5 = function(i){return i*i + 3};
console.log(pPi(identity5,3,9));
*/

/*sample2:高階関数
function fSquaredX(f,x){
    return f(x*x);
}

//f(a^2) = a^2 + 30;
console.log(fSquaredX(function(a){return a + 30},5)); // 25 + 30 = 55

//呼び出し可能オブジェクトを変数内に格納
let callable = function(p){console.log("p is " + p)};
fSquaredX(callable,10);// p is 100
fSquaredX(callable,8);//p is 64
*/

/*sample1:最初の練習
function asc(x,y){//通常の関数
    return x + y;
}

//無名関数
let ascLamda1 = function(x,y){return x + y};

//アロー関数
let ascLamda2 = (num,i) => {return num * i};

console.log("通常の関数:"+asc(2,8));
console.log("無名関数:"+ascLamda1(3,7));
console.log("アロー関数:"+ascLamda2(5,4));
*/

