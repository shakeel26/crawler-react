import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Modal from "./Modal";


const Home = (props) => {
    const [degreeName, setDegreeName] = useState("");
    const [oneCourse, setOneCourse] = useState([]);

    return <Router>
        <div>
            {props.allCourses.map((eachCourse, index) => <div key={index}>
                <div id={"deptName-" + index}><h5>{eachCourse.deptName}</h5><span></span></div>
                <Link to={"/" + degreeName} name={eachCourse.crawledCourses.degreeName} onClick={(e) => {
//                        e.preventDefault();
                    setOneCourse(eachCourse);
                    setDegreeName(eachCourse.crawledCourses.degreeName.replace(/ /g, ''));
                }}> {eachCourse.crawledCourses.degreeName} </Link>
                <div id={"degreeType-" + index}><span>{eachCourse.degreeType}</span></div>
                <div id={"language-" + index}><span>{eachCourse.crawledCourses.language}</span></div>
                <div id={"uniName-" + index}><a href={eachCourse.crawledCourses.website} rel="link to uni site"
                                                target="_blank"> {eachCourse.crawledCourses.uniName}</a><span></span>
                </div>
            </div>)}
            <Switch>
                <Route path="/:degreeName" children={<Modal singleCourse={oneCourse}/>}/>
            </Switch>
        </div>
    </Router>
}

export default Home;