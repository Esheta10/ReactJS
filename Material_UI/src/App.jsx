import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";
import { Box } from "@mui/material";
import Buttons from "./components/Buttons";
import UploadFile from "./components/UploadFile";
import AutoComplete from "./components/AutoComplete";
import ContinuousSlider from "./components/ContinuousSlider";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={5}
        sx={{ minHeight: "100vh", padding: 4 }}
      >
        <Button variant="contained" onClick={()=>setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} mode
        </Button>
        <Buttons />
        <UploadFile />
        <AutoComplete />
        <ContinuousSlider />
      </Box>
    </ThemeProvider>
  );
};

export default App;
