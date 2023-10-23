// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// assigning variable to the current date
var currentDay = dayjs().format('dddd MMMM D,');
// inserting current date into 'p' element with currentDay ID
$('#currentDay').text(currentDay);
// assigning variables to time block in a call to jQuery
var nineAm = $('#hour-9');
nineAm = dayjs().hour(9).hour();

var tenAm = $('#hour-10');
tenAm = dayjs().hour(10).hour();

var elevenAm = $('#hour-11');
elevenAm = dayjs().hour(11).hour();

var twelvePm = $('#hour-12');
twelvePm = dayjs().hour(12).hour();

var onePm = $('#hour-13');
onePm = dayjs().hour(13).hour();

var twoPm = $('#hour-14');
twoPm = dayjs().hour(14).hour();

var threePm = $('#hour-15');
threePm = dayjs().hour(15).hour();

var fourPm = $('#hour-16');
fourPm = dayjs().hour(16).hour();

var fivePm = $('#hour-17');
fivePm = dayjs().hour(17).hour();
// assigning variable to current hour of day
var currentHour = dayjs().hour();
console.log(currentHour);
// variable for 6PM to help end the schedule
var sixPm = dayjs().hour(18).hour(); 

// targeting each hours save btn through jquery
var nineBtn = $('#nine-btn');
var tenBtn = $('#ten-btn');
var elevenBtn = $('#eleven-btn');
var twelveBtn = $('#twelve-btn');
var oneBtn = $('#one-btn');
var twoBtn = $('#two-btn');
var threeBtn = $('#three-btn');
var fourBtn = $('#four-btn');
var fiveBtn = $('#five-btn');

var nineInput = $('#9-text');
var tenInput = $('#10-text');
var elevenInput = $('#11-text'); 
var twelveInput = $('#12-text');
var oneInput = $('#1-text');
var twoInput = $('#2-text');
var threeInput = $('#3-text');
var fourInput = $('#4-text');
var fiveInput = $('#5-text');

// jquery event method used hear save buttons and log the timeblock and message.
nineBtn.on('click', function () {
  var nineText = document.getElementById('9-text').value;

  localStorage.setItem('timeText', nineText);
  console.log(nineText);
})

tenBtn.on('click', function () {
  var tenText = document.getElementById('10-text').value;

  localStorage.setItem('timeText', tenText);
  console.log(tenText);
})

elevenBtn.on('click', function () {
  var elevenText = document.getElementById('11-text').value;

  localStorage.setItem('timeText', elevenText);
  console.log(elevenText);
})

twelveBtn.on('click', function () {
  var twelveText = document.getElementById('12-text').value;

  localStorage.setItem('timeText', twelveText);
  console.log(twelveText);
})

oneBtn.on('click', function () {
  var oneText = document.getElementById('1-text').value;

  localStorage.setItem('timeext', oneText);
  console.log(oneText);
})

twoBtn.on('click', function () {
  var twoText = document.getElementById('2-text').value;

  localStorage.setItem('timeText', twoText);
  console.log(twoText);
})

threeBtn.on('click', function () {
  var threeText = document.getElementById('3-text').value;

  localStorage.setItem('threeText', threeText);
  console.log(threeText);
})

fourBtn.on('click', function () {
  var fourText = document.getElementById('4-text').value;

  localStorage.setItem('timeText', fourText);
  console.log(fourText);
})

fiveBtn.on('click', function () {
  var fiveText = document.getElementById('5-text').value;

  localStorage.setItem('timeText', fiveText);
  console.log(fiveText);
})

var nineValue = localStorage.getItem('nineText');
nineInput.textContent = nineValue;
console.log(nineValue);


// if the current hour is within the time block 
// it adds the class of 'present'
// if it is within the hours of 12am and less than the specific hour then it resets class to 'future'.
// else if the time is not within the above hours it will class list 'past'.

if (currentHour >= nineAm && currentHour < tenAm) {
  $('#hour-9').addClass('present');
} else if (currentHour >= 0 && currentHour < nineAm) {
  $('#hour-9').addClass('future');
 } else {
  $('#hour-9').addClass('past')
}

if (currentHour >= tenAm && currentHour < elevenAm) {
  $('#hour-10').addClass('present');
} else if (currentHour >= 0 && currentHour < tenAm) {
  $('#hour-10').addClass('future');
} else {
  $('#hour-10').addClass('past')
}

if (currentHour >= elevenAm && currentHour < twelvePm) {
  $('#hour-11').addClass('present');
} else if (currentHour >= 0 && currentHour < elevenAm) {
  $('#hour-11').addClass('future');
} else {
  $('#hour-11').addClass('past')
}

if (currentHour >= twelvePm && currentHour < onePm) {
  $('#hour-12').addClass('present');
} else if (currentHour >= 0 && currentHour < twelvePm) {
  $('#hour-12').addClass('future');
} else {
  $('#hour-12').addClass('past')
}

if (currentHour >= onePm && currentHour < twoPm) {
  $('#hour-13').addClass('present');
} else if (currentHour >= 0 && currentHour < onePm) {
  $('#hour-13').addClass('future');
} else {
  $('#hour-13').addClass('past')
}

if (currentHour >= twoPm && currentHour < threePm) {
  $('#hour-14').addClass('present');
} else if (currentHour >= 0 && currentHour < twoPm) {
  $('#hour-14').addClass('future');
} else {
  $('#hour-14').addClass('past')
}

if (currentHour >= threePm && currentHour < fourPm) {
  $('#hour-15').addClass('present');
} else if (currentHour >= 0 && currentHour < threePm) {
  $('#hour-15').addClass('future');
 } else {
  $('#hour-15').addClass('past')
}

if (currentHour >= fourPm && currentHour < fivePm) {
  $('#hour-16').addClass('present');
} else if (currentHour >= 0 && currentHour < fourPm) {
  $('#hour-16').addClass('future');
} else {
  $('#hour-16').addClass('past')
}

if (currentHour >= fivePm && currentHour < sixPm) {
  $('#hour-17').addClass('present');
} else if (currentHour >= 0 && currentHour < fivePm) {
  $('#hour-17').addClass('future');
 } else {
  $('#hour-17').addClass('past')
}

$(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
