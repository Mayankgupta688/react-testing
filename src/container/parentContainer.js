import React, { Component } from 'react';
import EmployeeHeader from "../components/employeeHeader";
import EmployeeList from "../components/employeeList"
import employeeData from "../data/employeeData";

export default class ParentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeList: employeeData
    }
  }


  render() {
    return (
      <>
        <div class="row">
            <div class="col">
              <img class="logo_image" src="./images/logo.jpg" alt="This is Logo" />
            </div>
        </div>

        <div class="row">
          <EmployeeHeader />
        </div><br></br>

        <EmployeeList employeeList={this.state.employeeList} />
      </>
    )
  }
}
