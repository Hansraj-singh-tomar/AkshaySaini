import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
import UserContext from "../utils/UserContext";


const Body = () => {
    // we fetching data in different component
    const { listOfRestaurant, filteredData, setFilteredData } = useRestaurantData();
    const [searchText, setSearchText] = useState("");

    // Higher Order Function 
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    function handleFilterBtn() {
        const filteredResData = listOfRestaurant.filter((item) => item.info.avgRating > 4.3);
        setFilteredData(filteredResData);
    }

    function handleSearch() {
        const searchedResData = listOfRestaurant.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(searchedResData);
    }

    // To check user is online or offline
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks like you'are offline!! Please check your internet connection</h1>

    // User Context
    const { loggedInUser, setUserName } = useContext(UserContext);

    // Post method for show more data in the list

    return (
        <div className='body'>
            <div className="search">
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search item here..." className="border-black border-2 px-2" />
                <button onClick={handleSearch} className="border-2  border-black px-2 ml-2">Search</button>
                <button className="border-2 border-black ml-2 px-2" onClick={handleFilterBtn}>Top Rated Restaurant</button>
                <label htmlFor="input" className="m-2 font-semibold">Change Context Value:</label>
                <input type="text" id="input" className="border border-black m-1" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
            </div>
            {
                listOfRestaurant?.length === 0 ? <ShimmerSimpleGallery card imageHeight={200} imageWidth={300} col={4} row={2} caption /> :
                    <>
                        {
                            filteredData?.length === 0 ? <h1>This item is not available...</h1> :
                                <>
                                    <div className='res-container'>
                                        {/* RestaurantCard component*/}
                                        {
                                            filteredData?.map((data) => (
                                                <Link
                                                    to={`/restaurants/${data.info.id}`}
                                                    key={data.info.id}
                                                >
                                                    {!data.info.aggregatedDiscountInfoV3 ? (
                                                        <RestaurantCard resObj={data} />
                                                    ) : (
                                                        <RestaurantCardPromoted resObj={data} />
                                                    )}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        <button>See More</button>
                                    </div>
                                </>
                        }
                    </>
            }

        </div>
    )
}


export default Body;


// We have two solution to resolve the CORS proxy error -
// 1. Before URL we have to use this URL https://corsproxy.io/?
// let res = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
// 2. Allow CORS: Access-Control-Allow-Origin => This is an chrome extension

{/* <ShimmerSimpleGallery card imageHeight={200} imageWidth={300} col={4} row={2} caption /> */ }