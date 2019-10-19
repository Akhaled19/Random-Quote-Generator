/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing 

/***
A random quote generator is an webpage that displays random quotes by famous novelists each time the button 'Show another quote' is clicked.
The webpage also chooses random background colors from an array. The webpage always displays information like: quote, source,
and sometimes citation and year if this properties exists in object.
NOTE: Needs future updates to enhance the styling and functionality. 
***/


//This is an array of objects. Created an array of quote objects and named it 'quotes'. Each quote object have a 'source' and a 'quote' property. iF quotes have 'year' and 'citation' properties add them to quote objects. 

let quotes = [
  {
    quote: " Arab children, Corn ears of the future, You will break our chains, Kill the opium in our heads, Kill the illusions. Arab children, Don't read about our suffocated generation, We are a hopeless case. We are as worthless as a water-melon rind. Dont read about us, Dont ape us, Dont accept us, Dont accept our ideas, We are a nation of crooks and jugglers. Arab children, Spring rain, Corn ears of the future, You are the generation That will overcome defeat." ,
    source: "Nizar Qabbani",
    tag: 'Arab nationalism'
  },
  {
    quote: "It's all worth it. If I went back I would do it all again. That is what I have learned from my experiences, that I was on the right track.",
    source: "Nawal El Saadawi",
    tag: 'Life Lessons'
  },
  {
    quote: "Madness is the acme of intelligence.",
    source: "Naguib Mahfouz",
    citation: "'Arabian and Days'",
    tag: 'Wisdom'
  },
  {
    quote: "You know what I am afraid of? That God is sick of us.",
    source: "Naguib Mahfouz",
    citation: "'Adrift on the Nile'",
    tag: 'Wisdom'
  },
  {
    quote: "From a certain point onward there is no longer any turning back. That is the point that must be reached.",
    source: "Franz Kafka", 
    year: "1933",
    tag: 'Life Lessons'
  },
  {
    quote: "The gladdest moment in human life is a departure into unknown lands.",
    source: "Sir Richard Burton",
    tag: 'Life Lesson'
  },
  {
    quote: "If we find ourselves with a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world.",
    source: "C.S Lewis",
    tag: 'Wisdom'
  }
];

//Use console dot log to test the array of quote objects 
console.log(quotes);




//This is a function that will generate a random quote from 'quotes'-the array of quote objects, every time you click next
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length); //generates a random number between 0 and 7 and stores it in randomNumber
  let randomQuote = quotes[randomNumber]; //stores a random quote from quotes array
  return randomQuote; //returns random quote
}



//This is a parent function that will print the randomly selected quote onto the html webpage. 
function printQuote () {
  let message = getRandomQuote();  // message stores random quote from getRandomQuote() function
  let HTML = '';  //create an html variable with an empty string 
  let divQuoteBox = document.getElementById('quote-box'); //divQuoteBox stores a quote to print it out on html webpage by targeting DOM element id

  const listRandomColors = ['lavender','lightCyan','MistyRose','Moccasin','PaleGoldenRod']; //an array of random colors used to generate a background color

//This is a sub-function that will change the randomly selected background color onto the html webpage 
  function getRandomColor() {
    let randomNumber = Math.floor(Math.random() * listRandomColors.length); //generate a random number between 0 and 5 and stores it in randomNumber 
    let randomColors = listRandomColors[randomNumber]; //stores a random color from listRandomColor array
    return randomColors; //returns random color
  } 
  document.body.style.backgroundColor = getRandomColor(); //changes background color of html webpage body by targeting style.backgroundColor 

//builds a template string with quote, source, citation, year, and tags
  HTML = '<p class="quote">'; 
  HTML += message.quote + '</p>';
  HTML += '<p class="source">' + message.source; 

  if (message.citation) {
    HTML += '<span class="citation">' + message.citation + '</span>'; //when citation property exist in quote object add it to the template string
  }
  if (message.year) {
    HTML += '<span class="year">' + message.year + '</span><br>'; //when citation property exist in quote object add it to the template string
  }
  if (message.tag) {
    HTML += '<span class="tag">' + message.tag + '</span><br>';
  }

  HTML += '</p>'; //closing p tags 

  return divQuoteBox.innerHTML = HTML; //a quote is print out in html webpage 
}


//pre-existing code 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

///setInterval 
setInterval('printQuote()', 10000);