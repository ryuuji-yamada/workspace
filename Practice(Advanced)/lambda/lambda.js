/*sample14
const customerList = [
    {
       id: 1,
       company: "MH Corp.",
       name: "Makenzie Hibbert",
       rank: "A",
       email: "makenzie@example.com"
    },
    {
       id: 2,
       company: "MH Corp.",
       name: "Abram Martinho Fleming",
       rank: "B",
       email: "abram@example.com"
    },
    {
       id: 3,
       company: "Best Inc.",
       name: "Trey Best",
       rank: "A",
       email: "trey@example.com"
    },
    {
       id: 4,
       company: "Best Inc.",
       name: "Joshua Charnley",
       rank: "B",
       email: "joshua@example.com"
    },
    {
       id: 5,
       company: "Best Inc.",
       name: "Sue Rodger",
       rank: "C",
       email: "sue@example.com"
    }
 ];

 let rankAlist = customerList.filter(customer => customer.rank == "A");//filter関数での抽出
 console.log(rankAlist);

 //再利用性を考慮した関数
 let extractionByRank = (list,rank) =>{
    return list.filter(customer => customer.rank != rank);
 };
 console.log(extractionByRank(customerList,"A"));

 let filterByRank = rank => personal => personal.rank == rank;
 let filterByCompany = company => personal => personal.company == company;

 let versatileExtraction = (list,filerCriteria,value) => {
    return list.filter(filerCriteria(value));
 }
 console.log(versatileExtraction(customerList,filterByCompany,"MH Corp"));
 console.log(versatileExtraction(customerList,filterByRank,"A"));
 */

/*sample13:部分適用(複数の引数を取る関数のうち、一部の引数をデフォルト値に固定し、より少ない引数を取る関数を作成すること)
function usdTojpy(USDJPY,paymentUSD,handlingCharge){
    return USDJPY*paymentUSD + handlingCharge;
}
//同じレート、手数料を毎回記述するのは冗長
console.log(usdTojpy(139.85,200,3000));
console.log(usdTojpy(139.85,32,3000));

let usdTojpyVisaNov17th = function(paymentUSD){//部分適用
    return usdTojpy(139.85,paymentUSD,3000);
}
console.log(usdTojpyVisaNov17th(200));
console.log(usdTojpyVisaNov17th(32));

//カリー化で簡潔に
let usdTojpyCarry =
function(handlingCharge){
    return function(USDJPY){
        return function(paymentUSD){
            return USDJPY * paymentUSD + handlingCharge;
        }
    }
}

let usdTojpyVisaNov17thCarry = usdTojpyCarry(3000)(139.85);
console.log(usdTojpyVisaNov17thCarry(200));
console.log(usdTojpyVisaNov17thCarry(32));

//アロー関数でさらに簡潔に
let usdTojpyCarryArrow = handlingCharge => USDJPY => paymentUSD => USDJPY * paymentUSD + handlingCharge;
let usdTojpyVisaNov17thCarryArrow = usdTojpyCarryArrow(3000)(139.85);
console.log(usdTojpyVisaNov17thCarryArrow(200));
console.log(usdTojpyVisaNov17thCarryArrow(32));
*/

/*sample12: カリー化(複数の引数を取る関数を、それぞれ単一の引数を取る一連の関数に変換する手法)
function addFn(x,y){//引数を２つ持つ通常の関数
    return x + y;
}
console.log(addFn(1,2));//3

function addCarry(x){//カリー化
    return function(y){
        return x + y;
    }
}
console.log(addCarry(4)(5));//9

let addCarryLambda = x => y => x + y;//アロー関数で簡潔に記述可能
console.log(addCarryLambda(3)(3));//6
*/

/*sample11.3:reduce関数
let array2d = [[2,3,4,5],[5,22,34,4,5],[12,13,45,67,84]];

//２次元配列平坦化
let flatten = array2d.reduce((flattenList,list) => flattenList.concat(list));
console.log(flatten);
console.log(flatten[1]);
*/

/*sample11.2:reduce関数
let shoppingList = [
    {
        name: "Apple",
        price: 100,
        quantity: 10
     },
     {
        name:"Orange",
        price: 120,
        quantity: 8
     },
     {
        name: "Banana",
        price: 80,
        quantity: 14
     }
]

let totalCost = shoppingList.reduce((total,item) => total + item.price* item.quantity,0);
console.log(totalCost);
*/

/*sample11.1:reduce関数(関数、シーケンス、初期値の3つの引数を受け取り、シーケンスの最初の２つの要素に関数を適用し、演算結果とシーケンスの３番目の要素に関数を適用し...)
function myReduce(reduceCallback,list,initial){
    let lastResult = initial;
    for(let i = 0; i < list.length; i++){
        let result = reduceCallback(list[i],lastResult);
        lastResult = result;
    }
    return lastResult;
}

let list1 = [1,2,3];
console.log(myReduce((x,total) => x*total,list1,1));

let list2 = [1,2,3,4,5,6,7,8,9,10];
console.log(myReduce((x,total) => x*total,list2,1));

console.log(list2.reduce((total,x) => total*x));//reduce関数
console.log(list2.reduce((total,x)=>total*x,1));//reduce関数

console.log(list2.reduce((total,x) => total+x));//1~10の総和
*/

/*sample10:filter関数(boolean値を返す関数とリストを受け取り、どれをフィルタリングするか決定する)
function myFilter(predicateF,list){
    let results = [];
    for(let i = 0; i < list.length; i++){
        if(predicateF(list[i]) == true)results.push(list[i]);
    }
    return results;
}

let list1 = [1,2,3,4,5,6,7,8,9,10];
console.log(myFilter(x=>x%2 != 0,list1));
console.log(list1.filter(x=>x%2 != 0));//Javascriptにはフィルター関数が搭載されている
*/

/*sample9:map関数(各要素に同じ関数を適用して出力)
function myMap(f,list){
    let res = [];
    for(let i = 0; i < list.length; i++)res.push(f(list[i]));
    return res;
}
let nums = [1,2,3,4,5,6,7];
console.log(nums);
console.log(myMap(x=>x*x,nums));
console.log(nums.map(x=>x*x));//Javascriptにはラムダを受け取り、マッピングを返すmap関数がある
*/

/*sample8:リスト反復処理
function forEach(f,list){//リストの各要素に関数を適用
    for(let i = 0; i < list.length; i++){
        f(list[i]);
    }
}

forEach(x=>console.log(x),[2,3,4,5]);

function simpleLoop(){//通常のfor loop
    let l = [1,2,3,4,5];
    let counter = 0;

    for(let i = 0; i < l.length; i++){
        counter += l[i]*l[i];
    }
    return counter;
}
console.log(simpleLoop());

function loopDifferent(){
    let l = [1,2,3,4,5];
    let counter = 0;

    let forEach = (f,list)=>{
        for(let i = 0; i < list.length; i++){
            //fに変化があった場合副作用が発生するので注意
            f(list[i]);
        }
    }
    forEach(function(x){
        counter += x*x;
    },l);
    return counter;
}
console.log(loopDifferent());

function loopDifferentLibrary(){//forEachメソッド(Javascriptの配列に付属)
    let l = [1,2,3,4,5];
    let counter = 0;

    l.forEach(function(x){
        counter += x*x;
    });
    return counter;
}
console.log(loopDifferentLibrary());
*/

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

