import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CardsContainer } from '../'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectedChar } from '../../redux/actions'
import service from '../../service/service'


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
            service.getSearchChar(char).then(res => setCatalog(res.data.results))
        }
    }   


    const handleSelect = (option) => {
        dispatch(selectedChar(option.id))
    }
 
  return (
      
      <div className="">
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
      </div>
  );
}

export default Principal    