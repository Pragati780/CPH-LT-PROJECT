const fs = require('fs');
const path = require('path');

function readTestCases() {
    const inputDir = './testcases/inputs';
    const outputDir = './testcases/outputs';

    const inputs = fs.readdirSync(inputDir).map(file => fs.readFileSync(path.join(inputDir, file), 'utf-8'));
    const outputs = fs.readdirSync(outputDir).map(file => fs.readFileSync(path.join(outputDir, file), 'utf-8'));

    return { inputs, outputs };
}

module.exports = { readTestCases };
