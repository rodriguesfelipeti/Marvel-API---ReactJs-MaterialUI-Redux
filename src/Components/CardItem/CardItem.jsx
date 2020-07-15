import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { selectedSingleChar } from '../../redux/actions'

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

  const dispatch = useDispatch()

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const person = item.item
  const image = `${person.thumbnail.path}.${person.thumbnail.extension}`

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSelecteChar = () => {
    dispatch(selectedSingleChar(person))
  }


  return (

    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={image}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={person.name}
      />
        <CardMedia
          className={classes.media}
          image={image}
          title={person.name}
        />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Link to="/singleChar" onClick={handleSelecteChar} variant="body2">
          <ArrowForward />
        </Link>
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