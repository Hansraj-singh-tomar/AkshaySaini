// First Part
// this empty object is place where we will give attributes to our tags
// const heading = React.createElement("h1", {id: "heading", xyz: "22"}, "hello world from React");
// console.log(heading); // it will give us object // {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// // props: {id: 'heading', xyz: '22', children: 'hello world from React'}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// Second Part
// for nested structure 
{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div",{ id: "parent" },[
    React.createElement("div", { id: "child" },[
            React.createElement("h1", {}, "I am h1 Tag"),
            React.createElement("h2", {}, "I am h2 Tag")
    ]),
    React.createElement("div", { id: "child2" },[
            React.createElement("h1", {}, "I am h1 Tag"),
            React.createElement("h2", {}, "I am h2 Tag")
    ]),
]);

// To resolve this complexity their is known as JSX

const root = ReactDOM.createElement(document.getElementById("root"));

root.render(parent); // if anything already available inside the root div then this render method replace it 