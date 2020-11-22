import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Details from "./Details";
import NoOfCourses from "./NoOfCourses";
import FilterForm from "./FilterForm";
import axios from "axios";

const Home = () => {
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

    //TODO
    useEffect(() => {
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
        <>
            <NoOfCourses noOfCourses={getAllCourses.length}/>

            <div className="list-wrapper">
                {getAllCourses.map((eachCourse, index) => <div key={index}>
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
                </div>)}
                {oneCourse && <Details singleCourse={oneCourse} setOneCourse={setOneCourse}/>}
            </div>

            <FilterForm loading={isLoading} distinctData={distinctStuff} onFilterCourses={filterCourses}/>
        </>
    )
}
export default Home;