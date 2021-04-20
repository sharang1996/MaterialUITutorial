import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
//import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    borderRadius: 25,
    marginBottom: 15,
    color: "white",
    padding: "10px 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    // primary: {
    //   main: orange[500],
    // },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<ThumbDownAltIcon />}
          checkedIcon={<ThumbUpAltIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      }
      label="Happy with this example?"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2">Welcome to MUI</Typography>
            <Typography variant="subtitle1">
              Learn How to use Material UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ width: "100%", height: 75 }}></Paper>
              </Grid>

              <Grid item xs={3} sm={6}>
                <Paper style={{ width: "100%", height: 75 }}></Paper>
              </Grid>

              <Grid item xs={3} sm={6}>
                <Paper style={{ width: "100%", height: 75 }}></Paper>
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              placeholder="Share your thoughts"
              label="Share your thoughts"
            />
            <CheckBoxExample />
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                size="large"
                variant="contained"
                color="primary"
              >
                Save it?
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                size="large"
                variant="contained"
                color="secondary"
              >
                Trash it?
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
