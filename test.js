

const { sum, fromEuroToDollar, fromDollarToJapanYen, fromYenToPounds } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
  const dollars = fromEuroToDollar(3.5)
  const expected = 3.5 * 1.2; 
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
});

test("One dollar should be 106.58 japan yens", function(){
  const japanYens = fromDollarToJapanYen(3.5)
  const expected = 3.5 * 106.58; 
    
   expect(fromDollarToJapanYen(3.5)).toBe(373)
});

test("One Yen should be 0.00625 Pounds", function(){
   const pounds = fromYenToPounds(3.5)
   const expected = 3.5 * 0.00625; 
    
   expect(fromYenToPounds(3.5)).toBe(0)
});