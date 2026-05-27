"use client";

import { FriendsContext } from "@/app/Context/CreateContext";
import Image from "next/image";
import { useContext, React, use } from "react";
import { MdWifiCalling3 } from "react-icons/md";
import styles from "./friend.module.css";

const FriendsDetails = ({ params }) => {
  const resolvedParams = use(params);
  const { friendId } = resolvedParams;

  const { friends } = useContext(FriendsContext);

  // context থেকে সঠিক বন্ধুকে খুঁজে বের করা
  const currentFriend = friends?.find((f) => f.id === parseInt(friendId));

  if (!currentFriend) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary">
          Loading friend details...{" "}
        </span>
      </div>
    );
  }

  // স্ট্যাটাস অনুসারে সিএসএস ক্লাস ডাইনামিক করার জন্য
  const statusClass =
    currentFriend.status === "overdue"
      ? styles.overdue
      : currentFriend.status === "attention"
        ? styles.attention // যদি attention স্টাইল মডিউলে থাকে
        : styles.family; // অন-ট্র্যাকের জন্য সবুজ ব্যাকগ্রাউন্ড

  return (
    <div className={styles["dashboard-container"]}>
      {/* বাম পাশের প্রোফাইল সাইডবার */}
      <div className={styles["profile-sidebar"]}>
        <div className={`${styles.card} ${styles["profile-card"]}`}>
          <img
            src={currentFriend.picture || "https://via.placeholder.com/80"}
            alt={currentFriend.name}
            className={styles.avatar}
          />
          <h2>{currentFriend.name}</h2>

          <div className={styles["badge-container"]}>
            {/* ডাইনামিক স্ট্যাটাস ব্যাজ (overdue / on-track) */}
            <span className={`${styles.badge} ${statusClass}`}>
              {currentFriend.status}
            </span>
            {/* প্রথম ট্যাগটি দেখানোর জন্য */}
            {currentFriend.tags && currentFriend.tags.length > 0 && (
              <span className={`${styles.badge} ${styles.family}`}>
                {currentFriend.tags[0]}
              </span>
            )}
          </div>

          <p className={styles.quote}>
            "{currentFriend.bio || "No bio available"}"
          </p>
          <p className={styles.preferred}>
            Preferred: {currentFriend.email || "N/A"}
          </p>
        </div>

        <button className={styles.btn}>Snooze 2 Weeks</button>
        <button className={styles.btn}>Archive</button>
        <button className={`${styles.btn} ${styles["btn-delete"]}`}>
          Delete
        </button>
      </div>

      {/* ডান পাশের মেইন গ্রিড কন্টেন্ট */}
      <div className={styles["main-content-grid"]}>
        <div className={`${styles.card} ${styles["status-card"]}`}>
          <h3>{currentFriend.days_since_contact ?? "0"}</h3>
          <p>Days Since Contact</p>
        </div>

        <div className={`${styles.card} ${styles["status-card"]}`}>
          <h3>{currentFriend.goal ?? "0"}</h3>
          <p>Goal (Days)</p>
        </div>

        <div
          className={`${styles.card} ${styles["status-card"]} ${styles["highlight-date"]}`}
        >
          {/* Emma Watson এর অবজেক্টে 'next_due_date' মিসিং থাকলে ব্যাকআপ হ্যান্ডেল করবে */}
          <h3>
            {currentFriend.next_due_date || currentFriend.next_concept || "N/A"}
          </h3>
          <p>Next Due</p>
        </div>

        {/* Relationship Goal */}
        <div className={`${styles.card} ${styles["full-width-card"]}`}>
          <div className={styles["card-header"]}>
            <h4>Relationship Goal</h4>
            <button className={styles["btn-edit"]}>Edit</button>
          </div>
          <p>
            Connect every <strong>{currentFriend.goal ?? "30"} days</strong>
          </p>
        </div>

        {/* Quick Check-In */}
        <div className={`${styles.card} ${styles["full-width-card"]}`}>
          <h4>Quick Check-In</h4>
          <div className={styles["checkin-actions"]}>
            <div className={styles["action-box"]}>
              <div className={styles["icon-wrapper"]}>
                <MdWifiCalling3 size={24} />
              </div>
              <span>Call</span>
            </div>

            <div className={styles["action-box"]}>
              <div className={styles["icon-wrapper"]}>💬</div>
              <span>Text</span>
            </div>

            <div className={styles["action-box"]}>
              <div className={styles["icon-wrapper"]}>📹</div>
              <span>Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
