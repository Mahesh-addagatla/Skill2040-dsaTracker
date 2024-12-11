import React from "react";
import "./styles/UserProfile.css";
export default function UserProfile({ profilePicture }) {
  return (
    <div>
      <img src={profilePicture} alt="" className="userstats-profile-picture" />
    </div>
  );
}
