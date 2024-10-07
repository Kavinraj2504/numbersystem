const num=[3,7,2,15,9,20,5,14,12,1,8,11,6,19,4,10,17,13,16,18]
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
