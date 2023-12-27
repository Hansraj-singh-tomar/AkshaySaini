import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log(data);

    function handleAccordion() {
        setShowIndex();
    }

    return (
        <div className="my-4 w-8/12 mx-auto cursor-pointer" onClick={handleAccordion}>
            {/* Accordion header */}
            <div className=" p-4 bg-gray-50 shadow-lg rounded-sm ">
                <div className="flex justify-between">
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className="font-bold">{showItems ? "v" : "^"}</span>
                </div>
                {/* Accordion body */}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;