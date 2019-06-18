import "./setupTests";
import { shallow, mount, render } from 'enzyme';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import employeeData from "../data/employeeData";
import EmployeeDetails from "../components/employeeDetails";

describe("Test Employee Details Container", function() {

    it("will validate if the delete button is called", function() {

        const mockCallback = jest.fn();

        var props = {
            employee: {"id":"1","createdAt":"2018-12-03T11:37:42.015Z","name":"Ms. Gaylord Streich","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg"}
        }

        console.dir(props.employee)

        var employeeListComponent = shallow(<EmployeeDetails employee={props.employee} deleteEmployee={mockCallback} />)

        expect(employeeListComponent.find("b").text()).toBe("User Name: Ms. Gaylord Streich");

        employeeListComponent.find("button").simulate("click").simulate("click");

        expect(mockCallback.mock.calls.length).toBe(2);
    })
});