
const fetchData = async ( url ) => {
  try {
   const response = await fetch(url);
   if (!response.ok)  {
    throw new Error('Error to fetch');
   }
   
   const result = await response.json();
   return result;
  } catch (error) {
   console.error(error.message);
  }
}

export default fetchData;