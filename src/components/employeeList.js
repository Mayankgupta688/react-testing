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
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12" style={componentStyling.containerDiv} key={employee.id}>
                    <div style={componentStyling.innerDiv}>
                        <img style={componentStyling.userImg} src={employee.avatar} alt="User"/><br></br><br></br>
                        <EmployeeDetails employee={employee} deleteEmployee={this.props.deleteEmployee} />
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderList()}
            </div>
        )
        
    }
}