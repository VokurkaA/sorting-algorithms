const fs = require('fs');
const { SelectionSort, BubbleSort, InsertionSort, HeapSort } = require('./algorithms');

const files = {
    rnd100KIns: { path: 'integers_100K.txt', type: 'number' },
    rnd1MInts: { path: 'random_1M_cela_cisla.txt', type: 'number' },
    rnd10MInts: { path: 'random_integers_10M.txt', type: 'number' },
    rnd10MRange: { path: 'random_10M_interval.txt', type: 'number' },
    largeInts: { path: 'integers_0_to_4294967295.txt', type: 'number' },
    rnd100KWords: { path: 'random_words_100K.txt', type: 'string' },
    rnd1MWords: { path: 'random_words_1M.txt', type: 'string' },
    rnd10MWords: { path: 'random_words_10M.txt', type: 'string' }
};
const sortedOption = {
    sorted: 'result/',
    unsorted: 'DataProTřídění/'
};

for (let selectedOption in files) {
    // const selectedOption = 0;
    const getData = () => {
        const input = fs.readFileSync(sortedOption.unsorted + files[selectedOption].path, 'utf8');
        if (files[selectedOption].type === 'number') {
            return input.split('\n').map(Number).filter(n => !isNaN(n));
        } else {
            return input.split('\n').filter(word => word.trim() !== '');
        }
    };

    const inputData = getData();

    console.time(`Sort duration for ${files[selectedOption].path}`);
    const result = InsertionSort(inputData);
    console.timeEnd(`Sort duration for ${files[selectedOption].path}`);

    fs.writeFileSync('result/' + files[selectedOption].path, result.join('\n'));

}