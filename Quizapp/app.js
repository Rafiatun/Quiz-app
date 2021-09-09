class Question {
    constructor(text, choice, answer) {
        this.text = text;
        this.choice = choice;
        this.answer = answer;
    }
    correctanswer(choice) {
        return choice == this.answer;
    }
}


class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getquestionIndex() {
        return this.questions[this.questionIndex];
    }
    quizended() {
        return this.questions.length === this.questionIndex;
    }
    guess(answer) {
        
        if (this.getquestionIndex().correctanswer(answer)) {
            this.score++;
        };
        this.questionIndex++;
    }
}



function populate(){
    if (quiz.quizended()){
        showscore();


    }

    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getquestionIndex().text;

        var choices = quiz.getquestionIndex().choice
        for(var i=0 ; i<choices.length ; i++){
            var element=document.getElementById('choice' + i);
            element.innerHTML=choices[i];
            guess("bt"+ i , choices[i]);
        }

        showProgress();

    }
};

function guess(id , guess){

    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){

    var currentQuesNum = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuesNum + "of " + quiz.questions.length;

};


function showscore(){
    var gameover= "<h1> Result </h1>";
    gameover+="<h2 id='score'> Your score : " + quiz.score + "</h2>"
    var element=document.getElementById('quizbox')
    element.innerHTML = gameover;

}

var questions = [   
            new Question("What is the maximum possible length of an identifier?" ,["31 characters","63 characters","79 characters","Identifiers can be of any length."] ,"Identifiers can be of any length."),
            new Question("Given a function that does not return any value, What value is thrown by default when executed in shell. " ,["Int","bool","void","none"], "none"),
            new Question("What is the value of the following expression? 8/4/2, 8/(4/2) The above expressions are evaluated as: 2/2, 8/2, which is equal to (1.0, 4.0)." ,["(1.0, 4.0)" ,"(1.0, 1.0)","(4.0, 1.0)","(4.0, 4.0)"],"(1.0, 4.0)") 
        ];

var quiz = new Quiz(questions);

populate();