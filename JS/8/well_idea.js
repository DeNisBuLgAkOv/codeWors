function well(x){
    let kol =0
    for(let item of x){
      if(item ==='good'){
          kol++
      }
    }
    if(kol === 0 ){
      return 'Fail!'
    }
     else if(kol <=2 ){
      return  'Publish!'
    }
      else{
      return 'I smell a series!'
    }
  }