import React from "react";
import {Form} from './ReusedDivs'

const FilterForm = (props) => {
    if (props.loading) {
        return <div className="App">Loading...</div>;
    }
    return (
        <div className="sidenav" >
            <form>
            <Form name="Language" id="language" fieldDesc={props.distinctData.language}/>
            <Form name="degreeTypes" id="degreeTypes" fieldDesc={props.distinctData.degreeTypesResult}/>
            <Form name="deptNames" id="deptNames" fieldDesc={props.distinctData.deptNamesResult}/>
            <Form name="presensceTypes" id="presensceTypes" fieldDesc={props.distinctData.presensceTypesResult}/>
            <button id="callFilter">Submit</button>
            </form>
        </div>
    )
}
export default FilterForm