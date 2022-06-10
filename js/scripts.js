function numToSpeech(inputArray) {
  let testArray = inputArray;
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
  return outputArray.reverse();
};

function beepBoop(input) {
  let sum = -1;
  let newArray = [];
  for (i = -1; i < input; i++) {
    
    newArray.push(sum += 1)
  }
  console.log(numToSpeech(newArray));
}





