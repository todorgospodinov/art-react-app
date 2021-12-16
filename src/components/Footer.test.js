import React from "react";
import Footer from "./Footer";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


test ("footer render with correct text", ()=>{
const component = render(<Footer/>);
const footerElement = component.getByTestId("footertest");
expect (footerElement.textContent).toBe("Address");


})