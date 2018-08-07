function stringChop(a,b){
	var chop={
     result:[],
     x:a,
     y:b,
    
    strchop:function(){
	if(this.y==undefined){
        this.result.push(`${this.x}`);
        
}else{
	for(var i=0;i<this.x.length;i++){
		this.result.push(this.x.slice(0,this.y));
		this.x=this.x.slice(this.y);
    }

	this.result.push(this.x);
}
return this.result;
}
    }
  return chop.strchop();
}
console.log(stringChop('resource')); 
console.log(stringChop('resource',2));
console.log(stringChop('resource',3));  