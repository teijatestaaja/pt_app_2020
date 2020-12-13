import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

function Home() {
    const classes = useStyles();
    return(
        <div className={classes.content}>
            <p>Welcome to Personal Trainer App 2020!</p>
            <p>With this app you can search, sort, add, edit and delete customers and view, search, sort or delete their trainings.</p>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 200,
    },
}));

export default Home;