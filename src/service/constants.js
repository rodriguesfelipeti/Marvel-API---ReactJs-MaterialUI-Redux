import md5 from 'md5'

export const privateKey = 'f2a503625a7d13a9900bee7496077ba9bc6dea44'
export const publicKey = '996eb487c975ad0bd4561aee7cc427df'
export const actualTime = Date.now()
export const hash = md5(`${actualTime}${privateKey}${publicKey}`)
export const urlFullChars = (indexStore, indexOffset) => `http://gateway.marvel.com/v1/public/characters?ts=${actualTime}&apikey=${publicKey}&hash=${hash}&limit=${indexStore}&offset=${indexOffset}`
export const urlSearch = (selectedChar) => `http://gateway.marvel.com/v1/public/characters/${selectedChar}?&ts=${actualTime}&apikey=${publicKey}&hash=${hash}`