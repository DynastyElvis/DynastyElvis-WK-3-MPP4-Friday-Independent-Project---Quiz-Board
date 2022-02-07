 /* Friday: Independent Project - Quiz Board

## KIPKEMOI RONO ELVIS

MORINGA SCHOOL MPP4 ACCESS

SOFTWARE DEVELOPMENT*/


//THE BEGINING OR HEAD

function ELVISscore() { //THE FUNCTION CALLED ELVIS SCORE

var myScore = 0; //ZERO SCORE



//stores the quiz answers
// THE BEGINNING OF THE  VARIABLE CONDITIONS 
var answer1 = document.questions.q1.value; // QUE 1 TO 4
var answer2 = document.questions.q2.value;
var answer3 = document.questions.q3.value;
var answer4 = document.questions.q4.value;

//these are the correct answers for the quiz

//VARIABLE SOLUTIONS PREFERERED
var result  = document.getElementsById('result');


//THE BEGINNING OF SOLUTIONS DOC VARIABLE 
if (answer1=="It is a scripting language used to create interactivity in web pages."){myScore+=10};
if (answer2=="false"){myScore+=10};
if (answer3=="non of the above"){myScore+=10};
if (answer4=="I dont know"){myScore+=10};
//THE END OF THE ANS VARIABLE DOC


  
   result.textContent = myScore;
  if (myScore==80) { //CONDITIONS
    alert("YOU HAVE SUCESSFULLY SUBMITTED YOUR ANSWER");
    result.textContent="CONGRATULATIONS!! YOU SCORED 100%. REMARKS: EXCELLENT."; //EXCELLENT PERFOMANCE
  } 
  else if (myScore==50) {
    alert("YOU HAVE SUCESSFULLY SUBMITTED YOUR ANSWER");
    result.textContent="CONGRATULATIONS!! YOU SCORED " + myScore/6*100 + "%" + ". REMARKS: EXCELLENT.";
//CONDITIONS
  }
  else if (myScore<50) {
  alert("YOU HAVE SUCESSFULLY SUBMITTED YOUR ANSWER");
  result.textContent="POORLY DONE. PLEASE RETAKE "; //POOR PERFOMANCE
  }
  }
  //THE END OF THE PROGRAM
