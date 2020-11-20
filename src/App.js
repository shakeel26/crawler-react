import React, {useEffect,useState} from "react";
import axios from "axios";
import Home from "./components/Home";
import FilterForm from './components/FilterForm'


function App() {
    const [getAllCourses, setGetAllCourses] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [distinctStuff, setDistinctStuff] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/getAllCourses')
            .then(res => {
                setGetAllCourses(res.data)
            }).catch(error => console.log(error))
    },[getAllCourses.length])

    useEffect(() => {
        axios.get('http://localhost:8081/distictStuff')
            .then(res => {
                setDistinctStuff(res.data)
                setLoading(false);
            }).catch(error => console.log(error))
    },[distinctStuff.length])

    return (<div>
        <Home allCourses={getAllCourses}/>
        <FilterForm loading={isLoading} distinctData={distinctStuff}/>
    </div>);
}

export default App;