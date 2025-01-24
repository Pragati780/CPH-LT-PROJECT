// index.js
const { runCode } = require('./utils/runner');  // Correct path based on your project structure
const input = 'your test input here';  // Replace this with actual input

// Call the runCode function
const results = runCode(input);

// Ensure the result is an array
if (Array.isArray(results)) {
    results.forEach(result => {
        console.log(result);  // Process each result
    });
} else {
    console.error('Results are not in the expected format.');
}
