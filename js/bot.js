var questions = [
  'Whats your name ?',
  'Where are you from?',
  'What\'s your age?',
  'Your field of working/Learning',
  'Do you have any Questions',
  'It was nice talking you :)'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;
  if (inputBox.value == "") {
  }
  else {
    if (num == 0) {
      output.innerHTML = `Hii ${input}!`;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "Wait for 2 secs");
      ++num;
      setTimeout(changeQuestion, 2000);
    } else if (num == 1) {
      output.innerHTML = `${input} must be a good place`;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "Wait for 2 secs");
      ++num;
      setTimeout(changeQuestion, 2000);
    } else if (num == 2) {
      output.innerHTML = `So you are ${2020 - input} born`;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "Wait for 2 secs");
      ++num;
      setTimeout(changeQuestion, 2000);
    } else if (num == 3) {
      output.innerHTML = `${input} is an awesome field`;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "Wait for 2 secs");
      ++num;
      setTimeout(changeQuestion, 2000);
    }
    else if (num == 4) {
      output.innerHTML = `You can Send Further Questions via mail`;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "Wait for 2 secs");
      ++num;
      setTimeout(changeQuestion, 2000);
    }
  }
}

function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if (num == 5) {
    inputBox.style.display = "none";
  }
}

$(document).on('keypress', function (e) {
  if (e.which == 13) {
    showResponse();
  }
})

$("#ans").focus();

$(".container").click(() => {
  $('#chatBody').hide();
});

$("#botButton").click((event) => {
  $("#chatBody").show();
  event.stopPropagation();
});