import React from "react";
const cards = [
  {
    id: 1,
    number: "10",
    title: "Total Frinds",
  },

  {
    id: 2,
    number: "3",
    title: "On Track",
  },

  {
    id: 3,
    number: "6",
    title: "Need Attention",
  },

  {
    id: 4,
    number: "12",
    title: "Interection this Month",
  },
];

export const FourCard = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="  text-center  grid grid-cols-1 md:grid-cols-4 md:gap-x-5">
        {cards.map((card) => {
          return (
            <div
              className="bg-white shadow-md rounded-md px-10 py-5"
              key={card.id}
            >
              <h4 className="text-2xl font-bold text-[#244d3f]">
                {card.number}
              </h4>
              <p className="text-gray-500">{card.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
