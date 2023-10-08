--npm is a package manager but is not an acronym for node package mananger
--it manges packages via package.json which has all the package names along with their versions
--package.json is a configuration file for npm
--bundler is used to bundle our app i.e compress it, minify it so that it can be pushed to production.
--when we create a react app using the command npm create-react-app it will generate a productin ready application. it uses webpack bundler by default
-- There can be two types of dependencies in an application - dev dependencies ansd normal dependencies.
--dev dependencies are those which are required for development phase
--normal dependencies are used in production also
--dev dependies can be installed using -D flag in the npm install

# Parcel

-- dev build
-- local server
-- HMR- Hot Module Replacement
-- File watching Algorithm which is written in c++
-- Faster builds because of caching
-- Image Optimization
-- Minification
-- Bundling
-- Compress
-- Consistent Hashing
-- Code Splitting
-- Differential Bundling- support older browsers
-- Diagnostic
-- Error handling
-- HTTPs
-- Tree Shaking
-- different dev and production bundles

-- JSX is not react, React code can be written even without jsx but it would be very complicated and confusing to understand the code. So, we use JSX to write react code easily

-- When we create an element using React.createElement it creates a react element for us which is a JS object in turn. When we render that element using render method it is converted into an HTML element

const heading =React.createElement("div",{id:"heading},"Hello")
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

-- When we craete an element using JSX it gets converted into React.createElement and babel does this for us and the same above process is followed.
--const heading=<h1>Hello</h1>

-- When you log heading to the console you will get an object.
-- Attributes in JSX is given using camel case
-- React functional component is nothing but Javascript functions which return some JSX code

const Heading=()=>{
return <div>Hello</div>
}

                OR

const Heading=()=>(
<h1>Hello</h1>
)

-- name of the Functional Component should start with capital letter
-- If you want to write javascript inside jsx you can do it using curly braces {}

const x=1000
const Heading=()=>(

<h1>Hello</h1>
{x}
)

-- to use inline style in react create an object and then pass that object to the style attribute
const header={
    backgroundColor:"black"
}

const Header=()=>{
    <p style={header}>Hello</p>
}

-- style attribute takes a javascript object

-- not using keys is not acceptable
-- using index as keys is not recommended
-- use unique id as key (best practice)

--There are two types of export/import
-default export/import:
export default ComponentName
import ComponentName from 'path'

when you have to export multiple things use named export/import
-named export/import:
export const variable-name
import {variable-name} from path

#React hooks
--React hook is a normal javascript utility function
--useState() -super powerful state variables
--useEffect()

#local state variable(scope- only in the component) ==super powerful state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  The above code can also be written as below because useState returns an array and we are just destructuring thethe array in the above line
  const arr = useState(resList);
  console.log(arr);
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  console.log(listOfRestaurants);
  console.log(setListOfRestaurants);
  normal JS variable(scope- only in the function)

#In react when you want to go from one page to another page never ever use an anchor tag becausethe whole page gets refreshed
--in react you can navigate to a new page without reloading the whole page using the Link component which behind the scenes uses the anchor tag
-Link is a wrapper over anchor tag

#Two types of routing in web applications
-Server side routing- you make a network call and the html page is comes from server
-Client side routing- you don't make any network calls because all the components are already loaded in our app. When we load the app for the first time it already has all the components 



- In class based components componentDidMount is called after the constructor and render method
-order of execution
1. Parent constructor
2. Parent Render
3. Child constructor
4. Child render
5. Child's life cycle methods
6. Parents's life cycle methods
-- there are two phases render phase and commit phase 
in render phase constructor and render method is called for all the components i.e render phase of all the components are batched 
then DOM is updated in a single batch:
commit phase- componentDidMount is called for all the components i.e commit phase of all the components
This optimizes performance
/*
Parent Constructor
Parent Render
First Child Constructor
First Child Render
Second Child Constructor
Second Child Render
First Child componentDidMount
Second Child componentDidMount
Parent Component componentDidMount
*/

--If you follow single responsibility principle you code will become more readable,testable, maintainable, you get features of reusability

--A hook is just a utility function

--bundle is a logical separation of code, a bundle should have enough code for a feature to run
--bundling is done using lazy loading also known as chunking, code splitting , on demand loading, dynamic import
in lazy loading all the components are not loaded at once, few componets are loaded when required