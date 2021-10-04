function highAndLow(numbers){
    // ...
    let arr = numbers.split(' ').map(elem => +elem)
    let max = arr[0]
    let min = arr[0]
    for(let i = 0; i < arr.length; i++){
      if(arr[i]>max){
        max = arr[i]
      }
      
    }
      for(let i = 0; i < arr.length; i++){
      if(arr[i] < min){
        min = arr[i]
      }
      
    }
    return `${max} ${min}`
  }