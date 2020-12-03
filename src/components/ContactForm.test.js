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



test("user can fill out and submit form", async () => {
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
    
        const button = screen.getByRole("button");
        userEvent.click(button);
        console.log(button);
    

        //Assert: Test to see if submit worked
        //  1. Find our submitted inputs
        const fNameRender = await screen.findByText(/edd/);
        const lNameRender = screen.queryByText(/maton/);
        const emailRender = screen.queryByText(/lsadkf/);
        const messageRender = screen.queryByText(/lsasdasddkf/);
        expect(fNameRender).toBeInTheDocument();
        expect(lNameRender).toBeInTheDocument();
        expect(emailRender).toBeInTheDocument();
        expect(messageRender).toBeInTheDocument();

    });
    
    
    test("first name can't be more than 3 characters", async () => {
        render(<ContactForm />);
        const fName = screen.getByLabelText(/First Name*/i);
        userEvent.type(fName, "michael");
        const button = screen.getByRole("button");
        userEvent.click(button);
        const error = await screen.findByText(/maxlength/i);
        expect(error).toBeTruthy();
        expect(error).toBeInTheDocument();
    });