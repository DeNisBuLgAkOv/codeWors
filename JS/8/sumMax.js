function sumMix(x){
    let arr = x.map(elem => +elem)
    let sum =0
    for(let item of arr){
      sum += item
    }
    return sum
  }