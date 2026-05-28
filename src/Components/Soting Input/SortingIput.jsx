import { FriendsContext } from "@/app/Context/CreateContext";
import { useContext, useState } from "react";

export default function BrowserDropdown() {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const browsers = ["Call", "Text", "Video"];

  const { sortingType, setSortingType } = useContext(FriendsContext);

  return (
    /* ১. relative ক্লাসটি ড্রপডাউনকে ইনপুটের সাথে আটকে রাখবে */
    <div className="relative w-full max-w-md mx-auto">
      {/* ইনপুট ফিল্ড */}
      <input
        type="text"
        className="w-full px-4 py-2 border-2 border-black rounded-lg text-gray-700 focus:outline-none"
        placeholder="Filter Timeline"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => {
          setIsOpen(true);
          setInputValue(""); // 💡 জাদুটোকা এখানে! ফোকাস করলেই ইনপুট খালি হবে, ফলে সব অপশন আবার চলে আসবে।
        }}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)} // ক্লিক করার জন্য সামান্য ডিলে
      />

      {/* ইনপুটের ডানপাশের ছোট তীর বা ড্রপডাউন আইকন */}
      <div className="absolute right-3 top-3 pointer-events-none text-xs">
        ▼
      </div>

      {/* ২. কাস্টম ড্রপডাউন বক্স (যা w-full এর কারণে ইনপুটের সমান চওড়া হবে) */}
      {isOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl py-1">
          {browsers
            .filter((b) => b.toLowerCase().includes(inputValue.toLowerCase()))
            .map((browser) => (
              <li
                key={browser}
                className="px-4 py-2.5 text-gray-800 hover:bg-gray-100 cursor-pointer text-left"
                onMouseDown={() => {
                  setInputValue(browser);
                  setSortingType(browser); // 💡 আপনার কনটেক্সট স্টেট আপডেট করার জন্য (যদি প্রয়োজন হয়)
                  setIsOpen(false);
                }}
              >
                {browser}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
