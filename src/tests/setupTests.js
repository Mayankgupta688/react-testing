import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from "react-dom";
import React from "react";
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });