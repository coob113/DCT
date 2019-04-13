var data={ "notes": [
  {
    "title": "Carrying the Fire",
    "author": 'Michael Collins',
    "quote": "Man has always gone where he has been able to go. It&rsquo;s that simple. He will continue pushing back his frontier, no matter how far it may carry him from his homeland."
  },
  {
    "title" : "Kitchen Confidential",
    "author": "<a href=\"http://jessica-eldredge.com\">jessabean</a>",
    "quote": "Bigfoot understood that there are two types of people in this world: those who do what they say they&rsquo;re going to do&mdash;and everyone else."
  }
 ]
};

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  $('.quote-book').html(item.title);
  $('.quote-author').html(item.author);
}

function getQuote() {
  var $button = $('.next')

  $button.on('click', randomize);
}

$(document).ready(function() {
  randomize();
  getQuote();
});
