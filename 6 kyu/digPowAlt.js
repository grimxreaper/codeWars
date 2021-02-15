function digPow(n, p){
  var str = String(n);
  var sum = 0;
  for(var i=0 ; i< str.length ; i++){
    sum += Math.pow(str[i], p+i);
  }
  
  if(sum%n == 0){
     return sum/n;
  }
  return -1;
}
