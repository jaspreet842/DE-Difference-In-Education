var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ["One of the following is true for an inline function.", "It executes faster as it is treated as a macro internally", "It executes faster because it priority is more than normal function", "It doesn’t executes faster compared to a normal function", "None of the above holds true for an inline function", "A"],
    ["A user defined header file is included by following statement in general.", "#include file.h ", "#include &ltfile.h&gt", "#include &ltfile&gt", "#include “file.h”", "D"],
    ["What is the output of the following program? <br><code>#include<iostream><br>using namespace std;<br>main() {<br>   char s[] = 'Fine';<br>	*s = 'N';<br> cout<<s<<endl;<br>}</code><br> Ignore the Error related to Quote", "Five", "Nine", "Compile Error", "Runtime Error", "B"],
    ["HAS-A relationship between the classes is shown through.", "Inheritance", "Polymorphism", "Container Classes", "None Of The Above", "C"]
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