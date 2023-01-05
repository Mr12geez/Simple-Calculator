// This JavaScript code defines an event listener for the "submit" event on an element with an ID of "calculator".

// When the event is triggered (i.e. when the form is submitted), the event listener function is executed.

// Inside the function, the default form submission action is prevented using the preventDefault method. 

// This is done so that the form is not actually submitted and the page does not refresh.

document.getElementById('calculator').addEventListener('submit', function(event) {
//This line of code calls the 'preventDefault' method on the event object to prevent the default action of the event from occurring.

// In the case of a form submission, the default action is to send the form data to the server, which will cause the page to reload.

// By calling 'preventDefault', the form submission is cancelled and the page does not reload.

event.preventDefault(); // prevent the form from submitting


// This code block gets the values of elements with the ID's 'num1', 'num2', and 'operation' from the HTML document.

// The value of the element with ID 'num1' is stored in the 'num1' variable.
var num1 = document.getElementById('num1').value;

// The value of the element with ID 'num2' is stored in the 'num2' variable.
var num2 = document.getElementById('num2').value;

// The value of the element with ID 'operation' is stored in the 'operation' variable.
var operation = document.getElementById('operation').value;

// A variable named 'result' is declared but not initialized (given a value).
var result;


switch (operation) {
// If 'operation' is 'add', perform num1 + num2 and store the result in 'result'.
  case 'add':
  result = parseInt(num1) + parseInt(num2);
  break;
// If 'operation' is 'subtract', perform num1 - num2 and store the result in 'result'.
  case 'subtract':
  result = parseInt(num1) - parseInt(num2);
  break;
// If 'operation' is 'multiply', perform num1 * num2 and store the result in 'result'.
  case 'multiply':
  result = parseInt(num1) * parseInt(num2);
  break;
// If 'operation' is 'divide', perform num1 / num2 and store the result in 'result'.
  case 'divide':
  result = parseInt(num1) / parseInt(num2);
  break;
// If 'operation' has any other value, handle it as an invalid operation.
  default:
// handle invalid operation
}
  
// Finally, the result is written to the current document using the write method, and a message is displayed to the user.

  document.write('The result is: ' + result);
});
