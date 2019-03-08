import React, { Component } from 'react';
import EmployeeHeader from "../components/employeeHeader";
import EmployeeList from "../components/employeeList"
import employeeData from "../data/employeeData";

let componenStyling = {
  searchInput: {
    textAlign: "left",
    width: "90%",
    marginLeft: "20px",
    paddingLeft: "10px"
  }
}

export default class ParentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeList: employeeData,
      filterData: [],
      filterText: ""
    }

    this.state.filterData = this.state.employeeList;
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  deleteEmployee(empId) {
    var deletedData = this.state.employeeList.filter((emp) => {
      if(emp.id != empId) {
        return true;
      }
      
      return false;
    })

    

    this.setState({
      employeeList: deletedData
    }, () => {
      var filteredData = this.filterFunction();
      this.setState({
        filterData: filteredData
      })
    });
  }

  filterFunction() {
    var filteredData = this.state.employeeList.filter((emp) => {
      if(emp.name.indexOf(this.state.filterText) > -1) {
        return true;
      }
      
      return false;
    })

    return filteredData;
  }

  filterData(event) {
    var filteredData = this.filterFunction();
    this.setState({
      filterData: filteredData,
      filterText: event.target.value
    })
  }


  render() {
    return (
      <>
        <div className="row">
            <div className="col">
              <img className="logo_image" src="./images/logo.jpg" alt="This is Logo" />
            </div>
        </div>

        <div className="row">
          <EmployeeHeader />
        </div><br></br>

        <div className="row">
          <input type="text" value={this.state.filterText} onChange={(e) => this.filterData(e)} placeholder="Enter Employee Name" style={componenStyling.searchInput} />
        </div>

        <EmployeeList employeeList={this.state.filterData} deleteEmployee={this.deleteEmployee} />
      </>
    )
  }
}
