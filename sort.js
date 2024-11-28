const fs = require('fs');
const { selectionSort } = require('./algorithms/selectionSort/selectionSort');
const { BubleSort } = require('./algorithms/bubleSort/bubleSort');

const fileNames = [
    'integers_0_to_4294967295.txt',     //0
    'random_1M_cela_cisla.txt',         //1
    'random_10M_interval.txt',          //2
    'random_integers_10M.txt',          //3
    'random_words_1M.txt',              //4
    'random_words_10M.txt',             //5
    'integers_100K.txt',                //6
    'random_words_100K.txt'             //7
];
const selectedOption = 1;
const data = fs.readFileSync('DataProTřídění/' + fileNames[selectedOption], 'utf8');

// const inputData = data.split('\n').map(Number).filter(n => !isNaN(n));
const inputData = data.split('\n').filter(word => word.trim() !== '');

console.time('Sort duration');
const result = selectionSort(inputData);
console.timeEnd('Sort duration');

fs.writeFileSync('result/' + fileNames[selectedOption], result.join('\n'));