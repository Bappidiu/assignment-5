document.getElementById("btn-calculate").addEventListener("click", function () {
  const perCostField = document.getElementById("per");
  const perPlayerCost = perCostField.value;
  console.log(perPlayerCost);
  perCostField.value = "";
  if (isNaN(perPlayerCost)) {
    alert("provide a valid number");
    return;
  }

  const cost = document.getElementById("cost");
  const costTotal = cost.innerText;

  const newCostTotal = parseFloat(costTotal);
  const currentTotal = 5 * perPlayerCost;
  cost.innerText = currentTotal;
  console.log(newCostTotal);
});
document
  .getElementById("btn-final-calculate")
  .addEventListener("click", function () {
    const manager = document.getElementById("manager");
    const managerCostString = manager.value;
    const managerCost = parseFloat(managerCostString);
    console.log(managerCost);
    manager.value = "";
    if (isNaN(managerCost)) {
      alert("provide a valid number");
      return;
    }
    const coach = document.getElementById("coach");
    const coachCostString = coach.value;
    const coachCost = parseFloat(coachCostString);
    console.log(coachCost);
    coach.value = "";
    if (isNaN(coachCost)) {
      alert("provide a valid number");
      return;
    }
    const returnCost = document.getElementById("cost");
    const returnCostValueString = returnCost.innerText;
    const totalValue = parseFloat(returnCostValueString);
    console.log(totalValue);
    if (isNaN(totalValue)) {
      alert("provide a valid number");
      return;
    }

    const total = document.getElementById("total");
    const finalTotal = total.innerText;

    const newFinalTotal = parseFloat(finalTotal);
    const lastFinalTotal = managerCost + coachCost + totalValue;
    total.innerText = lastFinalTotal;
    console.log(newFinalTotal);
  });
