Question -1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
isAns:
getElementById() - Selects one element by ID - returns single element.


getElementsByClassName() → Selects multiple elements by class - returns live HTMLCollection (auto updates).

querySelector() - Selects first match using CSS selector - returns single element.

querySelectorAll() - Selects all matches using CSS selector - returns static NodeList (no auto update).




Question-2.
 How do you create and insert a new element into the DOM?
isAns: 
const l = document.createElement("div");
l.textContent = "Hello World";
document.body.append(l);



Question-3.
 What is Event Bubbling? And how does it work?
isAns:
Event Bubbling means an event starts from the target element and then moves upward to its parent elements.
showed: Button - Div - Body - HTML



Question-4.
 What is Event Delegation in JavaScript? Why is it useful?
isAns: 
Event Delegation means adding one event listener to a parent element instead of multiple listeners to child elements.
It works because of event bubbling.
showed:
document.querySelector("#parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});



 Question-5.
  What is the difference between preventDefault() and stopPropagation() methods?
isAns:  Stops the default browser behavior.

preventDefault() - Stops browser action
event.preventDefault();

stopPropagation() - Stops event bubbling
event.stopPropagation();
