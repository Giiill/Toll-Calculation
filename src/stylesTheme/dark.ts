import { createTheme } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#5c5c5c',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#212121',
            contrastText: '#000',
        },
        success: {
            main: '#c7c7c7',
        },
    },
});

export { darkTheme };
