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
--useState()
--useEffect()