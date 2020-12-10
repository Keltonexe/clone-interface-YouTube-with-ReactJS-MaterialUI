import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Home from './Home';

const useStyles = makeStyles({
  root: {
  },
});



function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#F44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkMode ? '#232323' : '#FFFFFF',
        dark: darkMode ? '#181818' : '#F4F6F8',
        paper: darkMode ? '#232323' : '#FFFFFF',
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}

export default App;
