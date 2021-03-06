import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { addFavorite, removeFavorite } from '../../redux/actions'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 400,
    marginLeft: 20,
    marginBottom: 20,
  },
  '@media (max-width: 720px)': {
    root: {
      marginLeft: 0,
      maxWidth: 'auto',
      minWidth: 360,
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CardItem = (item) => {


  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const person = item.item
  const image = `${person.thumbnail.path}.${person.thumbnail.extension}`
  const favorites = useSelector(state => state.favoritesReducer.favorites)
  const dispatch = useDispatch()
  const existsFavorite = () => favorites.filter( res => res.id === person.id).length > 0
  const handleExpandClick = () => setExpanded(!expanded)
  const returnFavoriteIcon = () => existsFavorite() ? <FavoriteIcon color="error" /> : <FavoriteIcon />
  const handleFavorite = () => !existsFavorite() ? dispatch(addFavorite(person)) : dispatch(removeFavorite(person))

  return (

    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={image}
          title={person.name}
        />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
          {returnFavoriteIcon()}
        </IconButton>
        {person.name}
        {person.description &&  
        
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <ExpandMoreIcon />
          </IconButton>
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {person.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  );
}

export default CardItem