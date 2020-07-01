import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import md5 from 'md5'

import { CardsContainer } from '../'
import { ControlButtons } from '../../Components/'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectedChar } from '../../redux/actions'

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
            width: 300  
        },
    }
  }));

const Principal = () => {
    const classes = useStyles();
    const [catalog, setCatalog] = useState([])
    const dispatch = useDispatch()

    const handleText = (e) => {
        const char = e.target.value
        if(char.length > 1) {
            console.log(char)
            const privateKey = 'f2a503625a7d13a9900bee7496077ba9bc6dea44'
            const publicKey = '996eb487c975ad0bd4561aee7cc427df'
            const actualTime = 1

            const hash = md5(`${actualTime}${privateKey}${publicKey}`)
            fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${char}&ts=${actualTime}&apikey=${publicKey}&hash=${hash}&limit=20&offset=20`)
            .then(response => response.json())
            .then(data => setCatalog(data.data.results))
        }
    }   

    const handleSelect = (option) => {

        dispatch(selectedChar(option.id))
    }
 
  return (
      <div className={classes.app__container}>
          <div className={classes.textContainer}>
            <form noValidate autoComplete="off">
                <Autocomplete
                    id="asynchronous-demo"
                    className={classes.inputText}
                    getOptionSelected={(option, value) => {
                        handleSelect(option)
                        return option.name === value.name
                    }}
                    getOptionLabel={(option) => option.name}
                    options={catalog}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label="Search character"
                        variant="filled"
                        onChange={handleText}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                            <React.Fragment>
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                            ),
                        }}
                        />
                    )}
                />
            </form>
          </div>
         <CardsContainer />
         <ControlButtons />
      </div>
  );
}

export default Principal    