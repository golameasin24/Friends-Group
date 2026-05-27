"use client";

import Banner from "@/Components/Banner/Banner";
import { useContext } from "react";
import { FriendsContext } from "./Context/CreateContext";
import HomePageCard from "@/Components/Homepage-Card/Home-page-card";

export default function HomePage() {
  const { friends } = useContext(FriendsContext);
  return (
    <>
      <Banner />
      <div className="max-w-5xl mx-auto">
        <h4 className="text-2xl font-bold mb-15">Your Friends</h4>
        <div className=" grid grid-cols-1 md:grid-cols-4 md:gap-2">
          {friends.map((friend) => (
            <HomePageCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </>
  );
}
