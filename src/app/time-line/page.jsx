"use client";

import React, { useContext } from "react";
import { FriendsContext } from "../Context/CreateContext";
import { FiPhoneCall } from "react-icons/fi";
import { PiChatCircleTextLight } from "react-icons/pi";
import { IoVideocamOffSharp } from "react-icons/io5";
import BrowserDropdown from "@/Components/Soting Input/SortingIput";

const TimeLine = () => {
  const { call, text, vi, sortingType } = useContext(FriendsContext);

  const showCall = sortingType === "" || sortingType === "Call";
  const showText = sortingType === "" || sortingType === "Text";
  const showVideo = sortingType === "" || sortingType === "Video";

  return (
    <>
      <div className="container mx-auto my-5">
        <BrowserDropdown />
      </div>

      {showCall &&
        call.map((tm) => (
          <div
            key={tm.id}
            className="flex min-h-200 items-center gap-4 container mx-auto bg-white border border-[#eef2f5] rounded-[10px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mt-10 transition-all duration-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:bg-[#fafbfc]"
          >
            <div className="flex items-center justify-center bg-[#f1f5f9] w-11 h-11 rounded-lg">
              <FiPhoneCall className="text-xl text-[#475569]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-[#14532d]">
                Call{" "}
                <span className="font-normal text-[#64748b] ml-1">
                  with {tm.name}
                </span>
              </h3>
              <p className="text-sm text-[#94a3b8]">{tm.next_due_date}</p>
            </div>
          </div>
        ))}

      {showText &&
        text.map((tm) => (
          <div
            key={tm.id}
            className="flex items-center gap-4 container mx-auto bg-white border border-[#eef2f5] rounded-[10px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mt-10 transition-all duration-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:bg-[#fafbfc]"
          >
            <div className="flex items-center justify-center bg-[#f1f5f9] w-11 h-11 rounded-lg">
              <PiChatCircleTextLight className="text-xl text-[#475569]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-[#14532d]">
                Text{" "}
                <span className="font-normal text-[#64748b] ml-1">
                  with {tm.name}
                </span>
              </h3>
              <p className="text-sm text-[#94a3b8]">{tm.next_due_date}</p>
            </div>
          </div>
        ))}

      {showVideo &&
        vi.map((tm) => (
          <div
            key={tm.id}
            className="flex items-center gap-4 container mx-auto bg-white border border-[#eef2f5] rounded-[10px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mt-10 transition-all duration-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:bg-[#fafbfc]"
          >
            <div className="flex items-center justify-center bg-[#f1f5f9] w-11 h-11 rounded-lg">
              <IoVideocamOffSharp className="text-xl text-[#475569]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-[#14532d]">
                Video{" "}
                <span className="font-normal text-[#64748b] ml-1">
                  with {tm.name}
                </span>
              </h3>
              <p className="text-sm text-[#94a3b8]">{tm.next_due_date}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default TimeLine;
