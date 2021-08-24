


 const words = [
    'fish',
    'mountain',
    'horse',
    'colour',
    'children',
    'music',
    'letter',
    'river',
    'family',
    'measure'
]           


const word = words[Math.floor(Math.random()*words.length)];
const splitWord = word.split('');

console.log(splitWord);

export {splitWord}