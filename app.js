const sum = (a,b) => {
    return a + b
}


const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    let dollarToEuro = valueInDollar / 1.2;
    let dollarToYen = dollarToEuro * 127.9;
    return dollarToYen;
}

const fromYenToPound = function(valueInYen){
    let yenToEuro = valueInYen / 127.9;
    let yenToPound = yenToEuro * 0.8;
    return yenToPound;
}

console.log(fromYenToPound(3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};