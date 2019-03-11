import "./setupTests";
import { shallow, mount, render } from 'enzyme';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import employeeData from "../data/employeeData";
import EmployeeList from "../components/employeeList";

describe("Test EmployeeList Container", function() {
    it("should show List of Employees", function() {

        let props = {
            employeeList: employeeData
        }

        var employeeListComponent = shallow(<EmployeeList {...props} />)

        var employeeDetailsContainer = employeeListComponent.find("EmployeeDetails");

        expect(employeeDetailsContainer.length).toBe(employeeData.length)
    });
});