
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When she got to :inserty:, she stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Amanda","Isabelle","Emma"];
var insertY = ["the Boiler Room","prison","her friend's house"];
var insertZ = ["committed a crime","started hallucinating","called the cops"];


/* the click is triggering the result */
randomize.addEventListener('click', result);

function result() {
  console.log("testing");
  var newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:",xItem);
  newStory = newStory.replaceAll(":inserty:",yItem);
  newStory = newStory.replaceAll(":insertz:",zItem);


  if(customName.value !== '') {
    const name = customName.value;
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round (300/14)} stone`;
    const temperature = `${Math.round((94-32)*(5/9))} centigrade`;
    newStory = newStory.replace("300 pounds",weight);
    newStory = newStory.replace("94 fahrenheit",temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}