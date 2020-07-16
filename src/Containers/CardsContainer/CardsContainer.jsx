import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { CardItem } from '../../Components'
import CircularProgress from '@material-ui/core/CircularProgress'
import { increaseSearch, deacreaseSearch } from '../../redux/actions'


import service from '../../service/service'
import { handleScroll } from '../../utils/utils'

const useStyles = makeStyles((theme) => ({
    card__container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginRight: '5%',
        marginLeft: '5%',
    },
    loading: {
        marginLeft: '42%',
        marginTop: 90,
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    '@media (max-width: 720px)': {
        card__container: {
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        loading: {
            marginLeft: 0,
            marginTop: 90,
            display: 'flex',
            '& > * + *': {
              marginLeft: theme.spacing(2),
            },
        },
    },
}))

const CardContainer = () => {

    const [catalog, setCatalog] = useState([])
    const [loading, setLoading] = useState(false)
    const selectedChar = useSelector(state => state.pageReducer.selectedChar)
    const indexStore = useSelector( state => state.pageReducer.indexSearchApi)
    const indexOffset = useSelector( state => state.pageReducer.indexOffset)
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {    

        window.addEventListener('scroll', getMorePerson);
        
        if(selectedChar) {
            service.getChar(selectedChar).then(res => setCatalog(res.data.results)).then( () => setLoading(false)) 
        }else if(indexStore <= 99) {

            service.getFullChars(indexStore, indexOffset).then(res => setCatalog(res.data.results)).then(() => setLoading(false))
        }
    }, [indexStore, indexOffset, selectedChar])
    
    const getMorePerson = () => {
        if(handleScroll()) {
            setLoading(true)
            setTimeout(() => {
                dispatch(increaseSearch())
            }, 200);  
            // setLoading(!loading)
            window.removeEventListener('scroll', getMorePerson);  
        }
    }

    console.log(loading)
    return(
        <div className={classes.card__container}>
            {catalog.length === 0 && ( 
                <div className={classes.loading}>
                    <CircularProgress size="10em"/>
                </div> 
            )}
            {catalog.length > 0 && catalog.map( (item) => {
                return(
                    <CardItem key={item.id} item={item} />
                )
            })}
            {loading && ( 
                <div className={classes.loading}>
                    <CircularProgress size="10em"/>
                </div> 
            )}
        </div>
    )
}

export default CardContainer