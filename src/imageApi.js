import axios from 'axios';

const searchImages = async (title) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID fvKJjYSxsYSGSOt3dueT7Xb8liPoKjWxXxuMWNE3nvA'
            },
            params: {
                query: title
            }
        })
    
        // console.log(response.data.results[0].urls.small)
        return response.data.results[0].urls.small;
    } catch (err) {
        console.log('Something went wrong with the imageApi', err)
    }

    
}

export default searchImages;