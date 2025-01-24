const { runCode } = require('../utils/runner');
const { readTestCases } = require('../utils/fileHandler');

async function runTestCases(language, filePath) {
    console.log(`Running test cases for: ${filePath}`);
    try {
        const { inputs, outputs } = readTestCases();
        const results = await runCode(language, filePath, inputs);
        
        results.forEach((result, index) => {
            console.log(`Test Case ${index + 1}:`);
            console.log(`Input: ${inputs[index]}`);
            console.log(`Expected Output: ${outputs[index]}`);
            console.log(`Your Output: ${result}`);
            console.log(result.trim() === outputs[index].trim() ? '✅ Passed' : '❌ Failed');
        });
    } catch (error) {
        console.error('Error running test cases:', error.message);
    }
}

module.exports = { runTestCases };
