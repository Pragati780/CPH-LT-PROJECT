module.exports = {
    python: {
        run: 'python $fileName'
    },
    cpp: {
        compile: 'g++ -std=c++17 -o a.out $fileName',
        run: './a.out'
    }
};
