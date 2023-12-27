// const About = () => {
//     return (
//         <div>
//             <h1>About component is here.</h1>
//         </div>
//     )
// }

// export default About;

// Example Of Class Base Components

// import UserClass from "./UserClass"
// import User from "./User"
import React from "react";
import UserContext from "../utils/UserContext";



class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("parent constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Component Did Mount");
        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    Getting data through User context
                    <UserContext.Consumer>
                        {(data) => <h1 className="text-xl font-bold">User: {data.loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                {/* <UserClass name={"First"} location={ "Indore Class" } /> */}
            </div>
        );
    }
}

export default About;