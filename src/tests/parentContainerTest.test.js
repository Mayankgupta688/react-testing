import "./setupTests";
import { shallow, mount, render } from 'enzyme';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import ParentComponent from "../container/parentContainer";

describe("parentContainer", function() {

    // Tests using Simple Rendering of Components Created

    it("should Render Component", function() {
        var divContainer = document.createElement("div");
        ReactDOM.render(<ParentComponent />, divContainer)
    }); 
});

describe("Testing Component with Shallow Rendering", function() {

    it("should display Parent Component", function() {

        // Here We are using Shallow Rendering to check for the elements

        let parentConponentHolder = shallow(<ParentComponent />)

        // Shallow enables us to have the element rendered and object available as JQuery Object after Rendering

        let headerElement = parentConponentHolder.find("EmployeeHeader")
        expect(headerElement.length).toBe(1);

        let empListElement = parentConponentHolder.find("EmployeeList")
        expect(empListElement.length).toBe(1);
    })

    it("delete one of the employee Details", function() {

        // Here in this function we are shallow rendering a component
        let parentConponentHolder = shallow(<ParentComponent />)

        // From the component, we are trying to see if the "EmployeeList" elements are displayed or not.
        let empListElement = parentConponentHolder.find("EmployeeList")

        // Looking for the state of the rendered component
        expect(parentConponentHolder.instance().state.employeeList.length).toBe(50);

        // Calling function that are there in Parent Component with Dummy Data
        parentConponentHolder.instance().deleteEmployee(1);

        // Checking for the impact of the function called with dummy data on State Variables
        expect(parentConponentHolder.instance().state.employeeList.length).toBe(49);
    })
})