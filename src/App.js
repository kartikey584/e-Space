import React from 'react';
import {Router} from 'react-router-dom';
import Routes from './utils/routes'
import history from './utils/history'
import {createTheme , ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary : {
      main : '#000000',
    },
    secondary : {
      main : '#D36B00'
    },
    error : {
      main : '#DA0037',
    }
  },
  typography: {
    fontFamily : 'poppins',
  }
})
const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
