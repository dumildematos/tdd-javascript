const assert = require('assert');
const totalize = require('../shopping_basket')

describe('Shopping Basket total', () => {
  
  it('is zero when basket is empty', () => {
    const basket = [];
    assert.equal(totalize(basket), 0.0);
  });

  it('is unit price of single item basket', () =>{
    const basket = [
      {unitPrice: 10.0, quantity: 1}
    ];
    assert.equal(totalize(basket), 10.0)
  });

  it('is unit price * quantity of single item', () => {
    const basket = [
      {unitPrice: 10.0, quantity: 2}
    ];
    assert.equal(totalize(basket), 20.0)
  });

  it('is sum of unit price * quantity for all items', () => {
    const basket = [
      {unitPrice: 10.0, quantity: 1},
      {unitPrice: 20.0, quantity: 2}
    ];
    assert.equal(totalize(basket), 50.0);
  });

})