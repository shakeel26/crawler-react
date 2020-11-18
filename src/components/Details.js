import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";
import {Button, Table, Modal} from 'react-bootstrap';
import TableDetails from "./TableDetails";
import '../index.css'

// const Details = (props) =>{
//
// }
// export default Details;

function Details(props) {

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {degreeName} = useParams();
    // return (
    //     <div>
    //         {/*<h3>ID: {degreeName}</h3>*/}
    //         <p> {props.singleCourse.degreeType}</p>
    //     </div>
    // );
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeSelfWrittenSentence = props.singleCourse.crawledCourses.aboutThesubjects;
    const aboutSubjects = removeSelfWrittenSentence.replace('You will encounter these subjects in the curriculum:', '');

    return (
        <div className="container">
            <h1 onClick={handleShow}>{props.singleCourse.crawledCourses.degreeName}</h1>

            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Open Demo Model*/}
            {/*</Button>*/}

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {props.singleCourse.crawledCourses.degreeName !== '' ?
                        <Modal.Title>{props.singleCourse.crawledCourses.degreeName}</Modal.Title> : null}
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <tbody>
                        {props.singleCourse.deptName !== '' ?
                            <TableDetails name="Department" id="deptName" fieldDesc={props.singleCourse.deptName}/> : null}
                        {props.singleCourse.crawledCourses.degreeName !== '' ?
                            <TableDetails name="Degree" id="degreeName" fieldDesc={props.singleCourse.crawledCourses.degreeName} />
                            : null}
                        {props.singleCourse.crawledCourses.specialization !== '' ?
                            <TableDetails name="Specialization" id="specialization" fieldDesc={props.singleCourse.crawledCourses.specialization} />
                            : null}
                        {props.singleCourse.crawledCourses.duration !== '' ?
                            <TableDetails name="Duration" id="duration" fieldDesc={props.singleCourse.crawledCourses.duration} />
                            : null}
                        {props.singleCourse.crawledCourses.fee !== '' ?
                            <TableDetails name="Fee" id="fee" fieldDesc={props.singleCourse.crawledCourses.fee} />
                            : null}
                        {props.singleCourse.crawledCourses.language !== '' ?
                            <TableDetails name="Language" id="language" fieldDesc={props.singleCourse.crawledCourses.language} />
                            : null}
                        {props.singleCourse.website !== '' ?
                            <tr className="row">
                                <td className="col-sm-5"></td>
                                <td className="col-sm-7"
                                    id='website'><a href={props.singleCourse.website} target="_blank">{props.singleCourse.website}</a></td>
                            </tr> : null}
                        {props.singleCourse.crawledCourses.studyType !== '' ?
                            <TableDetails name="Study Type" id="studyType" fieldDesc={props.singleCourse.crawledCourses.studyType} />
                            : null}
                        {props.singleCourse.crawledCourses.presence !== '' ?
                            <TableDetails name="Presence" id="presence" fieldDesc={props.singleCourse.crawledCourses.presence} />
                            : null}
                        </tbody>
                    </Table>

                    {props.singleCourse.crawledCourses.aboutTheCourse !== '' ?
                        <div className="row">
                            <div className="col-sm-12"><h4>The Course</h4></div>
                            <div className="col-sm-12"
                                 id='aboutTheCourse'>{props.singleCourse.crawledCourses.aboutTheCourse}</div>
                        </div> : null}
                    {aboutSubjects !== '' ?
                        <div className="row">
                            <div className="col-sm-12"><h4>Subjects</h4></div>
                            <div className="col-sm-12"
                                 id='aboutSubjects'>{aboutSubjects}</div>
                        </div> : null}
                    {props.singleCourse.crawledCourses.content !== '' ?
                        <div className="row">
                            <div className="col-sm-12"><h4>Content</h4></div>
                            <div className="col-sm-12"
                                 id='content'>{props.singleCourse.crawledCourses.content}</div>
                        </div> : null}
                    {props.singleCourse.crawledCourses.profile !== '' ?
                        <div className="row">
                            <div className="col-sm-12"><h4>Profile</h4></div>
                            <div className="col-sm-12"
                                 id='profile'>{props.singleCourse.crawledCourses.profile}</div>
                        </div> : null}
                    {props.singleCourse.crawledCourses.career !== '' ?
                        <div className="row">
                            <div className="col-sm-12"><h4>Career</h4></div>
                            <div className="col-sm-12"
                                 id='career'>{props.singleCourse.crawledCourses.career}</div>
                        </div> : null}
                    {props.singleCourse.crawledCourses.requirement !== '' ?
                        <div className="row">
                            <div className="col-sm-12"><h4>Requirement</h4></div>
                            <div className="col-sm-12"
                                 id='requirement'>{props.singleCourse.crawledCourses.requirement}</div>
                        </div> : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Details;