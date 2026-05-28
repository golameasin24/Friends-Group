"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast, Bounce } from "react-toastify";

const HomePageCard = ({ friend }) => {
  const { tags } = friend;

  const handleDetail = () => {
    toast("A frined added in details list", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div>
      <Link
        onClick={handleDetail}
        href={`/friend/${friend.id}`}
        className="p-3"
      >
        <div className="custom-card shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between h-full min-h-80">
          <div className="mb-4">
            <div className="w-20 h-20 relative overflow-hidden rounded-full ring-4 ring-primary/20 flex justify-center">
              <Image
                src={friend.picture}
                fill
                alt={friend.name}
                className="object-cover "
              />
            </div>
          </div>

          <div className="flex-grow space-y-3">
            <h1 className="text-xl font-bold tracking-wide">{friend.name}</h1>

            <p className="text-sm font-medium opacity-75">
              Last contact:{" "}
              <span className="font-semibold">
                {friend.days_since_contact} days ago
              </span>
            </p>

            <div className="flex  gap-2 pt-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-[8px]  uppercase tracking-wider rounded-full bg-base-200 text-base-content border border-base-300 shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-5 mt-auto border-t border-base-300 border-opacity-40">
            <span
              className={`inline-block text-center w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xs ${
                friend.status === "overdue"
                  ? "bg-red-100 text-red-700 border border-red-200"
                  : friend.status === "attention"
                    ? "bg-amber-100 text-amber-700 border border-amber-200"
                    : "bg-green-100 text-green-700 border border-green-200"
              }`}
            >
              {friend.status}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePageCard;
