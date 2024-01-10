import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import Button from "./Button";

import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    //! Wrong way 
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;
    // console.log(cartItems);

    return (
        <div className='h-20 bg-gray-300 shadow-lg px-3 flex justify-between items-center'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="img" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
                    <li><Link to={"/cart"}>Cart({cartItems.length})</Link></li>
                    <Button />
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;