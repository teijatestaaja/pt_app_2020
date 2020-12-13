import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

function Trainingcalendar() {
    const classes = useStyles();
    const localizer = momentLocalizer(moment);
    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
      fetch('https://customerrest.herokuapp.com/gettrainings')
      .then(response => response.json())
      .then(data => createEvents(data))
    }   

    // fetch data from the trainings backend
    useEffect(fetchData, []);

    const createEvents = (data) => {
      let events = [];
      for (var i=0; i < data.length; i++) {
          //console.log(data[i]);     // DEBUG
          const newEvent = {
              title: data[i].activity,
              startDate: new Date(data[i].date),
              endDate: moment(data[i].date).add(data[i].duration, 'm').toDate(),
              allDay: false, 
          }
          events.push(newEvent);
      }
      //console.log(events);  // DEBUG
      setTrainings(events);
    }

    return(
        <div className={classes.content}>
            <Calendar
                localizer={localizer}
                events={trainings}
                startAccessor="startDate"
                endAccessor="endDate"
                style={{ height: 500 }}
            />
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

export default Trainingcalendar;