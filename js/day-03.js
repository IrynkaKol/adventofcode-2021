document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const diagnosticReportText =
      document.getElementById("diagnosticReport").value;
    const diagnosticReportLines = diagnosticReportText.split("\n");
    const diagnosticReport = diagnosticReportLines.map((line) => line.trim());

    const powerConsumption = calculatePower(diagnosticReport);
    document.getElementById("powerConsumptionResult").textContent =
      powerConsumption;
  });

function calculatePower(diagnosticReport) {
  // We initialize the arrays for storing the gamma rate and the epsilon rate
  let gammaRate = [];
  let epsilonRate = [];

  for (let i = 0; i < diagnosticReport[0].length; i += 1) {
    // Count the number of 0's and 1's for this bit
    let count0 = 0;
    let count1 = 0;
    for (const binaryNumber of diagnosticReport) {
      if (binaryNumber.charAt(i) === "0") {
        count0 += 1;
      } else {
        count1 += 1;
      }
    }
    if (count0 > count1) {
      gammaRate.push("0");
      epsilonRate.push("1");
    } else {
      gammaRate.push("1");
      epsilonRate.push("0");
    }
  }

  // Convert gamma rate and epsilon rate to decimal numbers
  const gammaDecimal = parseInt(gammaRate.join(""), 2);
  const epsilonDecinal = parseInt(epsilonRate.join(""), 2);

  // We calculate the power consumption
  const powerConsumption = gammaDecimal * epsilonDecinal;
  return powerConsumption;
}
