"use client";

import { useEffect, useState } from "react";
import { FriendsContext } from "./CreateContext";

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [vi, setVi] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <>
      <FriendsContext.Provider
        value={{ friends, setFriends, call, setCall, text, setText, vi, setVi }}
      >
        {children}
      </FriendsContext.Provider>
    </>
  );
};

export default FriendsProvider;
