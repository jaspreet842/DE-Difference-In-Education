var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["What will be the output of the following Python code? <br><br><code>lst = [1, 2, 3]<br>lst[3]</code>", "NameError", "ValueError", "IndexError", "TypeError", "C"],
    ["What will be the output of the following Python code?<br><code>t[5]</code>", "NameError", "ValueError", "IndexError", "TypeError", "B"],
    ["What will be the output of the following Python code, if the time module has already been imported?<br><code>4 + '3'</code>", "NameError", "ValueError", "IndexError", "TypeError", "D"],
    ["5. What will be the output of the following Python code?<br><code>int('65.43')</code>", "NameError", "ValueError", "IndexError", "TypeError", "B"]
];

function _(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h1>You got " + correct + " of " + questions.length + " questions correct</h1>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "<h1>Question " + (pos + 1) + " of " + questions.length + "</h1>";
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h2>" + question + "</h2>";
    test.innerHTML += "<h3><input type='radio' name='choices' value='A'> " + chA + "<br></h3>";
    test.innerHTML += "<h3><input type='radio' name='choices' value='B'> " + chB + "<br></h3>";
    test.innerHTML += "<h3><input type='radio' name='choices' value='C'> " + chC + "<br></h3>";
    test.innerHTML += "<h3><input type='radio' name='choices' value='D'> " + chD + "<br><br></h3>";
    test.innerHTML += "<button onclick='checkAnswer()'><h3>Submit Answer</h3></button>";
}
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][5]) {
        correct++;
    }
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);