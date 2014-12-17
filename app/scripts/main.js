(function() {
  "use strict";

  console.log('Whatcha doin?');

  var allQuotes = [
    ["Here's my theory about meetings and life: the three things you can't fake are erections, competence and creativity – D. Coupland"],
    ["Remember how, back in 1990, if you used a cellphone in public you looked like a total asshole? We're all assholes now. – D. Coupland"],
    ["I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center – K. Vonnegut"],
    ["Contemporary art hates you. – J. Waters"]
  ];

var randomNum = Math.floor(Math.random() * allQuotes.length)

$('.quotation').text(allQuotes[randomNum]);

$("img").unveil(200);

}());