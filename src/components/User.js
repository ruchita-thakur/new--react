import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  const { name, location } = props;
  return (
    <div className="user">
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Contact: @ruchitadthakur</h4>
    </div>
  );
};

export default User;
