import React, {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import FilterForm from './components/FilterForm'

const App = () => {
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

    useEffect(() => {
        axios.get('http://localhost:8081/distictStuff')
            .then(res => {
                setDistinctStuff(res.data)
                setLoading(false);
            }).catch(error => console.log(error))
    }, [distinctStuff.length])


    return (<Router>
        <Switch>
            <Route path="/" >
                <Home allCourses={getAllCourses}/>
                <FilterForm loading={isLoading} distinctData={distinctStuff} onFilterCourses={filterCourses}/>
            </Route>
        </Switch>
    </Router>);
}

export default App;