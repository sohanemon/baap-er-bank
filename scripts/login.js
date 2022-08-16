const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const reject = document.getElementById("reject");

/* Adding event listener */
login.addEventListener("click", () => {
  if (email.value === "emon" && password.value === "emon")
    window.location.href = "dashboard.html";
  else reject.style.display = "block";
});
