import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { CardsContainer } from '../'

const useStyles = makeStyles((theme) => ({
    textContainer: {
       display: 'flex',
       justifyContent: 'center',
       margin: 35
    },
    inputText: {
        width: 600,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        
    },
    '@media (max-width: 720px)': {
        inputText: {
            width: 'auto'
        },
    }
  }));

const Principal = () => {
    const classes = useStyles();

  return (
      <div className={classes.app__container}>
          <div className={classes.textContainer}>
            <form noValidate autoComplete="off">
                <TextField  className={classes.inputText} 
                            id="filled-basic" 
                            label="Procurar" 
                            variant="filled"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }} 
                />
            </form>
          </div>
         <CardsContainer />
      </div>
  );
}

export default Principal    