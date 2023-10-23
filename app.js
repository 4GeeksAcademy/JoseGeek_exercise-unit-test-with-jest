
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
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}




const fromDollarToJapanYen = function(valueInDollar){
    // convert the given valueInDollar to JPY
    let valueInJapanYen = Math.round(valueInDollar * 106.58);
    //return the JPY value
    return valueInJapanYen;
}




const fromYenToPounds = function(valueInYen){
    // convert the given valueInYen to Pounds
    let valueInPounds = Math.round(valueInYen * 0.00625);
    //return the Pounds value
    return valueInPounds;
}



module.exports = { sum, fromEuroToDollar, fromDollarToJapanYen, fromYenToPounds }


