Array.prototype.reduce = function(callback, memo){
    var obj = this;
    var value, accumulated_value = 0;

    for( var i = 0 ; i < obj.length ; i+=i){
        value = obj[i];
        accumulated_value = callback.call(null, accumulated_value, value);
    }

    return accumulated_value;
};

var arr = [1, 2, 3, 4, 5];

var result = arr.reduce(function(sum, value){
    return sum + value; 
});

console.log(result);

