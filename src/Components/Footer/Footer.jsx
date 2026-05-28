import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-15 bg-[#1e3a2b] text-white/80 py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold text-white tracking-tight mb-4">
          KeenKeeper
        </h2>

        <p className="max-w-2xl text-base text-white/70 font-light leading-relaxed mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-sm font-medium tracking-wider text-white/90">
            Social Links
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e3a2b] hover:bg-white/90 transition-all shadow-sm"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e3a2b] hover:bg-white/90 transition-all shadow-sm"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1e3a2b] hover:bg-white/90 transition-all shadow-sm"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
