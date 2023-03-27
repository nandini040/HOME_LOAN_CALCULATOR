let loan = document.querySelector(".price-loan sub");
let interest = document.querySelector(".price-interest sub");
let time = document.querySelector(".time");
let button = document.querySelector(".calculate-button");
let summaryEMI = document.querySelector(".price-special sub");
let rate = document.querySelector(".right-fill");
let amount = document.querySelector(".right-fill-1");
let years = document.querySelector(".right-fill-2");

let loanRange = document.querySelector(".loan-range");
let interestRange = document.querySelector(".interest-range");
let timeRange = document.querySelector(".time-range");

let result;

loanRange.addEventListener("input", (e) => {
  loan.innerHTML = loanRange.value;
});

interestRange.addEventListener("input", (e) => {
  interest.innerHTML = interestRange.value;
});

timeRange.addEventListener("input", (e) => {
  time.innerHTML = timeRange.value;
});

button.addEventListener("click", (e) => {
  let loan1 = Number(loan.innerHTML) * 100000;
  let interest1 = Number(interest.innerHTML) / 12 / 100;
  let time1 = Number(time.innerHTML) * 12;
  let result =
    (loan1 * interest1 * Math.pow(1 + interest1, time1)) /
    (Math.pow(1 + interest1, time1) - 1);
  // console.log(typeof result,result);
  if (loan1 == 0) {
    alert("Minimun loan should be 1 Lac");
  } else if (interest1 == 0) {
    alert("Minimum Interest Rate must be 1%");
  } else if (time1 == 0) {
    alert("Minimun time must be 1 year");
  } else {
    summaryEMI.innerHTML = result.toFixed(2);
    rate.innerHTML = interest.innerHTML;
    amount.innerHTML = loan.innerHTML;
    years.innerHTML = time.innerHTML;
  }
});