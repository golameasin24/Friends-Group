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

  // আপনার context থেকে কারেন্ট বন্ধুকে খুঁজে বের করা হচ্ছে
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

  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["profile-sidebar"]}>
        <div className={`${styles.card} ${styles["profile-card"]}`}>
          <Image
            src={"/pic.jpg"}
            alt={currentFriend.name}
            className={styles.avatar}
            width={100}
            height={100}
          />
          <h2>{currentFriend.name || "Emma Wilson"}</h2>
          <span className={`${styles.badge} ${styles.overdue}`}>Overdue</span>
          <span className={`${styles.badge} ${styles.family}`}>
            {currentFriend.category || "FAMILY"}
          </span>
          <p className={styles.quote}>
            {currentFriend.notes || "Former colleague, great mentor"}
          </p>
          <p className={styles.preferred}>
            Preferred: {currentFriend.preferredContact || "email"}
          </p>
        </div>

        <button className={`${styles.btn} ${styles["btn-snooze"]}`}>
          Snooze 2 Weeks
        </button>
        <button className={`${styles.btn} ${styles["btn-archive"]}`}>
          Archive
        </button>
        <button className={`${styles.btn} ${styles["btn-delete"]}`}>
          Delete
        </button>
      </div>

      <div className={styles["main-content-grid"]}>
        <div className={`${styles.card} ${styles["status-card"]}`}>
          <h3>{currentFriend.daysSinceContact || "62"}</h3>
          <p>Days Since Contact</p>
        </div>

        <div className={`${styles.card} ${styles["status-card"]}`}>
          <h3>{currentFriend.goalDays || "30"}</h3>
          <p>Goal (Days)</p>
        </div>

        <div
          className={`${styles.card} ${styles["status-card"]} ${styles["highlight-date"]}`}
        >
          <h3>{currentFriend.nextDue || "Feb 27, 2026"}</h3>
          <p>Next Due</p>
        </div>

        {/* Relationship Goal */}
        <div
          className={`${styles.card} ${styles["full-width-card"]} ${styles["relationship-card"]}`}
        >
          <div className={styles["card-header"]}>
            <h4>Relationship Goal</h4>
            <button className={styles["btn-edit"]}>Edit</button>
          </div>
          <p>
            Connect every <strong>{currentFriend.goalDays || "30"} days</strong>
          </p>
        </div>

        {/* Quick Check-In */}
        <div
          className={`${styles.card} ${styles["full-width-card"]} ${styles["checkin-card"]}`}
        >
          <h4>Quick Check-In</h4>
          <div className={styles["checkin-actions"]}>
            <div className={styles["action-box"]}>
              <span className="flex justify-center mb-1">
                <MdWifiCalling3 size={24} />
              </span>
              Call
            </div>
            <div className={styles["action-box"]}>
              <span>💬</span> Text
            </div>
            <div className={styles["action-box"]}>
              <span>📹</span> Video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
