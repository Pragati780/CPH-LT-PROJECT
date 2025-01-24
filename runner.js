// runner.js
const fs = require('fs');
const { execSync } = require('child_process');

const runCode = (input) => {
    try {
        const codeFile = 'src/solve.cpp';

        const inputFilePath = './tempInput.txt';
        fs.writeFileSync(inputFilePath, input);

        // Compile and run C++ code
        execSync(`g++ ${codeFile} -o solution`);
        
        // Windows requires `.exe` for executables
        const result = execSync('solution.exe < ' + inputFilePath).toString();

        fs.unlinkSync(inputFilePath);

        // Return the result as an array of strings (lines)
        return result.trim().split('\n');

    } catch (error) {
        console.error('Error running the code:', error);
        return null;
    }
};

// Export the runCode function
module.exports = { runCode };

