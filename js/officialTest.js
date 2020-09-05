var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["What is 10 + 4?", "12", "14", "16", "15", "B"],
    ["What is 20 - 9?", "7", "13", "11", "12", "C"],
    ["What is 7 x 3?", "21", "24", "25", "19", "A"],
    ["What is 8 / 2?", "10", "2", "16", "4", "C"]
];
function _(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];

    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' > " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' > " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' > " + chC + "<br>";
    test.innerHTML += "<input type='radio' name='choices' > " + chD + "<br><br>";
    test.innerHTML += "<input type='text' name='fin_ans'  placeholder='Your Answer Here!'><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {

}
window.addEventListener("load", renderQuestion, false);