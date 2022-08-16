var withdrawal = document.getElementById("withdrawal").innerText;
const withdrawField = document.getElementById("withdrawField");
console.log(withdrawField);
/* adding event listener */
document.getElementById("withdrawSubmit").addEventListener("click", () => {
  if (isNaN(withdrawField.value)) {
    alert("নাম্বার দে ");
    return;
  }
  const value = parseFloat(withdrawField.value);
  if (parseFloat(document.getElementById("balance").innerText) <= value) {
    alert("taka nai");
    return;
  }
  document.getElementById("withdrawal").innerText =
    parseFloat(document.getElementById("withdrawal").innerText) + value;
  const value2 = parseFloat(withdrawField.value);
  document.getElementById("balance").innerText =
    parseFloat(document.getElementById("balance").innerText) - value;

  withdrawField.value = "";
});
