import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'

const lists = reactive({
    authors: [],
    movies: [],
})

const values = reactive({
    author: '',
    movies: '',
    message: '',
});

const buildUrlSearchParams = (params = {}) => {
    const hasParam = Object.keys(params).length > 0;
    if (!hasParam) return '';
    return '?' + new URLSearchParams(params).toString();
}

function errorHandler(err) {
    console.error(err);
}
async function callGet(apiEndpoint, params) {
    const paramsString = buildUrlSearchParams(params);
    const res = await fetch(apiEndpoint + paramsString);
    return await res.json();
}

async function callPost(apiEndpoint, body, params) {
    const paramsString = buildUrlSearchParams(params);
    const res = await fetch(apiEndpoint + paramsString, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return await res.json();
}


async function getMovies() {
    const author = values.author;
    const movies = await callGet('/api/movies.json', { author }).catch(errorHandler);
    lists.movies = movies;
    console.log(values);
}

async function getAuthor() {
    const authors = await callGet('/api/authors.json', {}).catch(errorHandler);
    lists.authors = authors;
}

async function sendForm() {
    const author = values.author;
    const movies = values.movies;
    const message = values.message;
    const response = await callPost('/api/form', { author, movies, message }).catch(errorHandler);
    console.log(response);

}
createApp({
    lists,
    values,
    api: {
        getMovies,
        getAuthor,
        sendForm
    }
}).mount()

try {
    getMovies();
    getAuthor();
} catch (error) {
    errorHandler(error);
}
