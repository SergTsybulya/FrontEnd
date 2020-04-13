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

console.log('Time walkIn: ' + bench(walkIn) + 'ms');
console.log('Time walkLength: ' + bench(walkLength) + 'ms');
