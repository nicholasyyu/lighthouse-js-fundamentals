function loopyLighthouse(start,end){
  var startNum = start;
  var endNum = end;

  for(var i = startNum; i <= endNum; i++){

    if(i % 12 === 0){
      console.log('LoopyLighthouse');
    }
    else if(i % 4 === 0){
      console.log('Lighthouse');
    }
    else if(i % 3 === 0){
      console.log('Loopy');
    }
    else{
      console.log(i);
    }

  }
  return i;
}
console.log(loopyLighthouse(100,200));