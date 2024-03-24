export const fetchPhotos = async ({apiURL, apiKey, sol, page}: {apiURL: string, apiKey: string, sol: number, page: number}) => {
    const response = await fetch(`${apiURL}?sol=${sol}&page=${page}&api_key=${apiKey}`);
    const data = await response.json();
    return data.photos;
};