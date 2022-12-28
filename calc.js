function identifyRepeatingDNA(strDNA) {
      // Initialize variables
      let start = 0;
      let end = 0;
      let usedBasePairs = [];
      let foundRepeat = false;
    
      // Create a table element
      let table = document.createElement("table");
    
      // Create a table row for the headers
      let row = document.createElement("tr");
    
      // Create the "Sequence" header cell
      let cell1 = document.createElement("th");
      cell1.innerHTML = "Sequence";
      row.appendChild(cell1);
    
      // Create the "Repeats" header cell
      let cell2 = document.createElement("th");
      cell2.innerHTML = "Repeats";
      row.appendChild(cell2);
    
      // Add the header row to the table
      table.appendChild(row);
    
      // Iterate through the DNA string
      for (let i = 0; i < strDNA.length; i++) {
        // Check if the base pair has already been included in a repeat
        if (!usedBasePairs.includes(i)) {
          // Get a sub-string of the DNA sequence with a length of 3 or 4
          let subDNA = strDNA.substring(i, i + 3);
    
          // Check if the sub-string has a repeating pattern
          if (strDNA.indexOf(subDNA, i + 3) !== -1) {
            let repeats = 1;
            end = i + 2;
    
            // Loop until the repeating pattern is found
            while (strDNA.indexOf(subDNA, end + 3) !== -1) {
              end = end + 3;
              repeats++;
            }
    
            // Mark the base pairs that were included in the repeating pattern as used
            for (let j = i; j <= end; j++) {
                  usedBasePairs.push(j);
}

// Create a new table row
row = document.createElement("tr");



// Create the "Sequence" cell
cell1 = document.createElement("td");
cell1.innerHTML = subDNA;
row.appendChild(cell1);


// Create the "Repeats" cell
cell2 = document.createElement("td");
cell2.innerHTML = repeats;
row.appendChild(cell2);

// Add the table row to the table
table.appendChild(row);

// Update the start position for the next search
start = end + 1;

// Set foundRepeat to true
foundRepeat = true;
}
}
}

// Check if any repeating patterns were found
if (!foundRepeat) {
// Display an alert message
alert("No repeating pairs in the sequence");
} else {
// Clear the output div
document.getElementById("output").innerHTML = "";

// Add the table to the output div
document.getElementById("output").appendChild(table);
}
}

// Get a reference to the process button
let button = document.getElementById("process-button");

// Add an event listener to the button that calls the identifyRepeatingDNA function when clicked
button.addEventListener("click", function() {
// Get the DNA sequence from the textarea
let dnaInput = document.getElementById("dna-input").value;

// Call the identifyRepeatingDNA function
identifyRepeatingDNA(dnaInput);
});
