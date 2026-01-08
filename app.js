const sum = (a, b) => {
    return a + b;
};

let oneEuroIs = {
    JPY: 156.5, // yen japonés
    USD: 1.07,  // dólar
    GBP: 0.87   // libra
};

const fromDollarToYen = (dollarAm) => {
    return (dollarAm / oneEuroIs.USD) * oneEuroIs.JPY;
};

const fromEuroToDollar = (euroAm) => {
    return euroAm * oneEuroIs.USD;
};

const fromYenToPound = (yenAm) => {
    return (yenAm / oneEuroIs.JPY) * oneEuroIs.GBP;
};

module.exports = {sum,fromDollarToYen,fromEuroToDollar,fromYenToPound};
