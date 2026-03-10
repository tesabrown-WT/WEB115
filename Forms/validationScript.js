// JavaScript code for form validation

// Prevent form from submitting
document.getElementById("myForm").addEventListener("submit", function(event) {

  // Retrieve the input field value
  const inputValue = document.getElementById("inputField").value;

  // Regular expression pattern for alphanumeric input
  const regex = /^[a-zA-Z0-9]+$/;

  // Create or select message element
  let message = document.getElementById("message");
  if (!message) {
    message = document.createElement("p");
    message.id = "message";
    document.getElementById("myForm").appendChild(message);
  }

  // Check if the input value matches the pattern
  if (regex.test(inputValue)) {

    // Valid input: display confirmation and submit the form
    message.textContent = "Success! Form submitted.";
    message.style.color = "green";

  } else {

    // Invalid input: display error message
    event.preventDefault();
    message.textContent = "Error: Input must be alphanumeric only.";
    message.style.color = "red";

  }

});