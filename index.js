const num=[1,2,3,45,6,7,8,8]
even=""
odd="";

for(i=0;i<num.length;i++){
    if(num[i]%2==0){
even=even+num[i]+" ";
    }
    else{
        odd=odd+num[i]+" "
    }
}
console.log("even:"+even)
console.log("odd:"+odd)