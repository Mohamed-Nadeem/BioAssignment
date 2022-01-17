// import logo from './logo.svg';
// import './App.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Components from './components/index';

function App() {

  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <CssBaseline />
        <Container maxWidth="lg">
        <Components.TopGrid />
        <Grid>
            <Components.SearchGrid />
        </Grid>
        </Container>
        <Components.Footer />
      </ThemeProvider>   
    </div>
  );
}

export default App;
