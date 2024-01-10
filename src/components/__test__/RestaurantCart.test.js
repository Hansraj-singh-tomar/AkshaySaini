import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import MOCK_DATA from '.././mocks/resCardMock.json';
import RestaurantCard from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";

const MockRestaurantCard = ({ resObj }) => {
    const { name, sla: { deliveryTime }, cuisines, areaName, cloudinaryImageId, avgRating } =
        resObj?.info || {};

    return (
        <div className='mock-res-card'>
            <img className='mock-card-img' src={`mock/${cloudinaryImageId}`} alt={`Mock ${name} Image`} />
            <div>
                <h3>{name}</h3>
                <h4>{avgRating} Stars - {deliveryTime} mins</h4>
                <p>{cuisines?.slice(0, 4).join(', ')}</p>
                <p>{areaName}</p>
            </div>
        </div>
    );
};

it("Should render RestaurantCart component with props Data", () => {
    // prop name must be similar to your RestaunrantCard.js component
    render(<RestaurantCard resObj={MOCK_DATA} />);

    const name = screen.getByText("Gurukripa Restaurant - Sarwate");

    expect(name).toBeInTheDocument();
});


it("Should render RestaurantCard component with Promoted Label", () => {
    // Test HOC : withPromotedLabel(RestaurantCard)

    const EnhancedComponent = withPromotedLabel(MockRestaurantCard);
    render(<EnhancedComponent resObj={MOCK_DATA} />);

    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();

    const restaurantName = screen.getByText("Gurukripa Restaurant - Sarwate");
    expect(restaurantName).toBeInTheDocument();


});