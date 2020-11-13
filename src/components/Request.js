import React, {useState} from "react";
import axios from 'axios';

const Request = () => {

    const [url, setUrl] = useState(`http://localhost:8081/getAllCourses`)
    axios.get(url)
        .then(res => {
            console.log(res.data)
        });

    // fetch(url)
    //     .then(result => result.json())
    //      .then(data => console.log(data))
    //     .catch(error => console.log(error))
}

export default Request;