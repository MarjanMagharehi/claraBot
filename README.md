# claraBot - the simple chatbot 
## The process of developing a simple chatbot
1. I began by gathering through information that I could on the Angular framework, and spent some time interacting with it, by building a simple app. 
2. I followed up by going through the set up and tutorial for the Bot Framework from Azure. 
3. I tried to follow a few tutorials on how to build a simple chatbot, via youtube to get a feel of what could be developed.
4. I then decided to create a chatbot which worked on a series of if-else statements using JavaScript, HTML and CSS. 

* I also created the UI for the look of the chatbot, as close to the expressed example as possible. That is in this [repo](https://github.com/MarjanMagharehi/claraBotUI). 

* My next port of call, with more time, would be to merge the desired UI with the functionality of this simple chatbot. 
    - This would include making some changes to the JavaScript code. 
    - For example, it would no longer be `output.innerHTML` as you would want to send the output and user inputs in separate _messages_. 


* Similarly, I planned to add some unit tests with Jasmine, however with the focus on the UI and the many variations of chatbot that I built pre-clara, it is not yet tested. 

* I also plan on integrating an API (such as the **WebKnox Question-Answering API**), to move away from if-else statements, which would give it a more realistic chatbot feel. 

### Using claraBot 

* There are a total of 4 questions that Clara will ask you. Just answer them as they come. 
* To clear the field, wait until the answer has been logged by the bot and click off of the input field and then back on the input field, and it will clear. 
* There is a 2 second waiting period between each response and each new question. 