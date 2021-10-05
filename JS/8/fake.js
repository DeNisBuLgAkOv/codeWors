function fakeBin(x){
    let arr =[]
    let num = x.split('').map(elem => +elem)
    for(let item of num){
      if(item <5){
        arr.push(0)
      }
      else{
        arr.push(1)
      }
    }
    return arr.map(elem => elem.toString()).join('')
  }