function defineSuit(card) {
    // good luck
   
    if(card.length <3){
      let arr = card.split('')
        if(arr[1] =='♣'){
            return 'clubs'
        }
        else if(arr[1] =='♠'){
            return 'spades'
        }
            if(arr[1] =='♦'){
            return 'diamonds'
        }
            if(arr[1] =='♥'){
            return 'hearts'
        }
    }
    else{
         let arr = card.split('')
        if(arr[2] =='♣'){
            return 'clubs'
        }
        else if(arr[2] =='♠'){
            return 'spades'
        }
            if(arr[2] =='♦'){
            return 'diamonds'
        }
            if(arr[2] =='♥'){
            return 'hearts'
        }
    }
    
  }