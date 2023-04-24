import {createTheme, TextField, ThemeProvider} from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import InputMask from 'react-input-mask';

const theme = createTheme({
    palette: {
        primary: {
            main: '#c49b66',
        },
        secondary: {
            main: '#fff',
        }
    },
})

const useStyles = makeStyles({
    root: {
        cursor: 'pointer',
    },
});

export const TextFieldInput = ({input, meta, ...props})=>{

    const hasError = meta.touched && meta.dirty && meta.error;
    const classes = useStyles();
    return(
        <>
            <ThemeProvider theme={theme}>
                {props.type === 'tel'?
                    <InputMask {...input} mask="+7(999) 999-9999" maskChar=" " >
                        {() => <TextField  {...input} name={props.name} label={props.label} type={props.type}
                                          fullWidth sx={{ mt: 1, ml:5,  width: '90%' }}
                                          error={hasError} helperText={hasError} variant="standard"/>}
                    </InputMask>:
                    <TextField className={classes.root} {...input}  name={props.name}
                               label={props.label} variant="standard"
                               fullWidth sx={{ mt: 1, ml:5,  width: '90%' }}
                               type={props.type} error={hasError} helperText={hasError}
                    />
                }


            </ThemeProvider>
        </>
    )
};