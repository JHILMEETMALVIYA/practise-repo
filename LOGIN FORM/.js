document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const username = event.target[0].value; // Get the username
    const password = event.target[1].value; // Get the password

    // Simple validation check
    if (username && password) {
      alert(`Logging in with Username: ${username}`);
      // Here you can add code to handle the login logic
    } else {
      alert("Please fill in all fields");
    }
  });
