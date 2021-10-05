function usdcny(usd) {
    let res =''
    let uan = usd*6.75 
    let arr = uan.toString().split('.').map(elem => +elem)
    if(arr[1] === undefined){
        res = arr[0]+'.00'+' '+'Chinese Yuan'
        return res
    }
    else if(arr[1]<=9){
       res = uan +'0'+ ' '+'Chinese Yuan'
      return res
    }
    return uan+ ' ' +'Chinese Yuan'
    
  }
  
  console.log(usdcny(6654))