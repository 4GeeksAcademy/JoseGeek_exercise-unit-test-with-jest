
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToJapanYen = function(valueInDollar){
    let valueInJapanYen = Math.round(valueInDollar * 106.58);
    return valueInJapanYen;
}

const fromYenToPounds = function(valueInYen){
    let valueInPounds = Math.round(valueInYen * 0.00625);
   return valueInPounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToJapanYen, fromYenToPounds }


