document.addEventListener('DOMContentLoaded', () => {

const form = document.getElementById("registration-form");

const feedbackDiv = document.getElementById("form-feedback")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim()

    const isValid = true;

    const messages = [];

    if (username.length < 3) {
        isValid = false;

        messages.push("Username should be longer than three(3) characters")

    }

    if (!email.includes('@') || !email.includes('.')) {
  isValid = false;
  messages.push('Please enter a valid email address');
}

if (password.length < 8){
    isValid = false;

    messages.push("Password should be 8 or more characters")
}

if (isValid === true) {
  feedbackDiv.textContent = 'Registration successful!';
  feedbackDiv.style.color = '#28a745';
} else {
  feedbackDiv.innerHTML = messages.join('<br>');
  feedbackDiv.style.color = '#dc3545';
}


})

})
