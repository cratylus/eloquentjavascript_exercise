var range = function(start,end){
  var step = arguments[2]||(start>end?-1:1);
  console.log("step:",step);
  var result = [];
  if(step>0){
    for(;start<=end;start+=step){
      result.push(start);
    }
  }else{
    for(;start>=end;start+=step){
      result.push(start);
    }
  }
  return result;
}

var sum = function(list){
  var sum = 0;
  for(var i=0;i<list.length;i++){
    sum+=list[i];
  }
  return sum;
}
    
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2));
// → [5, 4, 3, 2]