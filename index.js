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
    facts[i] = `${facts[i]}!!!`;
    i++;
    --countdown;
  }
  return facts
}

function iLoveTheBeatles(number) {
  var love = [];
  var count = 0
  do {
    love.push('I love the Beatles!');
    count++;
  } while (count<15)
}
