import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";

// const Details = (props) =>{
//
// }
// export default Details;

function Modal(props) {

    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let {degreeName} = useParams();
    return (
        <div>
            {/*<h3>ID: {degreeName}</h3>*/}
            <p> {props.singleCourse.degreeType}</p>
        </div>
    );
}

export default Modal;