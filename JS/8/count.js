function countPositivesSumNegatives(input) {
    let arr =[]
    let one = 0
    let two = 0
    for(let item of input){
      if(item >0){
        one++
      }
      else{
        two = two + item
      }
    }
    arr[0]=one
    arr[1]= two
    return arr;
}