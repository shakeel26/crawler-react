import React from "react";


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
            <select name={props.id} id={props.id}>
                <option name={props.id} id={props.id}>Any</option>
                {props.fieldDesc.map(desc =>
                    <option name={props.id} id={props.id}>{props.fieldDesc}</option>
                )}
            </select>
        </div>
    )
}