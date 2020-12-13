import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ReactTable from 'react-table';
import 'react-table/react-table.css';   // Needed for react-table 6
import moment from 'moment';
import Addtraining from './Addtraining';
import Button from '@material-ui/core/Button';

function Trainings() {
    const classes = useStyles();
    const [trainings, setTrainings] = useState([]);

    // fetch data from the trainings backend
    useEffect(() => fetchData(), []);

    const fetchData = () => {
       fetch('https://customerrest.herokuapp.com/gettrainings')
       .then(response => response.json())
       .then(data => setTrainings(data))
    }    

    const saveTraining = (training) => {
        // First try to parse date
        var dateOk = false
        var validFormats = ['DDMMYYYY', 'DDMMYY', 'DD.MM.YYYY'];
        var parsedDate = moment(training.date, validFormats);
        if (parsedDate.isValid()) {
            dateOk = true
        } else {
            window.alert("Date format was not correct!")
        }

        // Then check that the user gave other values
        // TODO: check that user id exists by fetching one customer data
        if (dateOk && training.activity && training.duration && training.customer) {
            var newTraining = {
                date: parsedDate,
                activity: training.activity,
                duration: training.duration,
                customer: 'https://localhost:8080/api/customers/'+ training.customer
            };

            fetch('https://customerrest.herokuapp.com/api/trainings', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newTraining)
                })
            .then(res => fetchData())
            .catch(err => console.error(err))
        } else {
            window.alert("Please provide required information")
        }
    }

    const deleteTraining = (id) => {
        if(window.confirm('Are you sure you want to delete training?')) {
            fetch('https://customerrest.herokuapp.com/api/trainings/'+id, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const columns = [
        { Header: 'Activity', accessor: 'activity'},
        { Header: 'Date', accessor: 'date',
            Cell : (props)=> {
                const custom_date = moment(props.value).format('MM/DD/YYYY')
                return <span>{custom_date}</span>
            }
        },
        { Header: 'Duration (min)', accessor: 'duration'},
        { Header: 'Customer', id: 'id',  accessor: 'id'},
        { filterable: false, sortable: false, accessor: 'id', 
          Cell: row => <Button variant="outlined" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
    ]

    return(
        <div className={classes.content}>
            <p><b>Trainings: </b>{trainings.length}</p>
            <Addtraining saveTraining={saveTraining} />
            <ReactTable
                defaultPageSize={10}
                filterable={true}
                data={trainings}
                columns={columns}
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

export default Trainings;