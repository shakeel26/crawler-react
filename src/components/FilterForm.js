import React, {useEffect, useState} from "react";
import {Form} from './ReusedDivs'
import axios from "axios";

const FilterForm = (props) => {
    const [formData, setFormData] = useState({
        language: '',
        degreeType: '',
        deptName: '',
        presenceType: ''
    })

    if (props.loading) {
        return <div className="App">Loading...</div>;
    }

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value})
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('inside submitt', formData)

    axios.get(`http://localhost:8081/filter`, {params: formData})
        .then(res => {
            props.onFilterCourses(res.data);
        }).catch(error => console.log(error))
    }

    return (
        <div className="sidenav">
            <form onSubmit={handleSubmit}>
                <Form name="language" id="language" changeSelection={handleChange}
                      fieldDesc={props.distinctData.language} languageValue={props.distinctData.language}/>
                <Form name="degreeType" id="degreeTypes" changeSelection={handleChange}
                      fieldDesc={props.distinctData.degreeTypesResult}/>
                <Form name="deptName" id="deptNames" changeSelection={handleChange}
                      fieldDesc={props.distinctData.deptNamesResult}/>
                <Form name="presenceType" id="presenceType" changeSelection={handleChange}
                      fieldDesc={props.distinctData.presensceTypesResult}/>
                <button id="callFilter">Submit</button>
            </form>
        </div>
    )
}
export default FilterForm