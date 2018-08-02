function putDash(a){
	var result='';
	var b=a.split('');
	if(a.length==1){
		return a;
	}
	for(var i=0;i<b.length;i++){
		
			if(b[i]%2==0&&b[i+1]%2==0){
			result=result+b[i]+'-';
		}else if(b[i]%2==0||b[i+1]%2==0){
			result+=b[i];
		}
		else{
			result=result+b[i];
	}
		
	}
		return result;
	}
console.log(putDash('025468'));