function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return  Math.floor((marks.reduce((accum,elem)=> accum +=elem))/marks.length)
  }