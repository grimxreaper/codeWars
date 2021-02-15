function digPow(n, p){
  var ans = n.toString().split('')
             .map((v,i) => Math.pow(parseInt(v), i+p))
             .reduce((a,b) => a+b) / n;
  return ans%1 == 0 ? ans : -1;
}
