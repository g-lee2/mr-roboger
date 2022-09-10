function returnNumberArray() {
  const numberArray = [];
  for (let i = 0; i <= input; i++) {
    numberArray.push(" " + i);
  } 
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i].toString().includes(target)) {
      numberArray[i] = replacement;
    }
  }
  return numberArray;
}

function robogersNeighborhood() {
  let neighborhood = returnNumberArray(numberArray, target, replacement);
  neighborhood = replaceNumber(neighborhood, "3", "Won't you be my neighbor?");
  neighborhood = replaceNumber(neighborhood, "2", "Boop!");
  neighborhood = replaceNumber(neighborhood, "1", "Beep!");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();

    const inputNumber = document.getElementById("inputNumber").value;
    const returnNumbArray = returnNumberArray(inputNumber);
    robogersNeighborhood(input);
    
    if (!inputNumber) {
      document.querySelector(".message").innerText = "No number detected! Please enter a whole number!";
    } else {
      document.querySelector(".message").innerText = returnNumbArray;
    }
  }
}







