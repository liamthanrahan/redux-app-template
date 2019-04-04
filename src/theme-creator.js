import { createMuiTheme } from '@material-ui/core/styles'

const themeCreator = (primaryColor, secondaryColor, type) => {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: primaryColor,
      secondary: secondaryColor,
      type: type,
    },
  })
}

export default themeCreator
