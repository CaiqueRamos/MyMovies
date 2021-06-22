const MY_KEY = '11c870b1fa402b775f4510bb54ad9fc7'
const URL_BASE ="https://api.themoviedb.org/3"

const basicFetch = async (endpoint) => {
    const req = await fetch(`${URL_BASE}${endpoint}`)
    const json = req.json();
    return json;
}

export default {
    getHomeList: async () =>{
        return [
            {
                slug: 'toprated',
                title: 'For You',
                items: await basicFetch(`/movie/top_rated?lenguage=pt-BR&api_key=${MY_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&lenguage=pt-BR&api_key=${MY_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&lenguage=pt-BR&api_key=${MY_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&lenguage=pt-BR&api_key=${MY_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&lenguage=pt-BR&api_key=${MY_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&lenguage=pt-BR&api_key=${MY_KEY}`)
            },
        ];
    }
}