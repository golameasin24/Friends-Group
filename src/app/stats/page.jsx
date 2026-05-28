"use client";

import React, { useContext } from "react";
import { AgCharts } from "ag-charts-react";
import {
  LegendModule,
  ModuleRegistry,
  PieSeriesModule,
} from "ag-charts-community";
import { FriendsContext } from "../Context/CreateContext";

ModuleRegistry.registerModules([LegendModule, PieSeriesModule]);

export default function StatsPage() {
  const { friends } = useContext(FriendsContext);

  let totalText = 0;
  let totalCall = 0;
  let totalVideo = 0;

  friends?.forEach((friend) => {
    totalText += friend.interactions?.text || 0;
    totalCall += friend.interactions?.call || 0;
    totalVideo += friend.interactions?.video || 0;
  });

  const processedData = [
    { asset: "Text", amount: totalText },
    { asset: "Call", amount: totalCall },
    { asset: "Video", amount: totalVideo },
  ];

  const options = {
    data: processedData,
    background: {
      visible: false,
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
        innerRadiusRatio: 0.72,
        cornerRadius: 12,
        padAngle: 5,
        fills: ["#7C3AED", "#244D3E", "#34A853"],
        strokes: ["#7C3AED", "#244D3E", "#34A853"],
        strokeWidth: 0,
      },
    ],
    legend: {
      position: "bottom",
      spacing: 24,
      item: {
        paddingX: 12,
        marker: {
          shape: "circle",
          size: 7,
          padding: 6,
        },
        label: {
          color: "#64748b",
          fontSize: 12,
          fontFamily: "sans-serif",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-8 py-6">
      <h1 className="text-4xl font-bold  dark:text-white mb-8 tracking-tight">
        Friendship Analytics
      </h1>

      <div className="w-full bg-white rounded-2xl border border-gray-100 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <h2 className="text-[15px] font-semibold text-[#1e3a2b] mb-2 text-left">
          By Interaction Type
        </h2>

        <div className="w-full h-70 flex items-center justify-center mt-4">
          <AgCharts options={options} />
        </div>
      </div>
    </div>
  );
}
