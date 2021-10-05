function multipleOfIndex(array) {
    // good luck
    let arr =[]
    for(let i =0; i < array.length; i++){
        if(array[i] % i == 0){
            arr.push(array[i])
        }
    }
    return arr
  }