import "./setupTests";
import { shallow } from 'enzyme';
import React from 'react';
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

    it("should display Employee Header", function() {

        // Here We are using Shallow Rendering to check for the elements

        let parentConponentHolder = shallow(<ParentComponent />)

        // Shallow enables us to have the element rendered and object available as JQuery Object after Rendering

        let headerElement = parentConponentHolder.find("EmployeeHeader")
        expect(headerElement.length).toBe(1);

    })

    it("should display Employee List", function() {

        // Here We are using Shallow Rendering to check for the elements

        let parentConponentHolder = shallow(<ParentComponent />)

        // Shallow enables us to have the element rendered and object available as JQuery Object after Rendering

        let empListElement = parentConponentHolder.find("EmployeeList")
        expect(empListElement.length).toBe(1);

    })

    it("should contain list of Employees", function() {

        // Here in this function we are shallow rendering a component
        let parentConponentHolder = shallow(<ParentComponent />)

        // Looking for the state of the rendered component
        expect(parentConponentHolder.instance().state.employeeList.length).toBe(50);
    })

    it("delete one of the employee Details", function() {

        // Here in this function we are shallow rendering a component
        let parentConponentHolder = shallow(<ParentComponent />)

        // Looking for the state of the rendered component
        expect(parentConponentHolder.instance().state.employeeList.length).toBe(50);

        // Calling function that are there in Parent Component with Dummy Data
        parentConponentHolder.instance().deleteEmployee(2);

        // Checking for the impact of the function called with dummy data on State Variables
        expect(parentConponentHolder.instance().state.employeeList.length).toBe(49);
    })

    it("should filter data from List", function() {

        // Here in this function we are shallow rendering a component
        let parentConponentHolder = shallow(<ParentComponent />);

        parentConponentHolder.instance().state.filterText = "Ms.";

        // Checking for the impact of the function called with dummy data on State Variables
        expect(parentConponentHolder.instance().state.filterText).toBe('Ms.');
    })
})