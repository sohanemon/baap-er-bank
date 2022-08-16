var deposited = document.getElementById("deposited").innerText;
const depositField = document.getElementById("depositField");
/* adding event listener */
document.getElementById("depositSubmit").addEventListener("click", () => {
  if (isNaN(depositField.value)) {
    alert("নাম্বার দে ");
    return;
  }
  const value = parseFloat(depositField.value);
  document.getElementById("deposited").innerText =
    parseFloat(document.getElementById("deposited").innerText) + value;
  const value2 = parseFloat(depositField.value);
  document.getElementById("balance").innerText =
    parseFloat(document.getElementById("balance").innerText) + value;

  depositField.value = "";
});
