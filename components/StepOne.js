import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    div: {
        '& > *': {
            margin: '40px',
            display: 'flex',
            flexDirection: 'column',
            width: '600px'
        },
    },
}));

const StepOne = () =>{
    const classes = useStyles();
    return(
        <>
            <CssBaseline />
            <Container className={classes.div} maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '500px' }} >
                    <TextField id="standard-basic" label="Text" />
                </Typography>

            </Container>
        </>
    )
}

export default StepOne