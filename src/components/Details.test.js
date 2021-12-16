import React from "react";
import Details from "./Details";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {Routes} from 'react-router-dom';


test ("likes started with text 0", ()=>{
const component = render(

<Details likes={0}/>

);
const detailElement = component.getByTestId("testlikes");
expect (detailElement.textContent).toBe("0");


})