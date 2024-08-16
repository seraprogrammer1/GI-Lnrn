import React from "react";
import "../css/account.css";

export default function Account() {
  return (
    <div className="account-container">
      <h1>Account</h1>
      <div className="account-info">
        <div className="account-section">
          <i className="material-icons large">whatshot</i>
          <h4>Streak</h4>
          <p>You have a streak of 5 days!</p>
        </div>
        <div className="account-section">
          <i className="material-icons large">list</i>
          <h4>Platinum Quizzes</h4>
          <p>golang - intermediate</p>
          <p>Javascript - beginner</p>
          <p>AWS - beginner</p>
        </div>
        <div className="account-section">
          <i className="material-icons large">person</i>
          <h4>Irnr Level: 2</h4>
          <p>150/200 xp</p>
        </div>
      </div>
    </div>
  );
}
