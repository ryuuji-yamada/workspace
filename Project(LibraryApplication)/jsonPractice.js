//JSONはkeyとvalueによって構成される
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
