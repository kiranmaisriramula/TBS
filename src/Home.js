import React from "react";
import Select from "./components/Select";
import Calendar from "./components/Calendar";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';


class Home extends React.Component {
    render() {
        return (
            <Grid
                container
                spacing={4}
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >
                <Grid item
                    container
                >

                    <Grid item>
                        <Select />
                    </Grid>
                    <Grid item>
                        <Calendar />
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained">Week</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained">Today</Button>
                    </Grid>
                </Grid>
                <Grid item
                    container>
                    <Grid item xs={1}>
                        <Button variant="contained"><SendIcon />Export</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained"><SaveIcon />Save</Button>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default Home;