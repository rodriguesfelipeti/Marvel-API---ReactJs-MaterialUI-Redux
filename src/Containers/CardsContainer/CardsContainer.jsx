import React, { useState, useEffect } from 'react'
import md5 from 'md5'
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { CardItem } from '../../Components'

const useStyles = makeStyles(({
    card__container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginRight: '5%',
        marginLeft: '5%',
    },
    '@media (max-width: 720px)': {
        card__container: {
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }
    }
}))

const CardContainer = () => {

    const [catalog, setCatalog] = useState([])
    const selectedChar = useSelector(state => state.pageReducer.selectedChar)
    const indexStore = useSelector( state => state.pageReducer.indexSearchApi)
    const indexOffset = useSelector( state => state.pageReducer.indexOffset )

    useEffect(() => {
        const privateKey = 'f2a503625a7d13a9900bee7496077ba9bc6dea44'
        const publicKey = '996eb487c975ad0bd4561aee7cc427df'
        const actualTime = 1
        const hash = md5(`${actualTime}${privateKey}${publicKey}`)
        let url = `http://gateway.marvel.com/v1/public/characters?ts=${actualTime}&apikey=${publicKey}&hash=${hash}&limit=${indexStore}&offset=${indexOffset}`
        if(selectedChar) {
            url = `http://gateway.marvel.com/v1/public/characters/${selectedChar}?&ts=${actualTime}&apikey=${publicKey}&hash=${hash}`
        }
        fetch(url)
        .then(response => response.json())
        .then(data => setCatalog(data.data.results))
    }, [indexStore, indexOffset, selectedChar])
    

    const classes = useStyles()

    return(
        <div className={classes.card__container}>
            {catalog.map( (item) => {
                return(
                    <CardItem key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default CardContainer