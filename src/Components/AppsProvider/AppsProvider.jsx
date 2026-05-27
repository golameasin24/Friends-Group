"use client";
import FriendsProvider from "@/app/Context/FriendsProvider";

const AppsProvider = ({ children }) => {
  return <FriendsProvider>{children}</FriendsProvider>;
};

export default AppsProvider;
