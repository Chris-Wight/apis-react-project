const fetchLatLon = async (postCode) => {
    const endPoint = `/postcodes/${postCode}`
    const response = await fetch(`https://api.postcodes.io${endPoint}`)
    if(response.status === 200){
        const jsonResponse = await response.json()
        const parsedData = {
            lat: jsonResponse.result.latitude,
            lon: jsonResponse.result.longitude
        }
        return parsedData
    }
}



const fetchNearestPostcodes = async (lat, lon) =>{
    const endPoint = "/postcodes"
    const param = `?lat=${lat}&lon=${lon}`
    const response = await fetch(`https://api.postcodes.io${endPoint}${param}`)
    const jsonResponse = await response.json()
    const parsedData = jsonResponse.result.map((areaInfo) =>{
        return { 
            postCode: areaInfo.postcode
        }
    }) 
    return parsedData
}


const getLocalPostcodes = async (postCode) =>{
    const latLon = await fetchLatLon(postCode)
    if(latLon){
        const getNearestPostcodes = await fetchNearestPostcodes(latLon.lat, latLon.lon)
        return getNearestPostcodes
    }
    return []
}


export default getLocalPostcodes