function ArrayRange(a,b){
    var list={
        x:a,
        y:b,
        result:[],
        range:function(){
            for(var i=this.x;i<=this.y;i++){
               this.result.push(i);
            }
            return list['result'];
        }
        
    }
     return list.range();

}
console.log(ArrayRange(-4,7));