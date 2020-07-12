import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    div: {
        '& > *': {
            display: 'flex',
            flexDirection: 'column',
            width: '600px'
        },
    },
    timeBlock: {
        '& > *': {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'row',
            width: '100%'
        },
    },
    root: {
        '& > *': {
            margin: 'auto',
            width: '25ch',
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '30px',
        width: '250px'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    typeContainer: {
        marginTop: '30px',
        padding: '40px auto 0 40px',
        backgroundColor: '#cfe8fc',
        height: '150px',
        alignItems: 'center'
    }
}));