import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    
    card__container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
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
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: 35
     },
    textFavorites: {
        fontSize: 30,

    }
}))


const FavoritesContainer = () => {
    const favorites = useSelector(state => state.favoritesReducer.favorites)
    const classes = useStyles()

    return(
        <Fragment>
            <div classes={classes.textContainer}>
                <Typography className={classes.textFavorites}>Favorites</Typography>
            </div>
            <div className={classes.card__container}>
                {favorites.map( item => {
                    const image = `${item.thumbnail.path}.${item.thumbnail.extension}`
                    return(
                        <Avatar alt={item.name} src={image} className={classes.large} />
                    )
                } )}
            </div>
        </Fragment>

    )
}


export default FavoritesContainer