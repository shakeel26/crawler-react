import React, {useState, useEffect} from "react";
import axios from "axios";


export const TableDetails = (props) => {
    return (
        <tr className="row">
            <td className="col-sm-5">{props.name}</td>
            <td className="col-sm-7" id={props.id}>{props.fieldDesc}</td>
        </tr>)
}

export const ContentDetails = (props) => {
    return (
        <div className="row">
            <div className="col-sm-12"><h4>{props.name}</h4></div>
            <div className="col-sm-12" id={props.id}>{props.fieldDesc}</div>
        </div>
    )
}

export const Form = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>Choose {props.name}:</label>
            <select name={props.name} id={props.id} onChange={props.changeSelection}>
                <option name={props.id} id={props.id}>Any</option>
                {props.fieldDesc.map((desc, index) =>
                    <option key={index} name={props.id} id={props.id}>{desc}</option>
                )}
            </select>

                {/*<label htmlFor="lastName">Last Name</label>*/}
                {/*<input type="text" name="lastName" value={formData.language} onChange={handleChange} required/>*/}

            {/*<button id="callFilter">Submit</button>*/}
        </div>
    )
}