function returnNumberArray(input) {
  const numberArray = [];
  for (let i = 0; i <= input; i++) {
    numberArray.push(" " + i);
  } 
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i].toString().includes("3")) {
      numberArray[i] = "\"Won't you be my neighbor, " + document.getElementById("inputName").value + "?\""
    }
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i].toString().includes("2")) {
      numberArray[i] = " \"Boop!\"";
    }
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i].toString().includes("1")) {
      numberArray[i] = " \"Beep!\"";
    }
  }
  return numberArray;
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();

    const inputNumber = document.getElementById("inputNumber").value;
    console.log(inputNumber);
    returnNumberArray(inputNumber);
    
    if (!document.getElementById("inputNumber").value) {
      document.querySelector(".message").innerText = "No number detected! Please enter a whole number!";
    } else {
      document.querySelector(".message").innerText = returnNumberArray(inputNumber);
    }
  }
}







