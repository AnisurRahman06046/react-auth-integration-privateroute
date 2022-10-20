import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>this is home page</h2>
      {user?.email && <p>Logged In: {user.email}</p>}
    </div>
  );
};

export default Home;
