// src/components/ReferralPage.js
import React, { useState } from "react";

const ReferralPage = ({ setTonBalance, setGhostBalance }) => {
  const [referrals, setReferrals] = useState([]);
  const [referralLink] = useState("https://yourgame.com/referral"); // Замените на свою ссылку

  const addReferral = () => {
    // Здесь можно добавить логику для проверки, что реферал зарегистрировался
    const newReferral = {
      id: referrals.length + 1,
      reward: { type: "ton", amount: 100 }, // Награда за реферал
    };
    setReferrals([...referrals, newReferral]);
    setTonBalance((prev) => prev + newReferral.reward.amount);
  };

  return (
    <div>
      <h1>Реферальная Программа</h1>
      <p>Пригласите друзей и получайте награды!</p>
      <p>Ваша реферальная ссылка: {referralLink}</p>
      <button onClick={addReferral}>Добавить реферала</button>
      
      <h2>Приглашенные друзья:</h2>
      <ul>
        {referrals.map(referral => (
          <li key={referral.id}>Реферал {referral.id}: Награда {referral.reward.amount} TON</li>
        ))}
      </ul>
    </div>
  );
};

export default ReferralPage;
