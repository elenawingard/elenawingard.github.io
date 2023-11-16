// query selector can find elements, classes, ids 
const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-answer').addEventListener('click', displayAnswer);

 // this display quote needs a parameter 
 const questionTxt = document.querySelector('#js-quote-text');
 
 let answerTxt = document.querySelector('#js-answer-text');

let answer = '';


const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

// function get quote 
async function getQuote() {
    // console.log('test');

    try {
        // code that we want to try to run 
        const response = await fetch(endpoint);
        // ! means not okay; inverse 
        if (!response.ok) {
            throw Error(response.statusText);
         }
         const json = await response.json();
         // console.log(json['question']);
         displayQuote(json['question']);
         answer = json['answer'];
         answerTxt.textContent = '';
        }
        catch(err) {
        // this will run if something is wrong 
        console.log(err);
        alert('failed to fetch new quote');
        }
}

function displayQuote(question) {
    // empty div. taking the div and changing its text function whenever it runs 
    questionTxt.textContent = question;
}

// seeing if the answer works
// function testFunction() {
   //  console.log("answer button clicked");
// }

// adding in the answer
function displayAnswer() {
    answerTxt.textContent = answer;
}

getQuote();
