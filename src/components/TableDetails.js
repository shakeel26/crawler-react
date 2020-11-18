import React, {useState} from "react";


const TableDetails = (props) => {
    return (
        <tr className="row">
            <td className="col-sm-5">{props.name}</td>
            <td className="col-sm-7" id={props.id}>{props.fieldDesc}</td>
        </tr>)
}
export default TableDetails;