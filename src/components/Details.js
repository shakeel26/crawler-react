import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";
import {Button, Table, Modal} from 'react-bootstrap';

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
                            <tr className="row">
                                <td className="col-sm-5">Department</td>
                                <td className="col-sm-7" id='deptName'>{props.singleCourse.deptName}</td>
                            </tr> : null}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save It!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default Details;