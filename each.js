function each(obj, fn, args){
    if(obj.length == undefined) // 그냥 객체일 때
        for(var i in obj)
            fn.apply(obj[i], args || [i, obj[i]]);
    else                        // 유사 배열 객체이거나 배열일때
        for(var i = 0 ; i < obj.length ; i+=1)
            fn.apply(obj[i], args || [i, obj[i]]);
    
    return obj;
}