function snapCrackle(maxValue){
    let x='';
    for (let i = 1; i<= maxValue;i++){
        
        if (i%2!==0 && i%5===0){
            x +=('SnapCrackle, ');
            
        }
    
         else if(i%2!==0 ){
          x += 'Snap, '}
       
           
           else if (i%5===0){
              x +='Crackle, ';
            }
        

        else { 
            x += i+', ';
            
        }
 
    }
    return x;
}  console.log(snapCrackle(12))


