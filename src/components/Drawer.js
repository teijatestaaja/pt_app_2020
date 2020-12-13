import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import {
    Drawer as MUIDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
  } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';

function Drawer(props) {
  const classes = useStyles();
  const { history } = props;
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon color="secondary" />,
      onClick: () => history.push("/")
    },
    {
      text: "Customers",
      icon: <PeopleIcon color="secondary"/>,
      onClick: () => history.push("/customers")
    },
    {
      text: "Trainings",
      icon: <FitnessCenterIcon color="secondary" />,
      onClick: () => history.push("/trainings")
    },
    {
        text: "Calendar",
        icon: <EventIcon color="secondary" />,
        onClick: () => history.push("/calendar")
      }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
             Personal Trainer App 2020
          </Typography>
        </Toolbar>
      </AppBar>
      <MUIDrawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        </div>
      </MUIDrawer>
      <main className={classes.content}></main>
    </div>
  );
}

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default withRouter(Drawer);