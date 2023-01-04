import {createTheme, Theme} from "@mui/material/styles";

import {
    primaryLight,
    infoDark,
    infoPurple,
    infoGreyBlue,
    lightBlue,
    bgColorDefault,
} from './colors'
import {getTypography} from "./typography";
import {getOverridesComponent} from "./overridesComponent";

const customTheme = (): Theme => {
    const baseTheme = createTheme({
        spacing: (x: number) => `${x * 8}px`,
        palette: {
            primary: {
                main: infoGreyBlue,
                light: primaryLight,
            },
            secondary: {
                main: lightBlue,
                contrastText: infoDark,
            },
            background: {
                default: bgColorDefault,
            },
            text: {
                primary: infoPurple,
            },
        },
    })

    return createTheme({
        ...baseTheme,
        typography: getTypography(baseTheme),
        components: getOverridesComponent(baseTheme),
    })
}

export default customTheme();