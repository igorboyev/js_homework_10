const products = [
    ['apple',10],
    ['banana',8],
    ['mango',20],
    ['grape',18]
];

function getPrice(arr, seasonFunc) {
    let copiedProducts = JSON.parse(JSON.stringify(arr));
    let price = 0;
    for (let i=0; i<copiedProducts.length; i++) {
        typeof seasonFunc === `function` ? price += seasonFunc(copiedProducts[i][1]) : price += copiedProducts[i][1]
    }
    return price
}

function summerValue(value){
    return value*0.8;
}

function winterValue(value){
    return value*2;
}

console.log (getPrice(products, summerValue));
console.log(getPrice(products, winterValue));
console.log(getPrice(products));