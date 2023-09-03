let horizontalPosition = 0;
let depth = 0;


function processCommands () {
  const inputElement = document.getElementById("command-input");
  const commands = inputElement.value.split(/[,\n]/);


  depth = 0;
  const upCommands = [];
  const downCommands = [];

  for (const command of commands) {
    const trimmedCommand = command.trim(); //remove extra spaces from the line
    const [action, value] = trimmedCommand.split(" ");
    const numericValue = parseInt(value);

    if (action === "forward") {
      horizontalPosition += numericValue;
    } else if (action === "down") {
      downCommands.push(numericValue);
    } else if (action === "up") {
      upCommands.push(numericValue);
    }
  }

  for (const value of upCommands) {
    depth -= value;
  }
  for (const value of downCommands) {
    depth += value;
  }

  document.getElementById("horizontal-position").textContent = horizontalPosition;
  document.getElementById("depth").textContent = depth;
  document.getElementById("result").textContent = horizontalPosition * depth;

  inputElement.value = ""
}

document.getElementById("button").addEventListener("click", function() {
  processCommands ()
});