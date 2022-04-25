import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Rating } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img className="img" src={tour.image} alt="pic" />
          <Box paddingX={1}>
            <Typography component="h2" variant="subtitle1">
              {tour.name}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTimeIcon sx={{ width: 12.5 }} />
              <Typography component="p" variant="body2" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              marginTop={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating
                name="read-only"
                value={tour.rating}
                readOnly
                precision={0.1}
                size="small"
              />
              <Typography component="p" variant="body2" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography component="p" variant="body3" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography component="h3" variant="h6" marginTop={0}>
                From {tour.price}$
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
