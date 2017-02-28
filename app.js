'use strict';
//Category Arrays
var sportsQuestions = [];
var entertainmentQuestions = [];
var feminismQuestions = [];
var displayPossible = [];   // stores answers from scrambledAnswers();
var allUsers = []; // declare global for user data
var questA = '';
var questB = '';
var questC = '';
var questD = '';

function callUserData() {
  var retrievedUserData = localStorage.getItem('userData');
  allUsers = JSON.parse(retrievedUserData);
}

//Question Constructor Below This Line
function Question(question, right, wrongOne, wrongTwo, wrongThree, category) {
  this.question = question;
  this.right = right,
  this.wrongOne = wrongOne;
  this.wrongTwo = wrongTwo;
  this.wrongThree = wrongThree;
  this.category = category;
}

//Category Selector CHANGE SPORTSQUESTIONS TO CHOSENCATEGORY LATER IN FILE
var catSport = document.getElementById(/*filler*/);
catSport.addEventListener('click', categorySelector());
var catEnt = document.getElementById(/*filler*/);
catEnt.addEventListener('click', categorySelector());
var catFem = document.getElementById(/*filler*/);
catFem.addEventListener('click', categorySelector());

var chosenCategory = [];

function categorySelector(event) {
  var clickedCategory = event.target.textContent;
  if (clickedCategory === catSport.textContent) {
    chosenCategory = sportsQuestions;
  }
  if(clickedCategory === catEnt.textContent) {
    chosenCategory = entertainmentQuestions;
  }
  if(clickedCategory === catFem.textContent) {
    chosenCategory = feminismQuestions;
  }
}

//Sports Questions Below This Line
var sportOne = new Question('When did The University of Kansas last win the NCAA National Championship?', '2008', '2012', '1994', '1956', 'sports');
sportsQuestions.push(sportOne);

var sportTwo = new Question('As of June 20, 2016, how many days has it been since the Flyers won the Stanley Cup?', '15,000 days', '25,000 days', '24 days', '3,000 days', 'sports');
sportsQuestions.push(sportTwo);

var sportThree = new Question('What record number of beers did MLB Hall of Famer Wade Boggs drink in a single day?', '107', '64', '78', '33', 'sports');
sportsQuestions.push(sportThree);

var sportFour = new Question('When was the first celebratory champagne bottle pop after a motor race?', 'The 1967 24 Hours of Le Mans', 'The 1958 Monaco Grand Prix', 'The 1987 Sonoma Motor Classic Festival', 'The 1974 Monterey Motor Classic', 'sports');
sportsQuestions.push(sportFour);

var sportFive = new Question('Who is the last non-quarterback to win NFL MVP?', 'Adrian Peterson', 'Ray Lewis', 'LaDainian Tomlinson', 'Shaun Alexander', 'sports');
sportsQuestions.push(sportFive);

//Entertainment Questions Below This Line
var entertainOne = new Question('When asked what he had done with his life to merit an invitation to the Whitehouse, to which First Lady did Miles Davis respond: “Well, I’ve changed the course of music five or six times. What have you done except f**k the president?”', 'Nancy Reagan', 'Barbara Bush', 'Jackie Kennedy', 'Betty Ford', 'entertainment');
entertainmentQuestions.push(entertainOne);

var entertainTwo = new Question('In the film Pineapple Express, which Star Wars creature is referenced by James Franco during his captivity?', 'Rancor', 'Tauntaun', 'Jawa', 'Wookie', 'entertainment');
entertainmentQuestions.push(entertainTwo);

var entertainThree = new Question('Who wrote the poetry spoken in Beyonce\'s Lemonade film', 'Warsan Shire', 'Roxane Gay', 'Chiminanda Ngozi Adichi', 'bell hooks', 'entertainment');
entertainmentQuestions.push(entertainThree);

var entertainFour = new Question('In what year was Wu-Tang member Raekwon’s gold-selling “Only Built for Cuban Linx” released?', '1995', '1994', '1996', '1997', 'entertainment');
entertainmentQuestions.push(entertainFour);

var entertainFive = new Question('Which Hip-Hop artist has acted in films alongside Edward Norton, Jack Black, and Bruce Willis?', 'Mos Def', 'Ludacris', 'Queen Latifah', 'Ice Cube', 'entertainment');
entertainmentQuestions.push(entertainFive);

//Feminism Questions Below This Line
var femOne = new Question('The Equal Rights Amendment was first introduced to Congress in 1923 and intended to guarantee equal rights for women. In what year was this Amendment ratified?', 'It has not yet been ratified', '1977', '1979', '1982', 'feminism');
feminismQuestions.push(femOne);

