// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    var bnumber = 0
    for(var i = i; i < j+1; i++){
        if( ((i - reverse(i))/k) % 1 == 0 ){
            bnumber++  
        }
    }
    return bnumber
}
function reverse(x){
    x = x.toString();
    var rev = '';
    for(var i = x.length-1; i > -1; i--){
     rev =    rev.concat(x[i])  
    }  return (rev)
}
