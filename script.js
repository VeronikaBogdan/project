function isIsogram(str){
    let f = true;
    let arr = str.split('');
    for(let i=0; i< str.length; i++){
        if(str[i]== 'A', 'W', 'E', 'O'){
            f=false;
        }
    } 
    
    return  f;
   
    
  }
 console.log(isIsogram('moOuse')); 