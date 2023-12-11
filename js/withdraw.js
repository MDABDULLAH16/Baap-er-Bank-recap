document.getElementById("btn-withdraw").addEventListener("click", function () {
  const getWithdrawValue = document.getElementById("withdraw-field");
  const withdrawValueSting = getWithdrawValue.value;
  const inputWithdrawValue = parseFloat(withdrawValueSting);
  getWithdrawValue.value = "";

  //error handling if input does't exist and other things
  if (isNaN(inputWithdrawValue)) {
    alert("Please input valid number");
    return;
  }

  // get previous withdraw balance and update with withdraw
  const previousWithdrawElement = document.getElementById("total-withdraw");
  const previousWithdrawTotalString = previousWithdrawElement.innerText;
  const previousWithTotal = parseFloat(previousWithdrawTotalString);

  //   const totalWithdraw = previousWithTotal + inputWithdrawValue;
  //   previousWithdrawElement.innerText = totalWithdraw;

  //update main balance with withdraw balace
  const getTotalBanalceElement = document.getElementById("banalce");
  const totalBalanceString = getTotalBanalceElement.innerText;
  const previousTotalBalance = parseFloat(totalBalanceString);
  // input withdraw value > main balance;
  if (inputWithdrawValue > previousTotalBalance) {
    alert("Baaper bank e ato taka nai");
    return;
  }
  //error handiling purpuse you have to add this code after conditions
  const totalWithdraw = previousWithTotal + inputWithdrawValue;
  previousWithdrawElement.innerText = totalWithdraw;

  const totalBalace = previousTotalBalance - inputWithdrawValue;
  getTotalBanalceElement.innerText = totalBalace;
});
