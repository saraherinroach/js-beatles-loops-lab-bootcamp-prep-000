function theBeatlesPlay (musician,instrument) {
  var theBeatlesPlay = [];
  for (var i = 0;i<4;i++) {
    theBeatlesPlay[i]=`${musician[i]} plays ${instrument[i]}`
  }
  return theBeatlesPlay
  }
  
  function johnLennonFacts (facts) {
    var countdown = facts.length;
    var i = 0;
    while (countdown>0) {
      facts[i]+"!!!";
      i++;
      --countdown;
      return johnLennonFacts
    }
  }