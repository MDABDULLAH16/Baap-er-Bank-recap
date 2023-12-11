//1: btn add event listener
//2 get input value
document.getElementById("btn-deposit").addEventListener("click", function () {
  const getInputValue = document.getElementById("deposit-field");
  const inputValueString = getInputValue.value;
  const inputDepositValue = parseFloat(inputValueString);
  getInputValue.value = "";
  // error handling for only deposit click or nothing add something
  if (isNaN(inputDepositValue)) {
    alert("Please input a valid number");
    return;
  }

  //get previous deposit and update total deposit
  const previousDepositElement = document.getElementById("total-deposit");
  const previousDepositString = previousDepositElement.innerText;
  const previousDeposit = parseFloat(previousDepositString);
  const totalDeposit = inputDepositValue + previousDeposit;
  previousDepositElement.innerText = totalDeposit;

  //get main balance and update with deposit
  const getTotalBanalceElement = document.getElementById("banalce");
  const totalBalanceString = getTotalBanalceElement.innerText;
  const previousTotalBalance = parseFloat(totalBalanceString);
  const totalBalace = previousTotalBalance + inputDepositValue;
  getTotalBanalceElement.innerText = totalBalace;
});
