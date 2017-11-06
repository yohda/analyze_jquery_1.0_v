Array.prototype.map = function(callback){
    var obj = this;
    var value, mapped_value;
    var A = new Array(obj.length);

    for(var i = 0 ; i < obj.length ; i+=1){
        value = obj[i];
        mapped_value = callback.call(null, value);
        A[i] = mapped_value;
    }

    return A;
}

// var arr = [1, 2, 3];

// var newArr = arr.map(function(element){
//     return element + 1;
// });

// console.log(newArr);