import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import { useState } from "react";

// we are fetching restaurant menu data from this component
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState();

    if (resInfo == null) {
        return <ShimmerSimpleGallery card imageHeight={200} imageWidth={300} col={4} row={2} caption />
    }

    const {
        sla: { lastMileTravelString },
        name,
        costForTwoMessage,
        cuisines,
        areaName,
        avgRatingString,
        totalRatingsString
    } = resInfo?.cards[0]?.card?.card?.info;


    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);
    return (
        <>
            <div className="my-2 flex justify-center gap-9 bg-gray-50 shadow-xl py-4">
                <div className="res-info">
                    <h1 className="font-semibold"><span className="font-bold">Restaurant Name - </span>{name}</h1>
                    <p className="font-semibold"><span className="font-bold">Cuisines - </span>{cuisines.join(", ")}</p>
                    <p className="font-semibold"><span className="font-bold">Cost For Two - </span>{costForTwoMessage}</p>
                    <p className="font-semibold"><span className="font-bold">Address - </span>{`${areaName},  ${lastMileTravelString}`}</p>
                </div>
                <div className=" border-black p-2 bg-gray-200 shadow-2xl flex items-center rounded-lg">
                    <div>
                        <p>Avg. Rating - {avgRatingString}</p>
                        <p>Total - {totalRatingsString}</p>
                    </div>
                </div>
            </div>
            <hr className="mx-4" />
            {/* categories accordions */}
            {categories.map((category, index) => {
                {/* This is an controlled component */ }
                return <RestaurantCategory
                    key={category.card.card.title}
                    data={category.card.card}
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(index)}
                />
            })}
        </>
    )
}

export default RestaurantMenu