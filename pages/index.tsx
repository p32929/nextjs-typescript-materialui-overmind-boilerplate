import React from 'react';
import {Button, Grid, Theme, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {useActions, useAppState} from "../src/Overmind/OvermindHelper";

const getThemeObj = (theme: Theme) => {
    return {
        button: {marginTop: 8},
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const index: React.FC = ({}) => {
    const {increase} = useActions()
    const {counter} = useAppState()

    const classes = useStyles();

    return <Grid container justify='center' alignContent='center' alignItems='center' direction='column'>
        <Typography>NextJS-MaterialUI-Overmind-Boilerplate</Typography>
        <Typography>Counter: {counter}</Typography>
        <Button className={classes.button} variant='contained' color='primary' onClick={() => {
            increase(1)
        }}>+</Button>
        <Button className={classes.button} variant='contained' color='primary' onClick={() => {
            increase(-1)
        }}>-</Button>
    </Grid>
}

export default index;
