var Counter = function(count){
    this.count = count;
}

Counter.prototype.getCount = Counter.getCount = function(){
    return this.count;
}

var ct1 = new Counter(2);
// console.log(ct1.getCount());

var PrivateCounter = (function(){
    var count = 0, 
        Counter;

    Counter = function(cnt){ count = cnt};
    
    Counter.prototype.getCount = Counter.getCount = function(){
        if(this.constructor === Function){
             console.log('Function');   
        }else{
             console.log('Counter');
        }
            
        return count;
        
    }
    
    return Counter;
}());

console.log(PrivateCounter.getCount());
var priCnt = new PrivateCounter(2);
console.log(priCnt.getCount());
console.log(PrivateCounter.getCount());



