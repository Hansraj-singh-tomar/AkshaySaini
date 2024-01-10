import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";

import { addItem } from "../Store/cartSlice";

const ItemList = ({ items }) => {
    // console.log(items);
    const dispatch = useDispatch();

    function handleAddItem(item) {
        alert(`${item?.card?.info?.name} added into cart`)
        // Dispatch an action 
        dispatch(addItem(item)); // {payload: "pizza"}
    }

    return <div>
        {items.map((item) => {
            return <div data-testid="menuItems" key={item?.card?.info?.id} className="my-6 border-b-2 flex justify-between items-center">
                <div className="">
                    <p className="font-medium">{item?.card?.info?.name}</p>
                    <p>₹{item?.card?.info?.price / 100}</p>
                    <p className="my-4 text-xs">{item?.card?.info?.description}</p>
                </div>
                <div className="relative mb-6">
                    <div className="w-[118px] rounded-lg overflow-hidden bg-black">
                        <img className="bg-cover z-1" src={`${ITEM_IMG_URL}${item?.card?.info?.imageId}`} alt="" />
                        <button className="absolute left-5 -bottom-3 z-2 bg-white text-green-500 px-6 py-1 rounded-lg shadow-lg" onClick={() => handleAddItem(item)}>Add</button>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default ItemList;