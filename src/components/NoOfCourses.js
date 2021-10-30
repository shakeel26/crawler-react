import React from "react";
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: theme.spacing(2),
        fontWeight: theme.typography.fontWeightMedium.anchor,
        textAlign: "center"
    }
}))
const NoOfCourses = (props) => {
    const classes = useStyles();

return <div>
    <Typography className={classes.root} align="left" variant="h6" >
    Programs found: {props.noOfCourses}
</Typography>
    </div>
}

export default NoOfCourses