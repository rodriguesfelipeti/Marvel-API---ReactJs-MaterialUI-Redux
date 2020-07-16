import { actualTime, hash, publicKey } from './constants'
//fetch api
const _apiHost = `https://gateway.marvel.com/v1/public/characters`

const request = (async (url, method = 'GET') => {

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(`${_apiHost}${url}`, options)
     if (response.status !== 200) {
        return generateErrorResponse('The server responded with an unexpected status.');
    }
    const result = await response.json();
    return result;

})


const generateErrorResponse = (message) => {
    return {
        status : 'error',
        message
    }
}

const getFullChars = (indexStore, indexOffset) => {
    const _endHost = `?ts=${actualTime}&apikey=${publicKey}&hash=${hash}&limit=${indexStore}&offset=${indexOffset}` 
    return request(_endHost);
}

const getChar = (selectedChar) => {
    const _endHost = `/${selectedChar}?&ts=${actualTime}&apikey=${publicKey}&hash=${hash}`
    return request(_endHost)
}

const getSearchChar = (char) => {
    const _endHost = `?nameStartsWith=${char}&ts=${actualTime}&apikey=${publicKey}&hash=${hash}`
    return request(_endHost)
}

export default {
    getFullChars,
    getChar,
    getSearchChar
}


