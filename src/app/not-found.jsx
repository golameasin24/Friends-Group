"use client";

import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="relative">
          <h1 className="text-9xl font-black text-primary/20 select-none animate-pulse">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold tracking-wider uppercase">
            Oops! Page Not Found
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold opacity-90">
            The page you are looking for doesnt exist.
          </h2>
          <p className="text-sm opacity-70">
            It might have been moved, deleted, or perhaps the URL you typed is
            incorrect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/"
            className="btn btn-primary shadow-md hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline hover:scale-105 transition-transform"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
