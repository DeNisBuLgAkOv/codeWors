function invert(array) {
    let arr =[]
    if(array === null){
      return []
    }
    for(let item of array){
      if(item>=0){
        arr.push(-item)
      }
      else{
        arr.push(-item)
      }
    }
    
     return arr;
  }