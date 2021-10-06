var min = function(list){
    let mi =list[0]
      for(let i=0; i < list.length;i++){
          if(mi > list[i]){
            mi= list[i]
          }
        list[0] =mi
      }
      return list[0];
  }
  
  var max = function(list){
        let ma =list[0]
      for(let i=0; i < list.length;i++){
          if(ma < list[i]){
            ma= list[i]
          }
        list[0] =ma
      }
      return list[0];
  }