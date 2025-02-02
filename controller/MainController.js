// Write the questions for the chatbot to ask the user
// An array of questions, that can be looped through

var questions = [
    'Hi, my name is Clara, what is your name?',
    'Where are you from?',
    'How old are you?',
    'What tech stack are you currently working in?',
    'Thank you for chatting with me! :)' 
];

// Set the counter for looping through the array 
var counter = 0; 

// Logic to connect the HTML element to the logic in the document
var inputBox = document.querySelector("#answer");
var output = document.querySelector("#result");
// innerHTML changes the text inline, so the questions are asked in the same place
output.innerHTML = questions[counter];

/* Currently using if-else statements to work through the questions and responses.
Would like to move onto building in an API to have more of an actual 'AI' chatbot feel.
Putting it in a function */ 

function showResponse() {
    var input = inputBox.value;
    if(inputBox.value == "") {

    }else {
        if(counter == 0) {
            output.innerHTML = "Hello " + input  + " nice to meet you";
            input = "";
            counter++;
            setTimeout(changeQuestion, 2000);
        } else if(counter == 1) {
            output.innerHTML = "Wow, " + input + " is great";
            input = "";
            counter++;
            setTimeout(changeQuestion, 2000);
        } else if(counter == 2) {
            output.innerHTML = "Cool, that means you were probably born in " + (2020 - input) + ".";
            input = "";
            counter++;
            setTimeout(changeQuestion, 2000);
        }  else if (counter == 3) {
            let Java = "Java";
            let php = "PHP";
            if (input == Java) {
              output.innerHTML = "That's rough";
            } else if (input == php) {
              output.innerHTML = `${input}?! Are you mad?`;
            } else if (input !== Java || php) {
              output.innerHTML = `Nice! ${input} is a good stack!`;
            }
        
            counter++;
            setTimeout(changeQuestion, 2000);
          }
           
            }    
        }

        // Given more time I would clean up this code, preparing less if-else statements to organise the questions for the chatbot to ask. 
        // But also wanting to input more statements, so if the user input things like ages that don't make sense, there would be a response for it. Ultimately I would use ML so that
        // it would not have to be in if-else statements.

// function to change the question, when a response has been given.
// if statement to break out of the questions given, and remove the input box
function changeQuestion() {
    output.innerHTML = questions[counter];
    if (counter == 4) { // should I move this if statement to the showResponse function?
        inputBox.style.display = "none";
    }
}


