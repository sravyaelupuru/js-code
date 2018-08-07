function wave(a){
    var task={
        str:a.toLowerCase(),
        result:[],
        position:function(){
            for(var i=0;i<this.str.length;i++){
                if(this.str.indexOf(this.str[i])==this.str.lastIndexOf(this.str[i])){
                this.result.push(this.str.replace(this.str[i],this.str[i].toUpperCase()));
                console.log(this.result);
             }
            else{
                this.result.push(`${this.str.substr(0,i)}${this.str[i].toUpperCase()}${this.str.slice(i+1)}`);
             }
            }
            return this.result;
        }
    }
   return task.position();

}
console.log(wave('hello'));
console.log(wave('Gap'));
/*console.log(wave('hello'));
var msg='hello';
function hello(a){
    
    var result=[];
       
        for(i=0;i<=a.length;i++){
        
        var b=a.slice(0,i);
        var c=a.slice(i);
        
        result.push(`${b[i].toUpperCase()}${b.slice(1)}`);
        }
            
            
        
          return result;
        }




console.log(hello(msg));*/