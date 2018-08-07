function wave(a){
    var task={
        str:a.toLowerCase(),
        result:[],
        position:function(){
            for(var i=0;i<this.str.length;i++){
                this.result.push(`${this.str.slice(0,i)}${this.str[i].toUpperCase()}${this.str.slice(i+1)}`);
             
            }
            return this.result;
        }
    }
   return task.position();

}
console.log(wave('hello'));
console.log(wave('Gap'));




