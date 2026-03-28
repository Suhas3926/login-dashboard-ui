function login() {
  var username = document.getElementById("username").value;

  if (username === "") {
    alert("Enter username");
  } else {
    localStorage.setItem("user", username);

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";

    document.getElementById("welcome").innerText = "Welcome " + username + " 🎉";
  }
}

function logout() {
  localStorage.removeItem("user");

  document.getElementById("loginPage").style.display = "block";
  document.getElementById("dashboardPage").style.display = "none";
}