// soluction code
function totalize(basket){
  // if(basket.length == 0)
  //   return 0;
  // let total = 0.0;
  // basket.forEach(item =>   total += item.unitPrice * item.quantity);
  // return total;
  return basket.reduce((total,item) => total += item.unitPrice * item.quantity,0);
}

module.exports = totalize;