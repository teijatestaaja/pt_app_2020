import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ReactTable from 'react-table';
import 'react-table/react-table.css';   // Needed for react-table 6
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Button from '@material-ui/core/Button';

function Customers() {
    const classes = useStyles();
    const [customers, setCustomers] = useState([]);

    // fetch data from the customer backend
    useEffect(() => fetchData(), []);

    const fetchData = () => {
       fetch('https://customerrest.herokuapp.com/api/customers')
       .then(response => response.json())
       .then(data => setCustomers(data.content))
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
	    .then(res => fetchData())
	    .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
	    .then(res => fetchData())
	    .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        if(window.confirm('Are you sure you want to delete customer?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const columns = [
        { Header: 'First name', accessor: 'firstname'},
        { Header: 'Last name', accessor: 'lastname'},
        { Header: 'Email', accessor: 'email'},
        { Header: 'Phone', accessor: 'phone'},
        { Header: 'Address', accessor: 'streetaddress'},
        { Header: 'Postcode', accessor: 'postcode'},
        { Header: 'City', accessor: 'city'},
        { filterable: false, sortable: false, width: 100, accessor: 'links[0]', 
          Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        { filterable: false, sortable: false, accessor: 'links[0].href', 
          Cell: row => <Button variant="outlined" onClick={() => deleteCustomer(row.value)}>Delete</Button>
        }
    ]

    return(
        <div className={classes.content}>
            <p><b>Customers: </b>{customers.length}</p>
            <Addcustomer saveCustomer={saveCustomer} />
            <ReactTable
                defaultPageSize={10}
                filterable={true}
                data={customers}
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

export default Customers;