let billAmount = document.getElementById('bill-input');
let percentageTip = document.getElementById('percentage-tip');
let tipAmount = document.getElementById('tip-amount');
let total = document.getElementById('total');
let result = document.getElementById('resulttext')
console.log(result)

function calculate(){
    let billAmountValue = billAmount.value
    let percentageTipValue = percentageTip.value

    if(billAmountValue === ""){
        result.textContent = "Please Enter a Valid Input";
        result.style.color = "red"
    }
    else if(percentageTipValue === ""){
        result.textContent = "Please Enter a Valid Input";
        result.style.color = "red"
    }
    else{
        let tipValue = parseInt((percentageTipValue/100) * billAmountValue);
        tipAmount.value = tipValue

        let totalResult = parseInt(billAmountValue) + tipValue;
        total.value = totalResult
    }
}