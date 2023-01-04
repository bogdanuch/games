import {Components, Theme} from '@mui/material/styles'

export const getOverridesComponent = (baseTheme: Theme): Components => {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontSize: 16,
                },
                body: {
                    boxSizing: 'border-box',
                    height: '100%',
                    margin: '20px 5vw',
                    padding: 0,
                    marginBottom: 50,
                },
                header: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                    width: '90vw',
                    div: {
                        minWidth: 250,
                    },
                    h3: {
                        minWidth: 230
                    }
                },
                img: {
                    height: 370
                },
                footer: {
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'fixed',
                    bottom: 0,
                    paddingTop: 5,
                    width: '90vw',
                    backgroundColor: baseTheme.palette.background.default
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    textTransform: 'none',
                    color: baseTheme.palette.primary.main,
                    fontSize: 16,
                    lineHeight: '30px',
                    boxShadow: 'none',
                    borderRadius: 0,
                    '&:hover': {
                        opacity: 1,
                    },
                },
                sizeMedium: {
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                },
                sizeLarge: {
                    padding: '0px 20px',
                    fontSize: 24,
                    fontWeight: 'bold',
                    display: 'flex',
                    gap: 30,
                    borderRadius: 8
                },
                containedSizeSmall: {
                    padding: baseTheme.spacing(0, 1.7),
                },
                containedSizeMedium: {
                    padding: baseTheme.spacing(0.5, 4),
                },
                containedPrimary: {
                    position: 'relative',
                    color: baseTheme.palette.primary.light,
                    backgroundColor: baseTheme.palette.secondary.contrastText,

                    '&:hover': {
                        backgroundColor: baseTheme.palette.secondary.contrastText,
                        boxShadow: 'none',
                        opacity: 0.9,
                    },
                    '&:disabled': {
                        background: baseTheme.palette.grey[500],
                        color: baseTheme.palette.grey[300],
                    },
                },
                text: {
                    '&:hover': {
                        textDecoration: 'underline',
                        color: baseTheme.palette.primary.main,
                    },

                    '&:disabled': {
                        textDecoration: 'none',
                        color: baseTheme.palette.grey[500],
                    },
                },
            },
        },
    }
}
