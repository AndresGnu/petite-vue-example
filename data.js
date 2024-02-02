import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'

const lists = reactive({
    authors: [],
    movies: [],
})

const values = reactive({
    author: '',
    movies: '',
});

const buildUrlSearchParams = (params) => {
    const hasParam = Object.keys(params).length > 0;
    if (!hasParam) return '';
    return '?' + new URLSearchParams(params).toString();
}

async function callGet(apiEndpoint, params) {
    const paramsString = buildUrlSearchParams({ author });
    const res = await fetch(apiEndpoint + paramsString);
    return await res.json();
}

async function callPost(apiEndpoint, body, params) {
    const paramsString = buildUrlSearchParams({ author });
    const res = await fetch(apiEndpoint + paramsString,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return await res.json();
}


async function getMovies() {
    const author = values.author;
    const movies = await callGet('/api/movies.json', { author });
    lists.movies = movies;
    console.log(values);
}

async function getAuthor() {
    const authors = await callGet('/api/authors.json', {});
    lists.authors = authors;
}


createApp({
    lists,
    values,
    api: {
        getMovies,
        getAuthor
    }
}).mount()


getMovies();
getAuthor();