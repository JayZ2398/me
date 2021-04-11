import logo from './logo.svg';
import './App.css';
import { Button, Card, CardHeader, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core';
// Theming
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';

// Media
import mePortrait from './media/mePortrait.jpg';
import WebIcon from '@material-ui/icons/Web';
import SecurityIcon from '@material-ui/icons/Security';
import CameraIcon from '@material-ui/icons/Camera';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: orange,
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
  },
  media: {
    maxWidth: '100%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <header className="App-header">
          <Typography variant='h1'>Jack Zezula</Typography>
          <Typography variant='h2'>About me</Typography>
          <Grid
            container
            className={classes.root}
            direction='row'
            justify='space-around'
          >
            <Grid item xs={5}>
              <Typography variant='h3'>Direction</Typography>
              <Typography variant='body1'>Computer science and pure math undergraduate with a passion for robotic automation for social good.
            </Typography>

              <Typography variant='h3'>Interests</Typography>
              <Typography variant='body1'>
                <List>
                  <ListItem>
                    <ListItemIcon><WebIcon color='primary' /></ListItemIcon>
                    <ListItemText>
                      Front end
                  </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><SecurityIcon color='primary' /></ListItemIcon>
                    <ListItemText>
                      Formal verification
                  </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><CameraIcon color='primary' /></ListItemIcon>
                    <ListItemText>
                      Robots and AGI
                  </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <img
                className={classes.media}
                src={mePortrait}
                alt="Me and a mlem"
              />
            </Grid>
          </Grid>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
