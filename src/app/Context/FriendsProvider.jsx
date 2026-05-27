"use client";

import { useEffect, useState } from "react";
import { FriendsContext } from "./CreateContext";

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <>
      <FriendsContext.Provider value={{ friends, setFriends }}>
        {children}
      </FriendsContext.Provider>
    </>
  );
};

export default FriendsProvider;
