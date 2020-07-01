import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { CardItem } from '../../Components'
import service from '../../service/service'

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
    const classes = useStyles()

    useEffect(() => {    
        selectedChar ? 
            service.getChar(selectedChar).then(res => setCatalog(res.data.results)) : 
            service.getFullChars(indexStore, indexOffset).then(res => setCatalog(res.data.results))  
    }, [indexStore, indexOffset, selectedChar])
    
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