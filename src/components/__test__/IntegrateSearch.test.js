import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";

import { BrowserRouter } from "react-router-dom";

// fetch is browser method in that case we have to do like that
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});


it("Should search Restaurant List for gurukripa input text", async () => {
    // we you are doing state update and async operations in that case you have to wrap your component inside act(() => {}) function 
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);


    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "gurukripa" } });
    fireEvent.click(searchBtn);

    // Screen should load 4 cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);
})

it("Should filtere Top Rated Restaurants", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurant" })
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(6);
})


// import userEvent from '@testing-library/user-event';
// it is similar to fireEvent

// userEvent => userEvent is generally considered more user-friendly and is recommended for most use cases because it simulates realistic user interactions.
// fireEvent => fireEvent is lower-level and is useful when you need to manually trigger events on elements.

