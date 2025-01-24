const fs = require('fs');
const path = require('path');

async function saveTestCases(inputs, outputs) {
    const inputDir = './testcases/inputs';
    const outputDir = './testcases/outputs';

    if (!fs.existsSync(inputDir)) fs.mkdirSync(inputDir, { recursive: true });
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    inputs.forEach((input, index) => {
        fs.writeFileSync(path.join(inputDir, `input_${index + 1}.txt`), input);
        fs.writeFileSync(path.join(outputDir, `output_${index + 1}.txt`), outputs[index]);
    });

    console.log('Test cases saved successfully!');
}

module.exports = { saveTestCases };
