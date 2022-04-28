document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInfo = document.getElementById('deposit-amount');
    const depositAmount = depositInfo.value;
    console.log(depositAmount);

    const currentDeposit = document.getElementById('total-deposit');

    const previousDepositAmount = currentDeposit.innerText;
    const newDepositAmount = parseFloat(previousDepositAmount) + parseFloat(depositAmount);

    currentDeposit.innerText = newDepositAmount;

    // Account Balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
    // Clearning the input field
    depositInfo.value = " ";
})


document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmountText)

    const withdrawTotal = document.getElementById('total-withdrawn');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount; 
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount; 

    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = " ";

})