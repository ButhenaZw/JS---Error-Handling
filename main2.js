const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const cBMIBtn = document.getElementById("cBMI");
const result = document.getElementById("result");
const statusSpan = document.getElementById("status");

function calculateBMI() {
  try {
    const h = parseFloat(heightInput.value);
    const w = parseFloat(weightInput.value);

    if (isNaN(h) || isNaN(w)) {
      throw new Error("Please enter valid numerical values for height and weight.");
    }

    if (h <= 0) {
      throw new Error("Height must be greater than 0.");
    }
    if (w <= 0) {
      throw new Error("Weight must be greater than 0.");
    }

    let r = w / (h * h);
    r = r.toFixed(2);

    let s = "";
    statusSpan.className = "";
    if (r < 18.5) {
      s = "underweight";
      statusSpan.classList.add("underweight");
    } else if (r >= 18.5 && r < 24.9) {
      s = "normal";
      statusSpan.classList.add("normal");
    } else if (r >= 25 && r < 29.9) {
      s = "overweight";
      statusSpan.classList.add("overweight");
    } else {
      s = "obese";
      statusSpan.classList.add("obese");
    }
    result.innerText = r + " ";
    statusSpan.innerText = s;
  } catch (error) {
    console.error(error);
    result.innerText = "Error: " + error.message;
    statusSpan.innerText = "";
    statusSpan.className = "";
  }
}

cBMIBtn.addEventListener("click", calculateBMI);

