import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    height: 20,
    width: 70,
    backgroundColor: "#e0e0dec2", 
    border:"1px solid #456aaf"
  },
  fillerStyles: {
    height: '100%',
    width: `${70}%`,
    backgroundColor: "#456aaf",
    borderRadius: 'inherit',
    textAlign: 'right'
  },
  labelStyles:{
    padding: 0,
    color: 'white',
  }

}));

function ProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.containerStyles} >
      <div className={classes.fillerStyles}>
        <span className={classes.labelStyles}>{`${70}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;