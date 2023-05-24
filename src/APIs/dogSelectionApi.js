const fetchBreedInfo = async () => {
    const endPoint = "/breeds";
    const response = await fetch(`https://api.thedogapi.com/v1${endPoint}`);
    const jsonResponse = await response.json()
    const parsedData = jsonResponse.map((breed) => {
        return {
            id: breed.id,
            name: breed.name,
            image: breed.image.url,
            weight: breed.weight.metric,
            height: breed.height.metric,
            lifeSpan: breed.life_span,
            temperament: breed.temperament,
            origin: breed.origin,
        }
    })
    return parsedData
} 

export default fetchBreedInfo

// testApi, remember we can console.log(result) the result as the function will await the first line before it console logs.
// without this the console will fire immediately and you will get an error as the variable before still needs to wait for the await.


// const testApi = async () =>{
//     const result = await fetchBreedInfo();
//     console.log(result)
// }


// testApi()

