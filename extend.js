function extend(obj, prop){
    if( !prop ) { prop = obj; obj = this; }
    for( var i in prop ) obj[i] = prop[i];
    return obj;
}