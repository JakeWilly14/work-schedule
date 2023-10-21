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
nineAm = dayjs().hour(10).hour();

var elevenAm = $('#hour-11');
nineAm = dayjs().hour(11).hour();

var twelvePm = $('#hour-12');
nineAm = dayjs().hour(12).hour();

var onePm = $('#hour-13');
nineAm = dayjs().hour(13).hour();

var twoPm = $('#hour-14');
nineAm = dayjs().hour(14).hour();

var threePm = $('#hour-15');
nineAm = dayjs().hour(15).hour();

var fourPm = $('#hour-16');
nineAm = dayjs().hour(16).hour();

var fivePm = $('#hour-17');
nineAm = dayjs().hour(17).hour();
// assigning variable to current hour of day
var currentHour = dayjs().hour();

$(function () {
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
