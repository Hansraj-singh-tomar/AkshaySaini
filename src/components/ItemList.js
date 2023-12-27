import { ITEM_IMG_URL } from "../utils/constants";
const ItemList = ({ items }) => {
    // console.log(items);
    return <div>
        {items.map((item) => {
            return <div key={item?.card?.info?.id} className="my-6 border-b-2 flex justify-between items-center">
                <div>
                    <p className="font-medium">{item?.card?.info?.name}</p>
                    <p>₹{item?.card?.info?.price / 100}</p>
                    <p className="my-4 text-xs">{item?.card?.info?.description}</p>
                </div>
                <div className="relative mb-6">
                    {item?.card?.info?.imageId ? <>
                        <img width={118} height={96} className="rounded-lg bg-cover" src={`${ITEM_IMG_URL}${item?.card?.info?.imageId}`} alt="" />
                        <button className="absolute -bottom-2 left-5 bg-white text-green-500 px-6 py-1 rounded-lg shadow-lg">Add</button>
                    </> :
                        <button className="bg-white text-green-500 px-6 py-1 rounded-lg shadow-lg">Add</button>
                    }

                </div>
            </div>
        })}
    </div>
}

export default ItemList;