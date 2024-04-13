const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
5 + 19,22,93,3,93,77,90,18,65,76,14,13,16,61,11,23,36,78,43,85,25,47,79,31,25,1,64,17,92,39,22,28,41,87,25,82,2,27,40,95,41,1,69,13,88,55,49,6
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const filterEvenNumbers = numbers => numbers.filter(isEven);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const randomNumber = getRandomNumber();
