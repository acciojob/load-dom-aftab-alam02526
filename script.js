//your JS code here. If required.

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;

  const message = document.createElement('p');
  message.innerText = "DOM load success";
  body.appendChild(message);
});

