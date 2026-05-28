"use client";

import { FriendsContext } from "@/app/Context/CreateContext";
import Image from "next/image";
import { useContext, React, use } from "react";
import { MdWifiCalling3 } from "react-icons/md";
import styles from "./friend.module.css";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

const FriendsDetails = ({ params }) => {
  const resolvedParams = use(params);
  const { friendId } = resolvedParams;
  const router = useRouter();

  const { friends, setFriends, call, setCall, text, setText, vi, setVi } =
    useContext(FriendsContext);

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

  const handleCall = (callData) => {
    toast.success("Call in time line", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    const isexist = [...call].find((tm) => tm.id === callData.id);

    if (isexist) {
      return;
    }

    return setCall([...call, callData]);
  };

  const handleText = (callData) => {
    toast.success("Text in time line", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    const isexist = [...text].find((tm) => tm.id === callData.id);

    if (isexist) {
      return;
    }

    return setText([...text, callData]);
  };

  const handleVi = (callData) => {
    toast.success("Video in time line", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    const isexist = [...vi].find((tm) => tm.id === callData.id);

    if (isexist) {
      return;
    }

    return setVi([...vi, callData]);
  };

  const handleDelete = (deleteId) => {
    toast.success("Delete Call List", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend.id !== deleteId.id),
    );

    router.push("/");
  };

  const statusClass =
    currentFriend.status === "overdue"
      ? styles.overdue
      : currentFriend.status === "attention"
        ? styles.attention
        : styles.family;

  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["profile-sidebar"]}>
        <div className={`${styles.card} ${styles["profile-card"]}`}>
          <Image
            src={currentFriend.picture || "https://via.placeholder.com/80"}
            alt={currentFriend.name}
            className={styles.avatar}
            width={100}
            height={100}
          />
          <h2>{currentFriend.name}</h2>

          <div className={styles["badge-container"]}>
            <span className={`${styles.badge} ${statusClass}`}>
              {currentFriend.status}
            </span>
            {currentFriend.tags && currentFriend.tags.length > 0 && (
              <span className={`${styles.badge} ${styles.family}`}>
                {currentFriend.tags[0]}
              </span>
            )}
          </div>

          <p className={styles.quote}>
            {currentFriend.bio || "No bio available"}
          </p>
          <p className={styles.preferred}>
            Preferred: {currentFriend.email || "N/A"}
          </p>
        </div>

        <button className={styles.btn}>Snooze 2 Weeks</button>
        <button className={styles.btn}>Archive</button>
        <button
          onClick={() => handleDelete(currentFriend)}
          className={`${styles.btn} ${styles["btn-delete"]}`}
        >
          Delete
        </button>
      </div>

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
          <h3>
            {currentFriend.next_due_date || currentFriend.next_concept || "N/A"}
          </h3>
          <p>Next Due</p>
        </div>

        <div className={`${styles.card} ${styles["full-width-card"]}`}>
          <div className={styles["card-header"]}>
            <h4>Relationship Goal</h4>
            <button className={styles["btn-edit"]}>Edit</button>
          </div>
          <p>
            Connect every <strong>{currentFriend.goal ?? "30"} days</strong>
          </p>
        </div>

        <div className={`${styles.card} ${styles["full-width-card"]}`}>
          <h4>Quick Check-In</h4>
          <div className={styles["checkin-actions"]}>
            <div
              className={styles["action-box"]}
              onClick={() => handleCall(currentFriend)}
            >
              <div className={styles["icon-wrapper"]}>
                <MdWifiCalling3 size={24} />
              </div>
              <span>Call</span>
            </div>

            <div
              className={styles["action-box"]}
              onClick={() => handleText(currentFriend)}
            >
              <div className={styles["icon-wrapper"]}>💬</div>
              <span>Text</span>
            </div>

            <div
              className={styles["action-box"]}
              onClick={() => handleVi(currentFriend)}
            >
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
