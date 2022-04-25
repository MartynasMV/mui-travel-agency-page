import { Container, Typography } from '@mui/material';
import { width } from '@mui/system';
import { Box } from '@mui/material';
import ImageCollage from '../components/ImageCollage';
import SimpleAccordion from '../components/Accordian';
import { BottomNavigation } from '@mui/material';
import BasicModal from '../components/Modal';

// import * as React from 'react';

// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Welcome to Las Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: 'flex' }}>
      <img
        height={325}
        src="https://thumbs.dreamstime.com/b/las-vegas-welcome-sign-nevada-usa-to-dusk-149286875.jpg"
        alt="vegas"
      />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        FAQ
      </Typography>
      <SimpleAccordion />
    </Box>
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
