import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux";

function HooksUserContainer() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [fetched, setFetched] = useState(false);

  // Get the Data as soon as the page mount not working yet
  useEffect(() => {
    if (fetched) {
      console.log("Already Fetched");
    } else {
      dispatch(fetchUsers());
      setFetched(true);
    }
  }, []);

  const getUserHookHandler = () => {
    dispatch(fetchUsers());
  };
  return (
    <div>
      <h2>User List Hooks</h2>
      <div>
        {user.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
      {user.users.length == 0 ? (
        <button onClick={getUserHookHandler}>Get All Users</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default HooksUserContainer;
