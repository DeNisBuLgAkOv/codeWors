function divisibleBy(numbers, divisor){
    let arr=[]
      for(let item of numbers ){
        if(item % divisor ==0){
            arr.push(item)
        }
      }
    return arr
  }