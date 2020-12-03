import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm.js";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test("first name input exists", () => {
    render(<ContactForm />);
    const fName = screen.getByLabelText(/First Name*/i);
    expect(fName).toBeInTheDocument();
    expect(fName).toBeTruthy();
});

test("last name input exists", () => {
    render(<ContactForm />);
    const lName = screen.getByLabelText(/Last Name*/i);
    expect(lName).toBeInTheDocument();
    expect(lName).toBeTruthy();
});

test("email input exists", () => {
    render(<ContactForm />);
    const email = screen.getByLabelText(/Email*/i);
    expect(email).toBeInTheDocument();
    expect(email).toBeTruthy();
});

test("message input exists", () => {
    render(<ContactForm />);
    const message = screen.getByLabelText(/message/i);
    expect(message).toBeInTheDocument();
    expect(message).toBeTruthy();
});

test("submit button exists", () => {
    render(<ContactForm />);
    const button = screen.getByRole("button");
    // console.log(button);
    expect(button).toBeInTheDocument();
    expect(button).toBeTruthy();
});



test("user can fill out and submit form", () => {
        //Arrange: setup react component
        render(<ContactForm />);
    
        //Act: Submit our form
        //  1. Query for our form elements
        //  2. Type into our form elements
        //  3. Query for our form buttom
        //  4. Click our form button
        const fName = screen.getByLabelText(/First Name*/i);
        const lName = screen.getByLabelText(/Last Name*/i);
        const email = screen.getByLabelText(/Email*/i);
        const message = screen.getByLabelText(/message/i);

        userEvent.type(fName, "edd");
        userEvent.type(lName, "maton");
        userEvent.type(email, "lsadkf");
        userEvent.type(message, "lsasdasddkf");
    
        const button = document.querySelector("button");
        // userEvent.click(button);
        console.log(button);
    
    
        //Assert: Test to see if submit worked
        //  1. Find our submitted inputs
        // const pre = screen.getByRole("pre");
        // expect(pre).toBeTruthy();
        // const newResult = screen.queryByText(/edd/i);
        // console.log(newResult);
        // expect(newResult).toBeInTheDocument();
    
    });
    
    
    // test("first name can't be more than 3 characters", () => {
    //     render(<ContactForm />);
    //     const fName = screen.getByLabelText(/First Name*/i);
    //     userEvent.type(fName, "michael");
    //     userEvent.clear(fName);
    //     const error = screen.queryByText(/maxlength/i);
    //     expect(error).toBeTruthy();
    //     expect(error).toBeInTheDocument();
    // });