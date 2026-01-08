const {sum,fromDollarToYen,fromEuroToDollar,fromYenToPound
} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("1 Euro should be 1.07 Dollar", () => {
    let cambioEuroDollar = fromEuroToDollar(1);
    expect(cambioEuroDollar).toBe(1.07);
});

test("1 Dollar should be 156.5 Yen", () => {
    let cambioDolarYen = fromDollarToYen(1);
    expect(cambioDolarYen).toBeCloseTo(156.5 / 1.07, 5);
});

test("1 Yen should be 0.00556 GBP", () => {
    let cambioYenLibra = fromYenToPound(1);
    expect(cambioYenLibra).toBeCloseTo(0.00556, 5);
});
