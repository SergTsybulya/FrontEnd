var x = 1;

function rec(){
    x++;
    console.log(x);

    return (x>10) ? 'Enough' :

    rec();
}



function factorial(n){
    return (n !=1) ? n * factorial(n-1): 1;
}

function factorial(n){
    return n ?  n * factorial(n-1): 1;
}

function fib(n){
    return (n<=1) ? n : fib(n-1)+fib(n-2);
}

function pow(x,n){
    if (n!=1){
      return x*pow(x, n-1);
      }else{
        return x;
        }
    }
    
console.log(pow(2,3));

console.log(fib(8));

console.log(factorial(5));

console.log(rec());


