const transformString = (str) => {
    return str
      .split('')  // Split the string into an array of characters
      .map((char, index) => index + char.toUpperCase()) // Add index and capitalize the character
      .join('');  // Join the array back into a string
  };

  // Prompt the user for input
  const inputString = prompt("Enter a string:");

  // Display the result in the browser window
  if (inputString) {
    document.write(transformString(inputString));
  }