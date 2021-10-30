import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import NoOfCourses from "../components/NoOfCourses";
import FilterForm from "../components/FilterForm";
import axios from "axios";
import { Container, Grid, Paper, Typography, Divider } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import useStyles from './HomeStyles';
import '../index.css';

const Home = () => {

    const classes = useStyles();
    const [oneCourse, setOneCourse] = useState(null);
    const [getAllCourses, setGetAllCourses] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [distinctStuff, setDistinctStuff] = useState([]);
    const [coursesCount, SetCoursesCount] = useState([]);

    // states fotr pagination
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)

    const filterCourses = (data) => {
        SetCoursesCount(data)

        const slice = data.slice(offset, offset + perPage)

        const postData = getAppendedHTML(slice)

        setGetAllCourses(postData)

        setPageCount(Math.ceil(data.length / perPage))
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    const getAppendedHTML = (slice) => {
        return (
        slice.map((eachCourse, index) => <Paper elevation={4} className={classes.detailCard} key={index}>
                    <Link to={"/degree/" + eachCourse.crawledCourses.degreeName.replace(/ /g, '')}
                        name={eachCourse.crawledCourses.degreeName} onClick={() => setOneCourse(eachCourse)}>
                        <span>{eachCourse.crawledCourses.degreeName}</span>
                    </Link>
                    <div id={"degreeType-" + index}><span>{eachCourse.degreeType}</span></div>
                    <div id={"language-" + index}><span>{eachCourse.crawledCourses.language}</span></div>
                    <div id={"deptName-" + index}><p>{'Department of ' + eachCourse.deptName}</p></div>
                    <div id={"uniName-" + index}><a href={eachCourse.crawledCourses.website} rel="link to uni site"
                        target="_blank"><span>{eachCourse.crawledCourses.uniName}</span></a>
                    </div>
                </Paper>)
                )
    }

    useEffect(() => {
        axios.get('http://localhost:8081/getAllCourses')
            .then(res => {
                SetCoursesCount(res.data);
                const slice = res.data.slice(offset, offset + perPage)

                const postData = getAppendedHTML(slice)

                setGetAllCourses(postData)

                setPageCount(Math.ceil(res.data.length / perPage))

            }).catch(error => console.log(error))
    }, [offset])

    useEffect(() => {
        const url = window.location.href;
        const degreeInUrl = url.substring(url.lastIndexOf('/') + 1);
        if (url.includes('degree')) {
            getAllCourses.forEach(item => {
                if (item.crawledCourses.degreeName.replace(/ /g, '') === degreeInUrl) {
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
        <Container maxWidth="xl" style={{ padding: "20px" }}>
            <Typography align="center" variant="h5">Yes, This is list of all study programs in Austria </Typography>
            <Divider />
            <Grid container justify="flex-start">
                {/* <Grid item sm={3} md={3} lg={3}>
            <Box mt={2} style={{textAlign:'center'}}>
                <img className={classes.cImg} src="https://image.shutterstock.com/image-photo/pakistan-flag-260nw-735206098.jpg" alt="flag img" />
                <Typography> Supported by </Typography>
                <Typography className={classes.ambasyName} variant="h4" component="h4">Pakistan embassy</Typography>
            </Box>
        </Grid> */}


                <Grid item sm={12} md={5} lg={5} order={{ xs: 1, sm: 1 }}>
                    <NoOfCourses noOfCourses={coursesCount.length} />
                    <FilterForm loading={isLoading} distinctData={distinctStuff} onFilterCourses={filterCourses} />
                </Grid>

                <Grid item sm={12} md={7} lg={7} order={{ xs: 2, sm: 2 }}>
                    <div className="list-wrapper" >
                        {getAllCourses}

                        {oneCourse && <Details singleCourse={oneCourse} setOneCourse={setOneCourse} />}
                    </div>
                </Grid>

            </Grid>

            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />

        </Container>
    )
}
export default Home;