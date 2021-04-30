import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const Calendar=()=>
{
    const [selectedDate,setselectedDate]=React.useState(new Date('2014-08-18T21:11:54'));
    const onDateChange = (date) => {
       setselectedDate(date);
      }
    return(
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={onDateChange}
            KeyboardButtonProps={{
                "aria-label": "change date"
            }}
        />
    </MuiPickersUtilsProvider>
    )
}

export default Calendar;