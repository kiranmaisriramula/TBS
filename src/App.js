import React from 'react';
//import { Counter } from './features/counter/Counter';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Appbar from "./components/Appbar";
import Drawer from "./components/Navbar";
import Home from "./Home";
import Imagecard from "./components/Imagecard";
import Search from "./components/Search";

const drawerWidth = 100;

const useStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  formControl: {
    width:200
  }
});

class App extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Appbar />
        <Drawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Home />
          <Search />
          <Imagecard />
     </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
