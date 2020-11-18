import React, {useState} from "react";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import Home from "./components/Home";


function App() {
    const [getAllCourses, setGetAllCourses] = useState([]);

    axios.get('http://localhost:8081/getAllCourses')
        .then(res => {
            setGetAllCourses(res.data)
        });
    return (
        <Home allCourses = {getAllCourses}/>
    );
}

export default App;