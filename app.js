const sum =(a,b)=>{
    return a+b
}

console.log(sum(7,3))
module.exports ={sum};


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen =(dolarAm)=>{
    return (dolarAm/oneEuroIs.USD)*156.5

}
const fromEuroToDollar =(euroAm)=>{
    return euroAm*oneEuroIs.USD
}
const fromYenToPound =(yenAm)=>{
    
    let valueInPound=(valueInPound.JPY)*oneEuroIs.GBP
    return valueInPound;
}

module.exports={sum,fromDollarToYen,fromEuroToDollar,fromYenToPound};