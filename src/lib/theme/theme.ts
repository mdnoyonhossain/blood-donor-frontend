import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#102939",
        },
        secondary: {
            main: "#E9EFF2",
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained"
            },
            styleOverrides: {
                root: {
                    padding: "8px 30px",
                    fontWeight: "700",
                    borderRadius: '0px',
                }
            }
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg"
            }
        }
    },
    typography: {
        body1: {
            color: "#5A5A5A"
        }
    }
});

theme.shadows[1] = "0px 5px 22px lightgray";