function isPalindrome(x) {
    // your code here
    let str = x.toLowerCase()
    let len = Math.floor(str.length/2)
    for(let i=0; i < len; i++){
      if(str[i] !==str[str.length-i-1]){
        return false
      }
    }
    return true
  }