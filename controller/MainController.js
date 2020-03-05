// Write the questions for the chatbot to ask the user
// an array of questions, that can be looped through

var questions = [
    'Hi, my name is Clara, what is your name?',
    'Where are you from?',
    'How old are you?',
    'What tech stack are you currently working in?',
    'Thank you for chatting with me! :)' 
];

// set the counter for looping through the array 
var counter = 0; 

// logic to connect the HTML element to the logic in the document
var inputBox = document.querySelector("#answer");
var output = document.querySelector("#result");
// innerHTML changes the text inline, so the questions are asked in the same place
output.innerHTML = questions[counter];