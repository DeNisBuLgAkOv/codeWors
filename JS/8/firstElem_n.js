function take(arr, n) {
    // Your code here
    let newArr=[]
    if(n === arr.length || n > arr.length){
      return arr
    }
    else{
    for(let i =0; i < n; i++){
      newArr.push(arr[i])
      
    }
      }
      arr = newArr
    return arr
  }