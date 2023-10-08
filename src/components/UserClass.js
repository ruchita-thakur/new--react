import React from "react";

//When we are loading a class based component onto the web page that means we are creating an instance of it
class UserClass extends React.Component {
  //The first thing when a class loads is the constructor is called and then render is called
  constructor(props) {
    super(props);
    console.log(props);
    //this state variable is a big object
    //if we have 5-6 state variables and in set state we change the state of only two variables, then react will update only those two variables and not even touch the rest of the variables
    //Recat will only find the diff between state and set state object
    this.state = {
      userInfo: {
        name: "Dummy User",
        Location: "Default",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child component did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    // console.log("Child Render");
    // const { name, location } = this.props;
    const { name, location } = this.state.userInfo;

    return (
      <div className="user">
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: @ruchitadthakur</h4>
      </div>
    );
  }
}

export default UserClass;
