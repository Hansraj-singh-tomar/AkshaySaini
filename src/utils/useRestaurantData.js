import { useState, useEffect } from "react";
import { HOME_API } from "./constants";

const useRestaurantData = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredData, setFilteredData] = useState(null);

    async function fetchData() {
        try {
            let res = await fetch(HOME_API);
            res = await res.json();
            // console.log(res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setListOfRestaurant(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredData(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { listOfRestaurant, filteredData, setFilteredData };
}

export default useRestaurantData;