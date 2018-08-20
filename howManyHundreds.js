function howManyHundreds(number){
  var checkNumber = number;
  var count;

  count = checkNumber % 100;

  return (checkNumber - count) / 100;
}

console.log(howManyHundreds(123456), "=?", 10);
