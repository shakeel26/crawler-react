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