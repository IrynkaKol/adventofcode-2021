function processCommands() {
  const inputElement = document.getElementById("command-input");
  const commandString = inputElement.value;
  const commands = commandString.split(/\s+/); // this line will split the command line into individual commands based on any whitespace characters, and you'll end up with an array of commands, where each element of that array will be a separate command for the code to handle

  let horizontalPosition = 0;
  let depth = 0;

  for (let i = 0; i < commands.length; i += 2) {
    // This is a for loop that iterates through an array of commands. i is initialized to 0 and the loop will continue until i is less than the length of the commands array. i += 2 means that after each iteration we increment i by 2 to skip every other command. So this loop will process commands in pairs (action and value).
    const action = commands[i];
    const value = parseInt(commands[i + 1], 10); // we get the value from the command, which is located after the action. i + 1 points to the next element of the array, where the numerical value of the command is located. We use parseInt to convert this value to an integer (specifying base 10 for the number) and store it in the value variable.

    if (action === "forward") {
      horizontalPosition += value;
    } else if (action === "down") {
      depth += value;
    } else if (action === "up") {
      depth -= value;
    }
  }

  document.getElementById("horizontal-position").textContent =
    horizontalPosition;
  document.getElementById("depth").textContent = depth;
  document.getElementById("result").textContent = horizontalPosition * depth;

  inputElement.value = "";
}

document.getElementById("button").addEventListener("click", function () {
  processCommands();
});
