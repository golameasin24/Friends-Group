"use client";

import React, { useContext } from "react";
import { FriendsContext } from "../Context/CreateContext";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { PiChatCircleTextLight } from "react-icons/pi";
import { IoVideocamOffSharp } from "react-icons/io5";

const TimeLine = () => {
  const { call, text, vi } = useContext(FriendsContext);

  return (
    <>
      {call.map((tm) => {
        return (
          <div
            key={tm.id}
            className="flex items-center gap-4 container mx-auto bg-white border border-[#eef2f5] rounded-[10px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mt-10 transition-all duration-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:bg-[#fafbfc]"
          >
            {/* বাম পাশের ভিডিও আইকন এলাকা */}
            <div className="flex items-center justify-center bg-[#f1f5f9] w-11 h-11 rounded-8">
              <FiPhoneCall className="text-xl text-[#475569]" />
            </div>

            {/* ডান পাশের টেক্সট কন্টেন্ট */}
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
        );
      })}

      {text.map((tm) => {
        return (
          <div
            key={tm.id}
            className="flex items-center gap-4 container mx-auto bg-white border border-[#eef2f5] rounded-[10px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mt-10 transition-all duration-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:bg-[#fafbfc]"
          >
            {/* বাম পাশের ভিডিও আইকন এলাকা */}
            <div className="flex items-center justify-center bg-[#f1f5f9] w-11 h-11 rounded-8">
              <PiChatCircleTextLight className="text-xl text-[#475569]" />
            </div>

            {/* ডান পাশের টেক্সট কন্টেন্ট */}
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
        );
      })}

      {vi.map((tm) => {
        return (
          <div
            key={tm.id}
            className="flex items-center gap-4 container mx-auto bg-white border border-[#eef2f5] rounded-[10px] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] mt-10 transition-all duration-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.05)] hover:bg-[#fafbfc]"
          >
            {/* বাম পাশের ভিডিও আইকন এলাকা */}
            <div className="flex items-center justify-center bg-[#f1f5f9] w-11 h-11 rounded-8">
              <IoVideocamOffSharp className="text-xl text-[#475569]" />
            </div>

            {/* ডান পাশের টেক্সট কন্টেন্ট */}
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
        );
      })}
    </>
  );
};

export default TimeLine;
