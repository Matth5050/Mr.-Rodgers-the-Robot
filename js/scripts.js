function beepBoop(input) {
  let sum = -1;
  let newArray = [];
  for (i = -1; i < input; i++) {
    
    newArray.push(sum += 1)
  }
  return(newArray);
}

function numToSpeech() {
  let testArray = [0,1,2,3,4,5,6,7,8,9,10];
  let outputArray = [];
  testArray.forEach(function(element) {
    let num = element.toString();
    if (num.includes(3)) {
      outputArray.unshift("Won't you be my neighbor?")
    } else if (num.includes(2)) {
      outputArray.unshift("Boop!")
    } else if (num.includes(1)) {
      outputArray.unshift("Beep!")
    } else {
      outputArray.unshift(num)
    }
  });
  console.log(outputArray.reverse());
};

numToSpeech();