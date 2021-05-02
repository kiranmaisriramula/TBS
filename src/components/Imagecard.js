import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import abc from "../Images/truck.jpg"
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import IconButton from "@material-ui/core/IconButton";
import ProgressBar from './ProgressBar';


const useStyles = makeStyles({
    root: {
        maxWidth: 250,
    },
});

const Imagecard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="volvo XC556878"
                    height="100"
                    image={abc}
                    title="vehicle name"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        volvo XC556878
          </Typography>
          <div style={{display:"flex",justifyContent:"space-between"}}> 
    <div>
    Capacity
    <ProgressBar />
    </div>
   <div>
    Time
    <ProgressBar />
    </div>
    </div>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton >
                    <PauseCircleOutlineIcon />
                </IconButton>
                <IconButton >
                    <PauseCircleOutlineIcon />
                </IconButton>
                <Chip label="KNOW MORE" />
            </CardActions>
        </Card>
    );
}

export default Imagecard;
