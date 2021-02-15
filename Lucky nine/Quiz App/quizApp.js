var firstQuestion = {
    AppQuestion: "What is CPU stands for?",
    choice1: "Computer Program Universe",
    choice2: "Central Processing Unit",
    choice3: "Central Program Unit",
    choice4: "Center Processing Unit",
    answer: "Central Processing Unit"

};

var secondQuestion = {
    AppQuestion: "What is GPU stands for?",
    choice1: "Graphics Processing Unit",
    choice2: "Graphics Processor Unit",
    choice3: "Game Processing Unit",
    choice4: "Graphics Process Unit",
    answer: "Graphics Processing Unit"

};

var thirdQuestion = {
    AppQuestion: "What is RAM stands for?",
    choice1: "Random Accessor Manager",
    choice2: "Random Access Manager",
    choice3: "Random Accessing Unit",
    choice4: "Random Access Memory",
    answer: "Random Access Memory"

};

var fourthQuestion = {
    AppQuestion: "What computer hardware peripheral used to control cursor?",
    choice1: "Keyboard",
    choice2: "Monitor",
    choice3: "Mouse",
    choice4: "Mouse Pad",
    answer: "Mouse"

};

var fifthQuestion = {
    AppQuestion: "What is PSU stands for?",
    choice1: "Processing System Unit",
    choice2: "Power Supply Unit",
    choice3: "Processor Supply Unit",
    choice4: "Power System Unit",
    answer: "Power Supply Unit"

};

var userChoice;
var answerKey;
var questionNumber = 1;
var delay;
var time;
var allCorrectAnswer;
var points = 0;

game();
function game()
{
    document.getElementById("userPoints").innerHTML = "Your Points: "+points+"/5";
    time = 5;
    switch(questionNumber)
    {
        case 1:
            question1();
            delay = setInterval(timesUp, 1000);
            questionNumber = 2;
            break;
        case 2:
            question2();
            questionNumber = 3;
            break;
        case 3:
            question3();
            questionNumber = 4
            break;
        case 4:
            question4();
            questionNumber = 5;
            break;
        case 5:
            question5();
            questionNumber = 6;
            break;
        default:
            //This part will end the game
           allCorrectAnswer = "Answer Key:<br>"+"1. "+firstQuestion.answer+"<br>";
           allCorrectAnswer += "2. "+secondQuestion.answer+"<br>"+"3. "+thirdQuestion.answer+"<br>";
           allCorrectAnswer += "4. "+fourthQuestion.answer+"<br>"+"5. "+fifthQuestion.answer;
           document.getElementById("allAnswer").innerHTML = allCorrectAnswer;
           clearInterval(delay);
           alert("Game Over");
           document.getElementById("questions").innerHTML = "";
           document.getElementById("btn1").innerHTML = "";
           document.getElementById("btn2").innerHTML = "";
           document.getElementById("btn3").innerHTML = "";
           document.getElementById("btn4").innerHTML = "";
           document.getElementById("timer").innerHTML = "Your Final Score is: "+points;

            

    }
}

function timesUp()
{
    document.getElementById("timer").innerHTML = "Time: "+time;
    if(time==0)
    {
        document.getElementById("timer").innerHTML = "Time's up!";
        alert("You loose!");
        questionNumber = 1;
        clearInterval(delay);
        game();
    }
    time-=1;

}

//button pressed and it will initialized its value to the userChoice variable
function ifBtn1()
{
    userChoice = document.getElementById("btn1").innerHTML;
    if(userChoice==answerKey)
    {
        document.getElementById("timer").innerHTML = "Correct!";
        points++;

    }
    else
    {
        document.getElementById("timer").innerHTML = "Wrong!";
    }
    game();
}
function ifBtn2()
{
    userChoice = document.getElementById("btn2").innerHTML;
    if(userChoice==answerKey)
    {
        document.getElementById("timer").innerHTML = "Correct!";
        points++;
    }
    else
    {
        document.getElementById("timer").innerHTML = "Wrong!";
    }
    game();
    
}
function ifBtn3()
{
    userChoice = document.getElementById("btn3").innerHTML;
    if(userChoice==answerKey)
    {
        document.getElementById("timer").innerHTML = "Correct!";
        points++;
    }
    else
    {
        document.getElementById("timer").innerHTML = "Wrong!";
    }
    game();
}
function ifBtn4()
{
    userChoice = document.getElementById("btn4").innerHTML;
    if(userChoice==answerKey)
    {
        document.getElementById("timer").innerHTML = "Correct!";
        points++;
    }
    else
    {
        document.getElementById("timer").innerHTML = "Wrong!";
    }
    game();
}

function question1()
{
    //it will output the questions
    document.getElementById("questions").innerHTML = firstQuestion.AppQuestion;

    //it will output the choices
    document.getElementById("btn1").innerHTML = firstQuestion.choice1;
    document.getElementById("btn2").innerHTML = firstQuestion.choice2;
    document.getElementById("btn3").innerHTML = firstQuestion.choice3;
    document.getElementById("btn4").innerHTML = firstQuestion.choice4;
    answerKey = firstQuestion.answer;


}

function question2()
{
    //it will output the questions
    document.getElementById("questions").innerHTML = secondQuestion.AppQuestion;

    //it will output the choices
    document.getElementById("btn1").innerHTML = secondQuestion.choice1;
    document.getElementById("btn2").innerHTML = secondQuestion.choice2;
    document.getElementById("btn3").innerHTML = secondQuestion.choice3;
    document.getElementById("btn4").innerHTML = secondQuestion.choice4;
    answerKey = secondQuestion.answer;


}

function question3()
{
    //it will output the questions
    document.getElementById("questions").innerHTML = thirdQuestion.AppQuestion;

    //it will output the choices
    document.getElementById("btn1").innerHTML = thirdQuestion.choice1;
    document.getElementById("btn2").innerHTML = thirdQuestion.choice2;
    document.getElementById("btn3").innerHTML = thirdQuestion.choice3;
    document.getElementById("btn4").innerHTML = thirdQuestion.choice4;
    answerKey = thirdQuestion.answer;


}

function question4()
{
    //it will output the questions
    document.getElementById("questions").innerHTML = fourthQuestion.AppQuestion;

    //it will output the choices
    document.getElementById("btn1").innerHTML = fourthQuestion.choice1;
    document.getElementById("btn2").innerHTML = fourthQuestion.choice2;
    document.getElementById("btn3").innerHTML = fourthQuestion.choice3;
    document.getElementById("btn4").innerHTML = fourthQuestion.choice4;
    answerKey = fourthQuestion.answer;


}

function question5()
{
    //it will output the questions
    document.getElementById("questions").innerHTML = fifthQuestion.AppQuestion;

    //it will output the choices
    document.getElementById("btn1").innerHTML = fifthQuestion.choice1;
    document.getElementById("btn2").innerHTML = fifthQuestion.choice2;
    document.getElementById("btn3").innerHTML = fifthQuestion.choice3;
    document.getElementById("btn4").innerHTML = fifthQuestion.choice4;
    answerKey = fifthQuestion.answer;


}