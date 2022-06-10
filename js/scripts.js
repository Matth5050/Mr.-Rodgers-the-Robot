// Utility Logic
function filter() {
  const name = $('input#nameInput').val();
  if ( isNaN(name) === true) {
    return true
  }
}

const negitiveText = "Mr. Rodgers the Robot doesn't like Negativity"


// function numFilter() {
//   const num = $('input#input1').val();
//   if (Number(num) === true && !num.includes('-')) {
//     return true;
// } else if (Number(num) === true && num.includes('-')) {
//     return "Mr. Rodgers the Robot doesn't like negativity!"
// } else {
//   return false;
// }
// }

// Business Logic

function numToSpeech(inputArray) {
  let testArray = inputArray;
  let outputArray = [];
  const name = $('input#nameInput').val();
  testArray.forEach(function(element) {
    let num = element.toString();
    if (num.includes(3) && filter() === true) {
      outputArray.push('"Won\'t you be my neighbor, ' + name + ' ?')
    } else if (num.includes(3)) {
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
  if (input.includes('-') === true) {
    $('.numOutput').text(negitiveText);
  } else{
  let sum = -1;
  let newArray = [];
  for (i = -1; i < input; i++) {
    newArray.push(sum += 1)
  }
  return numToSpeech(newArray);
}
}

function revBeepBoop(input) {
  if (input.includes('-') === true) {
    $('.revNumOutput').text(negitiveText);
  } else{
  let sum = -1;
  let newArray = [];
  for (i = -1; i < input; i++) {
    newArray.push(sum += 1)
  }
  return numToSpeech(newArray.reverse());
}
}
// UI Logic

$(document).ready(function() {
  $('button#btn2').click(function(event) {
    event.preventDefault();
    $('.revNumOutput').show();
  })
  
  $('form#form').submit(function(event) {
    event.preventDefault();
    const numInput = $('#input1').val();
    $('.numOutput').text(beepBoop(numInput));
    $('.revNumOutput').text(revBeepBoop(numInput));
    $('.revNumOutput').hide();
    $('form#form')[0].reset();
  })
})



