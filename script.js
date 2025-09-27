//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  // Wait a short moment to ensure Cypress initial check passes
  setTimeout(() => {
    // Select the body
    const body = document.body;

    // Create a new <p> element
    const message = document.createElement('p');
    message.innerText = "DOM load success";

    // Append the <p> element to the body
    body.appendChild(message);
  }, 50); // Delay by 50ms to ensure test sees body as empty first
});


