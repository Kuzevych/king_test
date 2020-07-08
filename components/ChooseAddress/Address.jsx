import React, {useState} from "react";
import Link from "next/link";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {ChangeAddress} from "./Address.action";

const useStyles = makeStyles(() => ({
    div: {
        '& > *': {
            display: 'flex',
            flexDirection: 'column',
            width: '600px'
        },
    },
    typeContainer: {
        marginTop: '30px',
        padding: '40px auto 0 40px',
        backgroundColor: '#cfe8fc',
        height: '150px',
        alignItems: 'center'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'relative',
        bottom: '-90px'
    }
}));

const Address = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleAddress = (address) => {
        dispatch(ChangeAddress('dddd'))
        console.log(address)
    }

    return(
        <>
            <CssBaseline />
            <Container className={classes.div} maxWidth="sm">
                <h3 style={{textAlign:'center'}}>Choose address</h3><br/>
                <Typography className={classes.typeContainer}  component="div" >
                    <GooglePlacesAutocomplete
                        apiKey='AIzaSyBHm4OStSnxqMnw7HYXRxLKE1Mzx2KpFzg'
                        placeholder={'Input address'}
                        onSelect={handleAddress}
                    />
                    <Container className={classes.buttonContainer} maxWidth="sm">
                        <Link href="/">
                            <Button variant="contained" color="primary">
                                Back
                            </Button>
                        </Link>
                        <Link href="/summary">
                            <Button variant="contained" color="primary">
                                Next
                            </Button>
                        </Link>
                    </Container>
                </Typography>
            </Container>
        </>
    )
}

export default Address;