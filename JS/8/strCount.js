function strCount(str, letter){  
    //code here
    let kol =0
    let arr = str.split('')
    for(let item of arr){
      if(item ===letter){
        kol++
      }
    }
    return kol
  }