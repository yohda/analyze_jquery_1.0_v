// 요구 사항 : Calculate클래스를 만들어라.
// 1. 덧셈, 뺄셈, 곱셈, 나눗셈등이 처리되어야 한다.
// 2. 비공개 스태틱이 구현되어야 한다.
//    즉, 2개의 수를 주거나 전달받은 한 객체에 2개의 값을 가지고 있을 때 그 값들에 대해서 수행해야 한다.
// 
// 3. 생성자 함수로 만들어서 비공개 스태틱과 비슷한 실행을 해야한다.
// 4. 최종 연산으로 result함수 또는 result메소드를 호출해야 값을 반환한다.
// 5. 스태틱이 아닌 객체일 경우 a, b, result라는 프로퍼티가 있을 경우 그 값들을 통해서 result없이도 반영한다.
// 6. 어떻한 순서로든 실행이 가능해야 한다.

var Calculate = (function(){
    var Calculate,
        result = 0,
        calculateTemplate;

    Calculate = function(initNumber){
        result = initNumber;
    };
    
    // 테플릿 메소드 패턴
    calculateTemplate = function(calc){
        var length = this.length;
        for(var i = 0 ; i < length ; i+=1)
            calc(this[i]);
    }

    Calculate.init = function(initNumber){
        result = initNumber;

        return this;
    }
  
    // call, apply, bind를 통해서 결국 this도 파라미터 형식으로 보낼 수 있다.
    Calculate.add = function(){
        calculateTemplate.call(arguments, function(args){
            result += args;
        });
        
        return this;
    }

    Calculate.sub = function(){
        calculateTemplate.call(arguments, function(args){
            result -= args;
        })
        
        return this;
    }

    Calculate.mup = function(){
        calculateTemplate.call(arguments, function(args){
            result *= args;
        })

        return this;
    }

    Calculate.div = function(a, b){
        calculateTemplate.call(arguments, function(args){
            result /= args;
        })

        return this;
    }

    Calculate.result = function(){
        return result;
    }
    
    // Calculate.prototype.add = function(){
    //     return Calculate.add.call(this, arguments);
    // }
    Calculate.prototype.add = Calculate.add;
    Calculate.prototype.sub = Calculate.sub;
    Calculate.prototype.mup = Calculate.mup;

    Calculate.prototype.div = function(){
        return Calculate.div.call(this);
    }

    Calculate.prototype.result = function(){
        return Calculate.result.call(this);
    }

    return Calculate;
}());

// 스태틱 메소드 구현
// console.log(Calculate.init(10).add(3, 4).sub(3).result());

// 객체 프로프타입으로 구현
// var calc = new Calculate(0);
// console.log(calc.add(2, 4, 2)
//                 .sub(3)
//                 .mup(2)
//                 .result());