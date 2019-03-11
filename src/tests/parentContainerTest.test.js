import "./setupTests";

;import ReactDOM from "react-dom";
import React from "react";
import { shallow, mount, render } from 'enzyme';

import ParentComponent from "../container/parentContainer";
import EmployeeList from "../components/employeeList"

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
})