import { screen, fireEvent, render } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import MOCK_DATA_NAME from "../mocks/mockResMenuData.json";
import "@testing-library/jest-dom"

import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../Store/appStore"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME),
    })
);

it("Should Load Restaurant Menu Component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Burger+Fries (Save upto 15%) (30)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("menuItems").length).toBe(30);

    expect(screen.getByText("Cart(0)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "Add" })
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart(1)")).toBeInTheDocument();
});