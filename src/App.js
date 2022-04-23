import './App.css';
import TourCard from './components/TourCard';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
