import {Theme} from '@mui/material/styles'

export const getTypography = (baseTheme: Theme): any => {
    return {
        subtitle1: {
            color: baseTheme.palette.text.primary,
            fontSize: 20,
            fontWeight: 'bold',
            borderRight: `4px solid ${baseTheme.palette.secondary.contrastText}`,
            borderLeft: `4px solid ${baseTheme.palette.secondary.contrastText}`,
            lineHeight: '21px',
        },
    }
}