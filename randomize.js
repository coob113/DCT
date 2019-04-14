var data={ "notes": [
  {
    "title": "images/male_01.png",
    "author": 'Michael Collins',
    "quote": "Were there any difficulties you encountered in your team while working on it?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "Are you sure that colours of buttons are right?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "What was user feedback about this solution?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "Why did you use this layout?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "Isn't there any difference between this design and wireframes that we discussed before?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "What were the different ways you explored design for a specific component on the page?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "What are the different workflows you explored in your project?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "Don't be defensive. OK?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "What was improved since the last review?"
  }
 ]
};





    

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  $('.quote-author').html(item.author);
    $(".author-photo").attr("src", item.title);
}

function getQuote() {
  var $button = $('.next')

  $button.on('click', randomize);
}

$(document).ready(function() {
  randomize();
  getQuote();
});
