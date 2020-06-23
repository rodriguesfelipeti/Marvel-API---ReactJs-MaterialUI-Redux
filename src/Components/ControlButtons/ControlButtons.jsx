import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { increaseSearch, deacreaseSearch } from '../../redux/actions'

const useStyles = makeStyles(() => ({
    containerClass: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 25,
    }
}))

const ControlButtons = () => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const handleNext = () => {
        dispatch(increaseSearch())
    }

    const handlePrevious = () => {
        dispatch(deacreaseSearch())
    }

    return(
        <div className={classes.containerClass}>
            <Button size="large" variant="contained" color="primary" onClick={handlePrevious}> Anterior </Button>
            <Button size="large" variant="contained" color="primary"onClick={handleNext}> Próximo </Button>
        </div>
    )
}

export default ControlButtons