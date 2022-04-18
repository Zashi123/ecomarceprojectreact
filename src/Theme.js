import { createTheme } from "@mui/material"

const Theme = createTheme({
  palette:{
    primary:{
      main: '#031a40',
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',

    },
    secondary:{
      main: '#3b86ff',
      light: '#fafafa',
      dark: '#f28585',
      contrastText: '#000',
    }
  },
  spacing:10,
  typography:{
    fontFamily: [
      "'Montserrat', sans-serif",
    ].join(','),
  },

  // overriding
  components:{
    MuiFab: {
      styleOverrides:{
        primary: {
          textTransform: 'none'
        }
      }
    }
  },

})

export default Theme