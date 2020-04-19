arr = [];

for(var i = 0; i<1000; i++){
    arr[i]= 1;
};

function walkIn(arr){
    for(var key in arr){
        arr[key]++;
    }
};

function walkLength(arr){
    for (var i = 0; i < arr.lenght; i++){
        arr[i]++;
    }
};

function bench(f){
    var date = new Date();
    for (var i = 0; i < 10000; i++){
        f(arr);
    }
    return new Date() - date;
}

// console.log('Time walkIn: ' + bench(walkIn) + 'ms');
// console.log('Time walkLength: ' + bench(walkLength) + 'ms');



const performance = require('perf_hooks').performance;

var t0 = performance.now();
walkIn(arr);
var t1 = performance.now();
console.log('Performance of walkIn: '+(t1-t0)+ " ms");

var t2 = performance.now();
walkLength(arr);
var t3 = performance.now();
console.log('Performance of walkLength: '+(t3-t2)+ " ms");


