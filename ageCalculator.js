function ageCalculator(name, yearOfBirth, currentYear){
  var personName = name;
  var personYear = yearOfBirth;
  var nowYear = currentYear;

  return personName + " is " + (nowYear - personYear) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));