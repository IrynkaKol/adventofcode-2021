// This code uses input to enter the depth using a space. After clicking the Calculate button, 
// the input data is split using split(" ") and then merged back into the massive slicer using map(Number). 
// After that, the number of measurements that are greater than the previous ones is calculated, and the result is displayed on the page.

const calculateButton = document.getElementById("Button");
const depthInput = document.getElementById("depthInput");

function processInput() {
  const depthInput = document.getElementById("depthInput").value;

  const depthMeasurements = depthInput.split(" ").map(Number);

  let largeMeasurementsCount = 0;

  for (let i = 1; i < depthMeasurements.length; i += 1) {
    if (depthMeasurements[i] >= depthMeasurements[i - 1]) {
      largeMeasurementsCount += 1;
    }
  }

  document.getElementById(
    "result"
  ).textContent = `Number of measurements are larger than the previous measurement: ${largeMeasurementsCount}`;
}

calculateButton.addEventListener("click", processInput);
