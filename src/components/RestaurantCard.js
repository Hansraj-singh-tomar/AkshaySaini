import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({ resObj }) => {
    const { loggedInUser } = useContext(UserContext);

    const { name, sla: { deliveryTime }, cuisines, areaName, cloudinaryImageId, avgRating, id } = resObj?.info || {}

    return (
        <div data-testid="resCard" className='res-card'>
            <img className='card-img' src={`${CDN_URL}/${cloudinaryImageId}`} />
            <div>
                <h3>{name}</h3>
                <h4>{avgRating} Stars - {deliveryTime} mins</h4>
                <p>{cuisines?.slice(0, 4).join(", ")}</p>
                <p>{areaName}</p>
                <p>User: {loggedInUser}</p>
            </div>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return ({ resObj }) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard resObj={resObj} />
            </div>
        )
    }
}

export default RestaurantCard;
