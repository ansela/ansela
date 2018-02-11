import { createMuiTheme } from 'material-ui/styles'

export const muiTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#fce4ec',
            dark: '#c9b2ba',
            contrastText: '#880e4f'
        }
    },
    status: {
        danger: 'orange'
    }
})