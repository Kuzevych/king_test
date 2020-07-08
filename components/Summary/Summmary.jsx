import React from "react";
import Link from "next/link";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import SimpleMapPage from "../../common/map/simple_map_page";
import {useSelector} from "react-redux";

const useStyles = makeStyles(() => ({
    div: {
        '& > *': {
            display: 'flex',
            flexDirection: 'column',
            width: '600px',
        },
    },
    typeContainer: {
        marginTop: '30px',
        padding: '40px auto 0 40px',
        backgroundColor: '#cfe8fc',
        height: '600px',
        alignItems: 'center'
    }
}));

const Summary = () => {
    const classes = useStyles();
    const time = useSelector(state => state.time )
    return(
        <>
            <CssBaseline />
            <Container className={classes.div} maxWidth="sm">
                <h3 style={{textAlign:'center'}}>Summary</h3><br/>
                <Typography className={classes.typeContainer}  component="div" >
                  <SimpleMapPage text={'market for date and time'} />
                </Typography>
                <Link href="/choose_address">
                    <Button variant="contained" color="primary">
                        Back
                    </Button>
                </Link>
            </Container>

        </>
    )
}

export default Summary;