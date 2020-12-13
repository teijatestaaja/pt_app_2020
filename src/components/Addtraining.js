import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function Addtraining(props) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '', duration: '', activity: '', customer: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleInputChange = (event) => {
        setTraining({...training, [event.target.name ]: event.target.value})
    }

    const addTraining = () => {
        props.saveTraining(training);
        handleClose();
    }

    return (
        <div>
            <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
                Add training
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Training</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="date"
                        value={training.date}
                        onChange={e => handleInputChange(e)}
                        label="Date"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        onChange={e => handleInputChange(e)}
                        label="Duration in minutes"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        onChange={e => handleInputChange(e)}
                        label="Activity"
                        fullWidth
                    /> 
                    <TextField
                        margin="dense"
                        name="customer"
                        value={training.customer}
                        onChange={e => handleInputChange(e)}
                        label="Customer id"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={addTraining} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
    </div>
    )
}

export default Addtraining;