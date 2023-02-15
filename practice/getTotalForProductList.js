function getTotalForProductList(product2dPriceList){//２次元配列の練習
    let finalTotal = 0;
    for(let i = 0; i < product2dPriceList.length; i++){
        priceList = product2dPriceList[i];//=product1
        price = priceList[0];//=product1.price
        total = price;
        //最初の値のあとに開始
        for(let j = 1; j < priceList.length; j++){
            multiplier = priceList[j];//=product1.discount
            total += price * multiplier;//=product1.price +
        }
        //finalTotalを加算していく
        console.log("Total for current item is:" + (total));//各productの最終的な価格
        finalTotal += total;
    }
    return finalTotal;
}

//商品の配列:[価格,クーポン割引,州税,連邦税,輸入税]
let product1 = [100, 0.1, 0.02, 0.03, 0.02];
let product2 = [50, -0.5, 0.1, 0.05, 0.02];
let product3 = [34, 0.05, 0.2, 0.03, 0.1];
let product4 = [10, -0.2, 0.3, 0.05, 0.03];

//shopping cartは全てのアイテムを含む二次元配列
let shoppingCartArray = [product1, product2, product3, product4];
console.log(getTotalForProductList(shoppingCartArray));