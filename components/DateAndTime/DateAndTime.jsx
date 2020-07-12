import React, {useEffect, useState} from "react";
import { useStyles } from './DateAndTimeStyles';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    KeyboardTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {useDispatch} from "react-redux";
import { ChangeTime } from "./DateAndTime.action";




const DateAndTime = () =>{
    const dispatch = useDispatch();
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = useStyles();

    const handleTime = (time) => {
        console.log(new Date(time).toJSON().slice(0, 10))
        console.log(new Date().toJSON().slice(0, 10))
        handleDateChange(time)
    }

    useEffect(()=>{
        dispatch(ChangeTime(selectedDate))
        console.log(selectedDate)
    },[selectedDate])



    return(
        <>
            <CssBaseline />
            <Container className={classes.div} maxWidth="sm">
                <h3 style={{textAlign:'center'}}>Choose date and time to reservation</h3><br/>
                    <Typography className={classes.typeContainer}  component="div" >
                        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                clearable
                                value={selectedDate}
                                placeholder="Choose Date"
                                onChange={date => handleDateChange(date)}
                                minDate={new Date()}
                                format="dd/MM/yyyy"
                            />
                            <KeyboardTimePicker
                                autoOk
                                label="Time"
                                placeholder="08:00 AM"
                                mask="__:__ _M"
                                ampm={false}
                                minutesStep={30}
                                value={selectedDate}
                                onChange={date => handleTime(date)}
                            />
                        </MuiPickersUtilsProvider>

                    </Typography>
             <Link href="/choose_address">
                 <Button variant="contained" color="primary">
                     Next
                 </Button>
            </Link>
            </Container>
        </>
    )
}

export default DateAndTime