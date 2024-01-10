import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

import Header from '../Header'
import { Provider } from "react-redux";
import appStore from "../../Store/appStore"
import { BrowserRouter } from "react-router-dom";

describe("Header Component Test Cases", () => {

    it("Should render Header Component with a login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", { name: "Login" });

        expect(loginButton).toBeInTheDocument();
    }),

        it("Should render Header Component with a cart item", () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                    </Provider>
                </BrowserRouter>
            );

            const cartItem = screen.getByText("Cart(0)");

            expect(cartItem).toBeInTheDocument();
        }),

        it("Should render header component with a cart item", () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                    </Provider>
                </BrowserRouter>
            );

            //? inside regular expression we don't need to pass exact string or text inside it, it will pass the test case if any string is matching 
            // ! keep care of capital letters in string otherwise it will fail the test case
            const cartItem = screen.getByText(/Cart/);
            expect(cartItem).toBeInTheDocument();
        }),

        it("Should change Login Button to Logout on click", () => {
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                    </Provider>
                </BrowserRouter>
            );

            const loginButton = screen.getByRole("button", { name: "Login" });

            fireEvent.click(loginButton);

            const logoutButton = screen.getByRole("button", { name: "Logout" });

            expect(logoutButton).toBeInTheDocument();
        })

})