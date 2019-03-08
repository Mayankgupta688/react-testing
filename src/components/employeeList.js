import React from 'react';

import EmployeeDetails from "./employeeDetails";

var componentStyling = {
    containerDiv: {
        padding: "10px"
    }, userImg: {
        width: '100%'
    }, innerDiv: {
        padding: "10px",
        margin: "10px",
        border: "1px solid red"
    }
}

export default class EmployeeList extends React.Component {
    
    renderList() {
        return this.props.employeeList.map(employee => {
            return (
                <div class="col-xl-2" style={componentStyling.containerDiv}>
                    <div style={componentStyling.innerDiv}>
                        <img style={componentStyling.userImg} src={employee.avatar} /><br></br><br></br>
                        <EmployeeDetails employee={employee} />
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div class="row">
                {this.renderList()}
            </div>
        )
        
    }
}