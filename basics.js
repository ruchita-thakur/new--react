import React from "react";
import ReactDOM from "react-dom/client";

/*
<div id="parent">
    <div id="child">
        <h1>Hello World from h1</h1>
        <h2>Hello world from h2</h2>
    </div>
</div>

ReactElement(Object)=>HTML(Browser understands)
*/

//create the parent div

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     //when you want to give two elements as siblings you can pass them as array in the third argumnet to parent element
//     React.createElement("h1", {}, "Hello World from h1"),
//     React.createElement("h2", {}, "Hello World from h2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     //when you want to give two elements as siblings you can pass them as array in the third argumnet to parent element
//     React.createElement("h1", {}, "Hello World from h1"),
//     React.createElement("h2", {}, "Hello World from h2"),
//   ]),
// ]);

//create element takes 3 parameters namely name of the element, an object and what we have to put inside the element i.e the children
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world! from React"
// );

//heading i.e react element is an object
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// //this render method is responsible to convert the heading object to html tag
// root.render(parent);

//JSX is not html in JS
//It is HTML-like or XML- like syntax

//React Element
// const heading = (
//   <h1 id="heading" tabIndex="5">
//     Namaste React using JSX
//   </h1>
// );

//React Components
//Class Based Components- old way of writing code
//Function Based Components (Functional Components)- new way of writing code

// Functional Component

// const Title = () => {
//   return <h1>Title</h1>;
// };

// const HeadingComponent = () => (
//   <div>
//     <h1>Hello</h1>
//     <Title />
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(<HeadingComponent />);
