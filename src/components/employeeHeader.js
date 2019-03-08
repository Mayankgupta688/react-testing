import React from "react";

var componentStyle = {
    marginLeft: "20px"
}

export default class EmployeeHeader extends React.Component {
    render() {
        return <h1 style={componentStyle}>Employee List</h1>
    }
}