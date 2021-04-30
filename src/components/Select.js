import React from "react";
import FormControl from '@material-ui/core/FormControl';
import SimpleSelect from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        width:200
      }
  }));
const Select=()=>
{
    const [vehicleType, setVehicleType] = React.useState('');
    const classes = useStyles();
    const onChange = (event) => {
        setVehicleType(event.target.value) ;
      }
    return(
        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Select Vehicle</InputLabel>
                        <SimpleSelect
                            value={vehicleType}
                            onChange={onChange}
                            label="Select Vehicle"
                        >
                            <MenuItem value={"VolvoXC1"}>VolvoXC1</MenuItem>
                            <MenuItem value={"VolvoXC2"}>VolvoXC2</MenuItem>
                            <MenuItem value={"VolvoXC3"}>VolvoXC3</MenuItem>
                        </SimpleSelect>
                    </FormControl>
    )
}

export default Select;
