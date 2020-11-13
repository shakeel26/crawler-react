import './App.css';
import Request from "./components/Request";
import React, {useState} from "react";
import axios from "axios";

function App() {

    const [getAllCourses, setGetAllCourses] = useState([]);
    const [degreeName,setDegreeName] = useState("");
    axios.get('http://localhost:8081/getAllCourses')
        .then(res => {
            setGetAllCourses(res.data)
             // setDegreeName(getAllCourses.map(eachProgram => {
             //     let degreeNameWithoutSpace = eachProgram.crawledCourses.degreeName;
             //     degreeNameWithoutSpace = 'hello'
             // }))
        });

    return (<div>
            {getAllCourses.map((eachCourse,index) => <div>
                <div id={"studyProgram-" + index}>
                    <div id={"deptName-"+ index}><h5>{eachCourse.deptName}</h5><span></span></div>
                    <div id={"uniName-"+ index}><a href={"/"+eachCourse.crawledCourses.degreeName} >{eachCourse.crawledCourses.degreeName}</a><span></span></div>

                    <div id={"degreeName-"+ index} className="degreeName" data-toggle="modal"
                         data-target="#myModal">{eachCourse.crawledCourses.degreeName}<span></span></div>
                    <div id={"degreeType-"+ index}><span>{eachCourse.degreeType}</span></div>
                    <div id={"language-"+ index}><span>{eachCourse.crawledCourses.language}</span></div>
                    <div id={"uniName-"+ index}><a href={eachCourse.crawledCourses.website} target="_blank">{eachCourse.crawledCourses.uniName}</a><span></span></div>
                </div>


            </div>)}
        </div>
    );

}

export default App;