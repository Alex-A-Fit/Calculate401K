// List of form input variables
let Income = document.getElementById("Income");
let FedTax = document.getElementById("FedTax");
let SocialSecurity = document.getElementById("SocialSecurity");
let StateTax = document.getElementById("StateTax");
let Medicare = document.getElementById("Medicare");
let Investment = document.getElementById("Investment");
let Disability = document.getElementById("Disability")
//List of text Value variables
let OldFedTax = document.getElementById("OldFedTax");
let OldStateTax = document.getElementById("OldStateTax");
let OldSocialSec = document.getElementById("OldSocialSec");
let OldMedicare = document.getElementById("OldMedicare");
let OldStateDisable = document.getElementById("OldStateDisable");
let OldProfit = document.getElementById("OldProfit");
let NewFedTax = document.getElementById("NewFedTax");
let NewStateTax = document.getElementById("NewStateTax");
let NewSocialSec = document.getElementById("NewSocialSec");
let NewMedicare = document.getElementById("NewMedicare");
let NewStateDisable = document.getElementById("NewStateDisable");
let NewProfit = document.getElementById("NewProfit");
let InvestValue = document.getElementById("InvestValue");
let TaxesSaved = document.getElementById("TaxesSaved")
//Btn variable
let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
    
  let IncomeValue = Income.value;
  let FedTaxValue = FedTax.value;
  let SocialSecurityValue = SocialSecurity.value;
  let StateTaxValue = StateTax.value;
  let MedicareValue = Medicare.value;
  let InvestmentValue = Investment.value;
  let DisabilityValue = Disability.value;
  

  if(IncomeValue == null || FedTaxValue == null || SocialSecurityValue == null || StateTaxValue == null || MedicareValue == null || InvestmentValue == null || DisabilityValue == null){
      alert("Please input amount in designated input fields")
  }else{

  let oldIncome = CalculateOldCheck(
    IncomeValue,
    FedTaxValue,
    StateTaxValue,
    SocialSecurityValue,
    MedicareValue,
    DisabilityValue
  );

  let newIncome = CalculateNewCheck(
    IncomeValue,
    FedTaxValue,
    StateTaxValue,
    SocialSecurityValue,
    MedicareValue,
    DisabilityValue,
    InvestmentValue
  );

  let MoneySaved = ((oldIncome.FedTax - newIncome.FedTax) + (oldIncome.StateTax - newIncome.StateTax) + (oldIncome.SocialSecurity - newIncome.SocialSecurity) + (oldIncome.Medicare - newIncome.Medicare) + (oldIncome.Disable - newIncome.Disable)).toFixed(2)

  OldFedTax.innerText = "Old Federal Tax: " + oldIncome.FedTax;
  OldStateTax.innerText = "Old State Tax: " + oldIncome.StateTax;
  OldSocialSec.innerText = "Old Social Tax: " + oldIncome.SocialSecurity;
  OldMedicare.innerText = "Old Medicare Tax: " + oldIncome.Medicare;
  OldStateDisable.innerText = "Old State Disability Tax: " + oldIncome.Disable
  OldProfit.innerText = "Old Profits: " + oldIncome.Profit;

  NewFedTax.innerText = "New Federal Tax: " + newIncome.FedTax;
  NewStateTax.innerText = "New State Tax: " + newIncome.StateTax;
  NewSocialSec.innerText = "New Social Tax: " + newIncome.SocialSecurity;
  NewMedicare.innerText = "New Medicare Tax: " + newIncome.Medicare;
  NewStateDisable.innerText = "New State Disability Tax: " + newIncome.Disable
  NewProfit.innerText = "New Profits: " + newIncome.Profit;
  TaxesSaved.innerText = "The Amount of money you saved from being taxed is: " + MoneySaved;
}
});

function CalculateOldCheck(Income, fTax, sTax, socialSecurity, med, disable) {
  fTax = fTax * 0.01;
  sTax = sTax * 0.01;
  socialSecurity = socialSecurity * 0.01;
  med = med * 0.01;
  disable = disable * 0.01;

  let Ftax = (Income * fTax).toFixed(2);
  Ftax = parseFloat(Ftax);
  let Stax = (Income * sTax).toFixed(2);
  Stax = parseFloat(Stax);
  let Social = (Income * socialSecurity).toFixed(2);
  Social = parseFloat(Social);
  let medicare = (Income * med).toFixed(2);
  medicare = parseFloat(medicare);
  let disableVal = (Income * disable).toFixed(2);
  disableVal = parseFloat(disableVal);

  let profits = Income - (Ftax + Stax + Social + medicare + disableVal);

  let obj = {
    FedTax: Ftax,
    SocialSecurity: Social,
    StateTax: Stax,
    Medicare: medicare,
    Disable: disableVal,
    Profit: profits,
  };
  return obj;
}

function CalculateNewCheck(Income, fTax, sTax, socialSecurity, med, disable, invest) {
  fTax = fTax * 0.01;
  sTax = sTax * 0.01;
  socialSecurity = socialSecurity * 0.01;
  med = med * 0.01;
  disable = disable * 0.01;

  let newIncome = Income - invest;

    let Ftax = (newIncome * fTax).toFixed(2);
    Ftax = parseFloat(Ftax);
    let Stax = (newIncome * sTax).toFixed(2);
    Stax = parseFloat(Stax);
    let Social = (newIncome * socialSecurity).toFixed(2);
    Social = parseFloat(Social);
    let medicare = (newIncome * med).toFixed(2);
    medicare = parseFloat(medicare);
    let disableVal = (newIncome * disable).toFixed(2);
    disableVal = parseFloat(disableVal);

  let profits = newIncome - (Ftax + Stax + Social + medicare + disableVal);
  let obj = {
    FedTax: Ftax,
    SocialSecurity: Social,
    StateTax: Stax,
    Medicare: medicare,
    Profit: profits,
    Disable: disableVal,
    Invested: invest,
  };
  return obj;
}
