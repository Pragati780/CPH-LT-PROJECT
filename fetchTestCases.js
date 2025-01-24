const { scrapeTestCases } = require('../utils/leetcodeScraper');
const { saveTestCases } = require('./saveTestCases');

async function fetchTestCases(url) {
    console.log(`Fetching test cases from: ${url}`);
    try {
        const { inputs, outputs } = await scrapeTestCases(url);
        await saveTestCases(inputs, outputs);
        console.log('Test cases fetched and saved successfully!');
    } catch (error) {
        console.error('Error fetching test cases:', error.message);
    }
}

module.exports = { fetchTestCases };
