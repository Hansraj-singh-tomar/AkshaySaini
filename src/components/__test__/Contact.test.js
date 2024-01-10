import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact";
import "@testing-library/jest-dom"

// //Todo it("Should load contact us component", () => {


// test("Should load contact us component", () => {
//     render(<Contact />);

//    //? Querying
//     const heading = screen.getByRole("heading");

//     //? Assertion
//     expect(heading).toBeInTheDocument();
// })

// test("Should load button inside Contact component", () => {
//     render(<Contact />);
//     //TODO - const button = screen.getByRole("button");
//     const button = screen.getByText("Submit")

//     expect(button).toBeInTheDocument();
// })

// test("Should load input name inside name Contact component", () => {
//     render(<Contact />);
//     const inputName = screen.getByPlaceholderText("Enter Your Name");

//     expect(inputName).toBeInTheDocument();
// });

// test("Should load 2 input boxes on the Contact component", () => {
//     render(<Contact />);

//     const inputBoxes = screen.getAllByRole("textbox");

//     // console.log(inputBoxes);
//     // console.log(inputBoxes[0]);
//     // console.log(inputBoxes.length);

//     // Assersion 
//     //Todo - expect(inputBoxes.length).toBe(2);
//     //Todo expect(inputBoxes.length).not.toBe(2);
// })

describe("Contact Us Page Test Case", () => {
    // beforeAll(() => {
    //     console.log("Before all");
    // })

    // beforeEach(() => {
    //     console.log("Before each");
    // })

    // afterAll(() => {
    //     console.log("After all");
    // })

    // afterEach(() => {
    //     console.log("After Each");
    // })

    test("Should load contact us component", () => {
        render(<Contact />);

        //? Querying
        const heading = screen.getByRole("heading");

        //? Assertion
        expect(heading).toBeInTheDocument();
    })

    test("Should load button inside Contact component", () => {
        render(<Contact />);
        //TODO - const button = screen.getByRole("button");
        const button = screen.getByText("Submit")

        expect(button).toBeInTheDocument();
    })

    test("Should load input name inside name Contact component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Enter Your Name");

        expect(inputName).toBeInTheDocument();
    });

    test("Should load 2 input boxes on the Contact component", () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole("textbox");

        // console.log(inputBoxes);
        // console.log(inputBoxes[0]);
        // console.log(inputBoxes.length);

        //? Assersion 
        expect(inputBoxes.length).toBe(2);
        //Todo - expect(inputBoxes.length).not.toBe(2);
    })
})