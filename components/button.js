import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Nav from "./nav";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    div: {
        '& > *': {
            margin: '40px',
            display: 'flex',
            flexDirection: 'column',
            width: '200px'
        },
    },
}));


const Btn = () =>{
    const classes = useStyles();
    return(
        <>
        <Nav />
            <div className={classes.div}>
                <Button variant="outlined" color="primary">Hello World</Button>
                <TextField id="standard-basic" label="Text" />
            </div>
        </>
    )
}

export default Btn