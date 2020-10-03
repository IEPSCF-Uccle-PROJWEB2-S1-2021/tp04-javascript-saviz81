function minimum(a,b){
let min;
if(a<=b){
  min=a;
}
else{
  min=b;
}
return min;
}
function maximum(a,b){
  let max;
  if(a>=b){
max=a;
  }
  else{
    max=b;
  }
  return max;
}
let x=function reduce(numbers,fn){
  if(numbers.lenght<2){
    return null;
    }
    else{
      let result=fn(numbers[0],numbers[1]);
      if(numbers.length>2);
      for(let i=2; i<numbers.length; i++){
         result=fn(numbers[i],result);
    }
   return result;
  }
}
let y=function filter(numbers,fn){
 let x=[];
 let j=0
  for (let i=0;i<numbers.length;i++){
   if(fn(numbers[i])===true){

        x[j]=numbers[i];
        j++;
      }
     }
     return x;
}
let myTestNumbers=[5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377];
console.log(x(myTestNumbers,minimum));
console.log(x(myTestNumbers,maximum));
;
console.log(y(myTestNumbers,a => { if(a>=30){return true;}}));




