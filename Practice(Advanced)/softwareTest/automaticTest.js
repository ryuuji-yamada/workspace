function assertionTest(a,callback){
    let result = callback(a);//ブーリアン値
    console.log(`Checking against ${a}, is it valid?...${result}`);
    console.assert(result);
    return true;
}

function sieveOfPrimes(n){//エラトステネスのふるい
    let cache = [];
    for(let i = 0; i < n; i++)cache.push(true);

    for(let currentPrime = 2; currentPrime < Math.ceil(Math.sqrt(n)); currentPrime++){
        if(!cache[currentPrime])continue;
        let i = 2;
        let ip = i*currentPrime;
        while(ip < n){
            cache[ip] = false;
            i += 1;
            ip = i*currentPrime;
        }
    }

    let primeNumbers = [];
    for(let i = 2; i < cache.length; i++){
        if(cache[i])primeNumbers.push(i);
    }
    return primeNumbers;//n未満の素数の配列を返す
}

function primeCheck(k,n){//n個の自然数の中にk個の素数が含まれているか
    let isPrime = num =>{
        if(num > 1){
            for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
                if(num % i == 0)return false;
            }
            return true;
        }
        return false;
    }

    let script = aList =>{
        if(new Set(aList).size !== aList.length)return false;
        if(aList.length !== k)return false;
        for(let i = 0; i < aList.length; i++){
            if(aList[i] > n || !isPrime(aList[i]))return false;
        }
        return true;
    }
    return script;
}

assertionTest([2,3,5,7,11,13],primeCheck(6, 15));
assertionTest(sieveOfPrimes(15),primeCheck(6, 15));
assertionTest(sieveOfPrimes(100),primeCheck(25, 100));
assertionTest(sieveOfPrimes(10000),primeCheck(1229, 10000));

assertionTest([2,3,5,7,11,13,15],primeCheck(6, 15)); // Error
assertionTest([2,3,5,7,11,12],primeCheck(6, 15)); // Error
assertionTest([2,3,5,7,11,19],primeCheck(6, 15)); // Error