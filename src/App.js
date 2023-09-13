import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar"
import Add from './components/Add';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';


function App() {

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box 
      bgcolor={"background.default"}
      color={"text.primary"}
>
      {/* Navbar */}
      <Navbar />
      <Stack
        direction='row'
        // spacing={2}
        sx={{
          spacing:{
            xs: 0,
            md: 2
          }
        }}
        justifyContent='space-between'
      >
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}

export default App;
