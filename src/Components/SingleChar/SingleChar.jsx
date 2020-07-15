import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  box: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 400,
    display: 'flex',
  },
  containerImage: {
    position: 'relative',
    // left: 300,
    marginRight: 50,
    width: 300,
    height: 300,
    borderRadius: '50%',
    overflow: 'hidden',
    // border: '1px solid red',
  },
  image: {
    position: 'absolute',
    width: 'auto',
    height: '100%',
    transform: 'translate(-50%, 0)',
    left: '50%',
  }

}))

const SingleChar = () => {

  const classes = useStyles()
  const singleChar = useSelector( store => store.pageReducer.selectedSingleChar )
  // const image = `${singleChar.thumbnail.path}.${singleChar.thumbnail.extension}`
  const image = "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
  console.log(singleChar)
  
  return(
    <React.Fragment>
      <Box className={classes.box}>
        <div></div>
        <div>
          <div className={classes.containerImage}>
            <img className={classes.image} src={image} />
          </div>
          <Typography variant="h3">
            3-D man 
          </Typography>
        </div>
      </Box>
    </React.Fragment>
  )
}

export default SingleChar