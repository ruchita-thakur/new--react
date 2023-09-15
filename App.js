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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    //when you want to give two elements as siblings you can pass them as array in the third argumnet to parent element
    React.createElement("h1", {}, "Hello World from h1"),
    React.createElement("h2", {}, "Hello World from h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    //when you want to give two elements as siblings you can pass them as array in the third argumnet to parent element
    React.createElement("h1", {}, "Hello World from h1"),
    React.createElement("h2", {}, "Hello World from h2"),
  ]),
]);

//create element takes 3 parameters namely name of the element, an object and what we have to put inside the element i.e the children
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world! from React"
// );

//heading i.e react element is an object
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
//this render method is responsible to convert the heading object to html tag
root.render(parent);
