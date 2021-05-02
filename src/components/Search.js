import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Search =()=> {
    const [searchItem,setSearchItem]=useState("");
  const classes = useStyles();
  const onChangefunc=((event)=>{
      setSearchItem(event.target.value)
  });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Search for vehicles, Drivers" variant="outlined" onChange={onChangefunc} value={searchItem}/>
    </form>
  );
}

export default Search;
