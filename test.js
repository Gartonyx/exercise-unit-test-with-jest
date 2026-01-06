const {sum, fromDollarToYen, fromEuroToDollar} =require('./app.js');

test('adds 14 +9 to equal 23',()=>{

    let total =sum(14,9);
    expect(total).toBe(23);
});

test("1 Euro should be 1.07 Dollar",function(){
    let cambioEuroDollar = fromEuroToDollar(1)
    expect(cambioEuroDollar).toBe(1.07);
})

test("3.5 Euro to be 3.75 Dollar",()=>{
    let cambioEuroDollar = fromEuroToDollar(3.5)
    let resultado=3.5
    expect(cambioEuroDollar).toBe(resultado);
})

test("5 Euro to be 782.5 Yenes",()=>{
    let totalEsperado =5/1.07
    let resultado=fromDollarToYen(5)
    expect(total).toBe(resultado);
})
