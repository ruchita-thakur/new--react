import UserClass from "./UserClass";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  //called after constructor and render method
  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h3>Namaste React web series</h3>
        <UserClass name={"Ruchita Thakur"} location={"Pune"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h3>Namaste React web series</h3>
//       <User name="Ruchita Thakur" location={"Pune"} />
//       <UserClass name={"Ruchita Thakur"} location={"Pune"} />
//     </div>
//   );
// };

export default About;
