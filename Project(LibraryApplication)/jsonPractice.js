/*JSONはkeyとvalueによって構成される
const jsonString =
`
{
    "model": "Tesla X",
    "brand": "Tesla",
    "price": "$100k",
    "year": 2018
}
`;

//JASON.parse()メソッドは文字列をJASONとして解析し、文字列によって記述されているJSの値やオブジェクトを構築する
const car = JSON.parse(jsonString);

//carという変数とアクセス演算子を用いて、JSONのデータにアクセス
console.log(car.model);
console.log(car.brand);
console.log(car.price);
console.log(car.year);
*/
//配列の中にJSONを保存することもできる
const jsonString = 
`
[{
    "model": "Tesla X",
    "brand": "Tesla",
    "price": "$100k",
    "year": 2018
},
{
    "model": "Civic",
    "brand": "Honda",
    "price": "$30k",
    "year": 2016
},
{
    "model": "Cayenne",
    "brand": "Porsche",
    "price": "$80k",
    "year": 2020
}]
`;

const cars = JSON.parse(jsonString);
/*
console.log(cars);
console.log(cars[0]);
console.log(cars[0].model);
console.log(cars[2].brand);
*/
//for-of構文で配列の全要素のJSONデータへ反復的にアクセス
for(let car of cars){
    console.log(car);
    console.log(car.model);
    console.log(car.brand);
    console.log(car.price);
    console.log(car.year);
}

