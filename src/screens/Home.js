import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Details from "./Details";
import NoOfCourses from "../components/NoOfCourses";
import FilterForm from "../components/FilterForm";
import axios from "axios";
import {Container, Grid,Paper, Box, Typography} from '@material-ui/core';
import useStyles from './HomeStyles';

const Home = () => {

    const classes = useStyles();

    const [oneCourse, setOneCourse] = useState(null);
    const [getAllCourses, setGetAllCourses] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [distinctStuff, setDistinctStuff] = useState([]);

    const filterCourses = (data) => {
        setGetAllCourses(data)
    }
    useEffect(() => {
        axios.get('http://localhost:8081/getAllCourses')
            .then(res => {
                setGetAllCourses(res.data)
            }).catch(error => console.log(error))
    }, [])

    useEffect(() => {
        const url = window.location.href;
        const degreeInUrl = url.substring(url.lastIndexOf('/') + 1);
        if (url.includes('degree')) {
            getAllCourses.forEach(item => {
                if (item.crawledCourses.degreeName.replace(/ /g, '') === degreeInUrl){
                    setOneCourse(item)
                }
            })
    }
        // get name from url,
        // check if url contains string like "/degree/" and if so then proceed otherwise ignore
        // get single course detail from the list of course by searching with degreeName property (apply .filter(item => item.degreeName === pathDegreeName)
        // set setOneCourse(foundCourse)}
    }, [getAllCourses])

    useEffect(() => {
        axios.get('http://localhost:8081/distictStuff')
            .then(res => {
                setDistinctStuff(res.data)
                setLoading(false);
            }).catch(error => console.log(error))
    }, [distinctStuff.length])

    return (
    <Container maxWidth="xl" style={{padding: "20px"}}>
        <Grid container spacing={3}>
        <Grid item sm={3} md={3} lg={3}>
            <NoOfCourses noOfCourses={getAllCourses.length}/>

            <Box mt={2} style={{textAlign:'center'}}>
                <img className={classes.cImg} src="https://image.shutterstock.com/image-photo/pakistan-flag-260nw-735206098.jpg" alt="flag img" />
                <Typography className={classes.ambasyName} variant="h4" component="h4">Pakistan embassy</Typography>
            </Box>
        </Grid>

        <Grid item sm={5} md={5} lg={5}>
            <div className="list-wrapper">
                {getAllCourses.map((eachCourse, index) => <Paper elevation={4} className={classes.detailCard}  key={index}>
                    <div id={"deptName-" + index}><h5>{eachCourse.deptName}</h5></div>
                    <Link to={"/degree/" + eachCourse.crawledCourses.degreeName.replace(/ /g, '')}
                          name={eachCourse.crawledCourses.degreeName} onClick={() => setOneCourse(eachCourse)}>
                        <span>{eachCourse.crawledCourses.degreeName}</span>
                    </Link>
                    <div id={"degreeType-" + index}><span>{eachCourse.degreeType}</span></div>
                    <div id={"language-" + index}><span>{eachCourse.crawledCourses.language}</span></div>
                    <div id={"uniName-" + index}><a href={eachCourse.crawledCourses.website} rel="link to uni site"
                                                    target="_blank"><span>{eachCourse.crawledCourses.uniName}</span></a>
                    </div>
                </Paper>)}
                {oneCourse && <Details singleCourse={oneCourse} setOneCourse={setOneCourse}/>}
            </div>
        </Grid>

        <Grid item sm={4} md={4} lg={4}>
            <FilterForm loading={isLoading} distinctData={distinctStuff} onFilterCourses={filterCourses}/>
        </Grid>
        </Grid>
    </Container>
    )
}
export default Home;