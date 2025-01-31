
const generateRandomValue = (arr) => {
 const randomIndex = Math.floor(Math.random() * arr.length);
 
 return arr[randomIndex];
}

export default generateRandomValue;