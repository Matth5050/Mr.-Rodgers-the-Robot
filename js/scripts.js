// Business Logic

function numToSpeech(inputArray) {
  let testArray = inputArray;
  let outputArray = [];
  testArray.forEach(function(element) {
    let num = element.toString();
    if (num.includes(3)) {
      outputArray.push('"Won\'t you be my neighbor?"')
    } else if (num.includes(2)) {
      outputArray.push('"Boop!"')
    } else if (num.includes(1)) {
      outputArray.push('"Beep!"')
    } else {
      outputArray.push(num)
    }
  });
  return outputArray.join(', ');
};

function beepBoop(input) {
  let sum = -1;
  let newArray = [];
  for (i = -1; i < input; i++) {
    
    newArray.push(sum += 1)
  }
  return numToSpeech(newArray);
}

// UI Logic

$(document).ready(function() {
  $('form#form').submit(function(event) {
    event.preventDefault();
    console.log('ehy');
    const numInput = $('#input1').val();
    $('.numOutput').text(beepBoop(numInput));
  })
})



