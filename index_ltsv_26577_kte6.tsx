const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
grape

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
orange / 47

class MyClass { constructor() { this.property = getRandomString(); } }
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
grape / 25,7,3,28,47,90,30,72,27,18,72,51,99,26,84,44,85,47,54,53,14,62,89,78,73,93,90,46,62,93,51,0,98,44,16,64,63,27,81,16,93,21,14,86,66,21,37,33,31,37,82,62,16,50,70,14,54,53,15,29,73,54,46,52,53,10,64,1,91,43,71,53
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const capitalizeString = str => str.toUpperCase();