var femTwo = new Question('Who are the current female Supreme Court members?', 'Justice Sonya Sotomayor, Justice Ruth Bader Ginsburg, Justice Elena Kagan', 'Justice Notorious R.B.G., Justice Notorious B.I.G., Justice Antonin Scalia', 'Justice Sandra Day O’Connor, Justice Sonya Sotomayor, Justice Ruth Bader Ginsburg', 'Justice Michelle Obama, Justice Condoleeza Rice, Justice Hillary Clinton', 'feminism');
feminismQuestions.push(femTwo);

var femThree = new Question('Who was the first woman to win the Nobel Prize for Science(first for Physics, then years later in Chemistry)?', 'Marie Curie', 'Ada Lovelace', 'Rachel Carson', 'Sally Ride', 'feminism');
feminismQuestions.push(femThree);

var femFour = new Question('What is Intersectional Feminism?', 'The view that women experience oppression in varying degrees of intensity.', 'Feminism at traffic intersections' , 'Feminism for cats', 'Black Lives Matter', 'feminism');
feminismQuestions.push(femFour);

var femFive = new Question('Which feminist author famously wrote, “Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.” ?', 'Audre Lorde', 'Angela Davis', 'Gloria Steinem', 'Alice Walker', 'feminism');
feminismQuestions.push(femFive);

// LOGIC
//Randomizing order of possible answers
function scrambleAnswers(i) {
  displayPossible = [];
  displayPossible.push(sportsQuestions[i].right);
  displayPossible.push(sportsQuestions[i].wrongOne);
  displayPossible.push(sportsQuestions[i].wrongTwo);
  displayPossible.push(sportsQuestions[i].wrongThree);

  var randomNum = 0;
  function numGen() {
    return randomNum = Math.floor(Math.random() * 4);
  }
  questA = '';
  questB = '';
  questC = '';
  questD = '';

  var ansA = numGen();
  questA = displayPossible[ansA];
  var ansB = numGen();
  while (ansB === ansA || ansB === ansC || ansB === ansD) {
    ansB = numGen();
  }
  questB = displayPossible[ansB];
  var ansC = numGen();
  while (ansC === ansA || ansC === ansB || ansC === ansD) {
    ansC = numGen();
  }
  questC = displayPossible[ansC];
  var ansD = numGen();
  while (ansD === ansA || ansD === ansB || ansD === ansC) {
    ansD = numGen();
  }
  questD = displayPossible[ansD];
}
//End Randomizing order of possible answers

// FUNCTIONS TO RUN GAME
function generateSports(qIndex) {
  callUserData();
  var currentQ = sportsQuestions[qIndex];
  scrambleAnswers(qIndex);

  //Add sports questions to the DOM
  var questionsAppend = document.getElementById('questions');
  questionsAppend.textContent = currentQ.question;

  //Event listeners for 'Sports' questions; can be used for all category questions
  var oldAnswerDiv = document.getElementById('answers');
  var answerParent = oldAnswerDiv.parentNode;
  answerParent.id = 'parent';
  answerParent.removeChild(oldAnswerDiv);
  var answerDiv = document.createElement('div');
  answerDiv.id = 'answers';
  answerParent.appendChild(answerDiv);

  var a1 = document.createElement('div');
  a1.id = 'answer1';
  a1.textContent = questA;
  answerDiv.appendChild(a1);

  var a2 = document.createElement('div');
  a2.id = 'answer2';
  a2.textContent = questB;
  answerDiv.appendChild(a2);

  var a3 = document.createElement('div');
  a3.id = 'answer3';
  a3.textContent = questC;
  answerDiv.appendChild(a3);

  var a4 = document.createElement('div');
  a4.id = 'answer4';
  a4.textContent = questD;
  answerDiv.appendChild(a4);

  //Event handler for above listeners
  var clickHandler = generateClickHandler(qIndex);
  answerDiv.addEventListener('click', clickHandler);
}

function generateClickHandler(qIndex) {

  return function clickHandler(event) {
    var clickedAnswer = event.target.textContent;
    var printAnswer = document.getElementById('response');

    if (clickedAnswer === sportsQuestions[qIndex].right) {
      printAnswer.textContent = 'Congrats! You got it right!';
      if (qIndex < (sportsQuestions.length - 1)) {
        generateSports(qIndex + 1);
      } else {
        window.location.replace('about.html');
      }
    } else if (clickedAnswer === sportsQuestions[qIndex].wrongOne || clickedAnswer === sportsQuestions[qIndex].wrongTwo || clickedAnswer === sportsQuestions[qIndex].wrongThree) {
      printAnswer.textContent = 'Sorry, that\'s not the right answer';
      if (qIndex < (sportsQuestions.length - 1)) {
        generateSports(qIndex + 1);
      } else {
        window.location.replace('about.html');
      }
    } else {
      alert('Please choose an answer.');
    }
  };
}

generateSports(0);

