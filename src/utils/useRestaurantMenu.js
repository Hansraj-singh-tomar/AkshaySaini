import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    async function fetchResMenuData() {
        let res = await fetch(MENU_API + resId);
        res = await res.json();
        setResInfo(res?.data);
    }

    useEffect(() => {
        fetchResMenuData()
    }, []);
    return resInfo;
}

export default useRestaurantMenu;