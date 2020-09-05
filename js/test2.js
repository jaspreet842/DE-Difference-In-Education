var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["Which of the following is FALSE about arrays on Java", "Length of array can be changed after creation of array", "A java array is always an object", "Arrays in Java are always allocated on heap", "All are true", "A"],
    ["Which of the following statements is/are TRUE regarding JAVA ? (a) Constants that cannot be changed are declared using the ‘static’ keyword. (b) A class can only inherit one class but can implement multiple interfaces.", "Only a is true", "Only b is true", "Both a and b are true", "None is true", "B"],
    ["In Java, can we make functions inline like C++?", "Sometimes", "Always", "Never", "Depends on compiler", "C"],
    ["Assuming that arbitrarily large integers can be passed as a parameter to the function, consider the following statements.<br>1. The function f terminates for finitely many different values of n ≥ 1.<br>ii. The function f terminates for infinitely many different values of n ≥ 1.<br>iii. The function f does not terminate for finitely many different values of n ≥ 1.<br>iv. The function f does not terminate for infinitely many different values of n ≥ 1.<br>Which one of the following options is true of the above?", "i and iii", " i and iv", "ii and iii", "ii and iv", "D"]
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