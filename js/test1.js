var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["How can we restrict dynamic allocation of objects of a class using new?", "By overloading new operator", "By making an empty private new operator", "By making an empty private new and new[] operators", "By overloading new operator and new[] operators", "C"],
    ["Which of the following operators cannot be overloaded", ".", "?:", "::", "All of the above", "D"],
    ["Which of the following operators are overloaded by default by the compiler in every user defined classes even if user has not written?<br><code>1) Comparison Operator ( == )<br>2) Assignment Operator ( = ) </code>", "Both 1 and 2", "Only 1", "Only 2", "None", "C"],
    ["Which of the following operators should be preferred to overload as a global function rather than a member method?", "Postfix++", "Insertion Operator<<", "Prefix ++", "Comparision Operator", "B"]
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