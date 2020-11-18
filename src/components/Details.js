import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Button, Table, Modal} from 'react-bootstrap';
import {TableDetails, ContentDetails} from "./TableDetails";
import '../index.css'

const Details = (props) => {

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {degreeName} = useParams();
    // return (
    //     <div>
    //         {/*<h3>ID: {degreeName}</h3>*/}
    //         <p> {props.singleCourse.degreeType}</p>
    //     </div>
    // );
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        refreshBaby();
    };
    const refreshBaby = () =>{
        setTimeout(()=> {
            window.location.reload(); //reload page with delay of half second
        }, 200);    }
    const handleShow = () => setShow(true);

    const removeSelfWrittenSentence = props.singleCourse.crawledCourses.aboutThesubjects;
    const aboutSubjects = removeSelfWrittenSentence.replace('You will encounter these subjects in the curriculum:', '');

    return (
        <BrowserRouter>
        <div className="container">
            {/*<h1 onClick={handleShow}>{props.singleCourse.crawledCourses.degreeName}</h1>*/}
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Link to={"/"}>
                <Modal.Header closeButton onClick={handleClose}>
                    {props.singleCourse.crawledCourses.degreeName !== '' ?
                        <Modal.Title>{props.singleCourse.crawledCourses.degreeName}</Modal.Title> : null}
                </Modal.Header>
                </Link>
                <Modal.Body>
                    <Table>
                        <tbody>
                        {props.singleCourse.deptName !== '' ?
                            <TableDetails name="Department" id="deptName"
                                          fieldDesc={props.singleCourse.deptName}/> : null}
                        {props.singleCourse.crawledCourses.degreeName !== '' ?
                            <TableDetails name="Degree" id="degreeName"
                                          fieldDesc={props.singleCourse.crawledCourses.degreeName}/>
                            : null}
                        {props.singleCourse.crawledCourses.specialization !== '' ?
                            <TableDetails name="Specialization" id="specialization"
                                          fieldDesc={props.singleCourse.crawledCourses.specialization}/>
                            : null}
                        {props.singleCourse.crawledCourses.duration !== '' ?
                            <TableDetails name="Duration" id="duration"
                                          fieldDesc={props.singleCourse.crawledCourses.duration}/>
                            : null}
                        {props.singleCourse.crawledCourses.fee !== '' ?
                            <TableDetails name="Fee" id="fee" fieldDesc={props.singleCourse.crawledCourses.fee}/>
                            : null}
                        {props.singleCourse.crawledCourses.language !== '' ?
                            <TableDetails name="Language" id="language"
                                          fieldDesc={props.singleCourse.crawledCourses.language}/>
                            : null}
                        {props.singleCourse.website !== '' ?
                            <tr className="row">
                                <td className="col-sm-5"></td>
                                <td className="col-sm-7"
                                    id='website'><a href={props.singleCourse.website}
                                                    target="_blank">{props.singleCourse.website}</a></td>
                            </tr> : null}
                        {props.singleCourse.crawledCourses.studyType !== '' ?
                            <TableDetails name="Study Type" id="studyType"
                                          fieldDesc={props.singleCourse.crawledCourses.studyType}/>
                            : null}
                        {props.singleCourse.crawledCourses.presence !== '' ?
                            <TableDetails name="Presence" id="presence"
                                          fieldDesc={props.singleCourse.crawledCourses.presence}/>
                            : null}
                        </tbody>
                    </Table>

                    {props.singleCourse.crawledCourses.aboutTheCourse !== '' ?
                        <ContentDetails name="The Course" id="aboutTheCourse"
                                        fieldDesc={props.singleCourse.crawledCourses.aboutTheCourse}/>
                        : null}

                    {aboutSubjects !== '' ?
                        <ContentDetails name="Subjects" id="aboutSubjects" fieldDesc={aboutSubjects}/>
                        : null}

                    {props.singleCourse.crawledCourses.content !== '' ?
                        <ContentDetails name="Content" id="content"
                                        fieldDesc={props.singleCourse.crawledCourses.content}/>
                        : null}

                    {props.singleCourse.crawledCourses.profile !== '' ?
                        <ContentDetails name="Profile" id="profile"
                                        fieldDesc={props.singleCourse.crawledCourses.profile}/>
                        : null}

                    {props.singleCourse.crawledCourses.career !== '' ?
                        <ContentDetails name="Career" id="career" fieldDesc={props.singleCourse.crawledCourses.career}/>
                        : null}

                    {props.singleCourse.crawledCourses.requirement !== '' ?
                        <ContentDetails name="Requirement" id="requirement"
                                        fieldDesc={props.singleCourse.crawledCourses.requirement}/>
                        : null}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <Link to={"/"}>Close</Link>
                    </Button>
                </Modal.Footer>
            </Modal>
            <Switch>
                <Route path="/" />
            </Switch>
        </div>
</BrowserRouter>
);
}
export default Details;