const a = [1, 2, 3, 4, 5, 6];
const b = [4, 4, 5, 6, 7, 8];

function uniao(a:number[],b:number[]){
        
 
       let inArray = false
     for(let i = 0; i <= b.length; i++){
         for(let j = 0; j <= a.length; j++){
                if(b[i] == a[j]){
                    inArray = true
                }
         }

         if(!inArray){
             a.push(b[i])
         }
         else{
             inArray = false
         }
     }
     return a
}
console.log(uniao(a,b))