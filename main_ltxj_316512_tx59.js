// This is a comment

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

kiwi

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const findSmallestNumber = numbers => Math.min(...numbers);
kiwi / 30
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getUniqueValues = array => [...new Set(array)];
