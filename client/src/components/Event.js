import React from 'react';

export default function Event(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.location}</td>
            <td>{props.date}</td>
            <td>{props.participant}</td>
            <td>{props.note}</td>
        </tr>
    )
}
