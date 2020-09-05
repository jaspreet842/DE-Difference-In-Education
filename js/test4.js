var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["Which of the following commands will create a list?", "list1 = list()", "list1 = []", "list1 = list([1, 2, 3])", "all of the mentioned", "D"],
    ["What is the output when we execute list(“hello”)?", "[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]", "[‘hello’]", "[‘llo’]", "[‘olleh’]", "A"],
    ["Suppose list1 is [4, 2, 2, 4, 5, 2, 1, 0], Which of the following is correct syntax for slicing operation?", "print(list1[0])", "print(list1[:2])", "print(list1[:-2])", "All of the above", "D"],
    ["Suppose list1 is [2, 33, 222, 14, 25], What is list1[:-1]?", "[2, 33, 222, 14]", "Error", "25", "[25, 14, 222, 33, 2]", "A"]
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