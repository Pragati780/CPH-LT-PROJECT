const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeTestCases(url) {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const inputs = [];
    const outputs = [];

    $('.input-output-box').each((_, element) => {
        const input = $(element).find('.input').text().trim();
        const output = $(element).find('.output').text().trim();
        inputs.push(input);
        outputs.push(output);
    });

    return { inputs, outputs };
}

module.exports = { scrapeTestCases };
