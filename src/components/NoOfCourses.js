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
    <Typography className={classes.root} variant="h6" component="h6">
    Number of courses are {props.noOfCourses}
</Typography>
    </div>
}

export default NoOfCourses