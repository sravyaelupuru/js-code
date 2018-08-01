var arr1=[10,20,30];
var arr2=[10,20,30,40];
function sumArray(arr1,arr2){
    var result=[];
  for(var i=0;i<Math.max(arr1.length,arr2.length);i++){
   result.push((arr1[i]||0)+(arr2[i]||0));
  }
  return result;
}
console.log(sumArray(arr1,arr2));