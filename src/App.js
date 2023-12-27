import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

// components
import Body from './components/Body';
import Header from './components/Header';
import RestaurantMenu from './components/RestaurantMenu';

// pages
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
// import Grocery from './components/Grocery';


// lazy loading, code spliting, Dynamic bundling, on Demand loading
// This lazy function create a different js file for us but it render 
// it with our main js file to resolve it we will use suspense with lazy
// suspense will render it when we go to grocery component 
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Hansraj Singh",
        };
        setUserName(data.name);
    }, []);

    return (
        // loggedInUser: Default User
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            {/* loggedInUser: Hansraj Singh */}
            <div className="app">
                {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
                {/* loggedInUser: Elon Musk */}
                <Header />
                {/* </UserContext.Provider> */}
                <Outlet />
                {/* <Footer /> */}
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);


/**
    * Header 
    *   - Logo
    *   - Nav Items
    * Body
    *   - Search Container
    *       - Search Bar
    *   - RestaurantContainer
    *       - RestaurantCard
    *           - Img
    *           - Name of Res, start Rating, cuisine, 
    * Footer
    *   - Copyright
    *   - Links
    *   - Address
    *   - Contact   
*/

/** Two Types of routing
 * Client side routing - we have already about.html page we just render it on clicking
 * Server side routing - we fetch about.html page from the server
*/