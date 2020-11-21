import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Details from "./Details";

const Home = (props) => {
    const [degreeName, setDegreeName] = useState("");
    const [oneCourse, setOneCourse] = useState([]);
    // const [show, setShow] = useState(true);
    // const handleShow = () => setShow(true);

    return <Router>
        <div className="content">
            {props.allCourses.map((eachCourse, index) => <div key={index}>
                <div id={"deptName-" + index}><h5>{eachCourse.deptName}</h5></div>
                <Link to={"/" + degreeName} name={eachCourse.crawledCourses.degreeName} onClick={(e) => {
                    setOneCourse(eachCourse);
                    setDegreeName(eachCourse.crawledCourses.degreeName.replace(/ /g, ''));
                }}> <span>{eachCourse.crawledCourses.degreeName}</span></Link>
                <div id={"degreeType-" + index}><span>{eachCourse.degreeType}</span></div>
                <div id={"language-" + index}><span>{eachCourse.crawledCourses.language}</span></div>
                <div id={"uniName-" + index}><a href={eachCourse.crawledCourses.website} rel="link to uni site"
                                                target="_blank"><span>{eachCourse.crawledCourses.uniName}</span></a>
                </div>
            </div>)}
            <Switch>
                <Route path="/:degreeName" children={<Details singleCourse={oneCourse}/>}/>
            </Switch>
        </div>
    </Router>
}

export default Home;