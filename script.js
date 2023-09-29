function calculateMinCost() {
  //your code here
	 const ropeLengthsInput = document.getElementById("rope-lengths");

    // Get the comma-separated input string and split it into an array of integers
    const inputStr = ropeLengthsInput.value;
    const inputArr = inputStr.split(",").map(Number);

    // Calculate the minimum cost using the provided minCostOfRopes function
    const result = minCostOfRopes(inputArr);

    // Display the result in the <div id="result"> element
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Minimum Cost: ${result}`;
}  