import { useState } from "react";

const Button = () => {
    const [btnName, setBtnName] = useState("Login");
    return <button className="border-2 px-3 font-bold ml-2 border-zinc-800" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
}

export default Button;