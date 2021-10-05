class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min =args[0]
      for(let item of args){
        if(item < min){
          min = item
        }
      }
      return min
    }
  }