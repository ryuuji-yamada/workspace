function asc(x,y){//通常の関数
    return x + y;
}

//無名関数
let ascLamda1 = function(x,y){return x + y};

//アロー関数
let ascLamda2 = (num,i) => {return num * i};
/*
console.log("通常の関数:"+asc(2,8));
console.log("無名関数:"+ascLamda1(3,7));
console.log("アロー関数:"+ascLamda2(5,4));
*/

