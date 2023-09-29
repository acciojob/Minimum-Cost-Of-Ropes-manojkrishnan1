function calculateMinCost() {
  //your code here
  
    // Step 1: Get the input value from the text element
  const inputElement = document.getElementById('rope-lengths'); // Replace 'inputText' with the actual ID of your input element
  const inputValue = inputElement.value;

  // Step 2: Split the input into an array of integers
  const inputArray = inputValue.split(',');

  // Step 3: Convert the array elements to integers
  const ropeLengths = inputArray.map(str => parseInt(str.trim(), 10));

  // Step 4: Implement the rope connecting logic to calculate the minimum cost
  // You can use the same logic as explained earlier in the "Minimum Cost of Ropes" problem.

  let totalCost = 0;
  while (ropeLengths.length > 1) {
    // Find the two shortest ropes
    ropeLengths.sort((a, b) => a - b);
    const shortest1 = ropeLengths.shift();
    const shortest2 = ropeLengths.shift();
    
    // Connect the two shortest ropes and add the cost
    const newRope = shortest1 + shortest2;
    totalCost += newRope;
    
    // Add the newly created rope back to the array
    ropeLengths.push(newRope);
  }

  // Step 5: Return the minimum cost before that extract div 
	 const res =document.getElementById('result');
         res.innerText=totalCost;
  
}  