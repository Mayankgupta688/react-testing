import React from "react";

export default class EmployeeDetails extends React.Component {
    render() {
        var employeeDetails = this.props.employee;
        return (
            <div>
                <div>
                    <h5>User Id: {employeeDetails.id}</h5>
                    <label>User Name: {employeeDetails.name}</label>
                    <label>Employee Created On: {employeeDetails.createdAt}</label>
                </div>
            </div>
        )
    }
}