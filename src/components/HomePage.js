import React, { useState, useEffect, useCallback } from "react";
import './HomePage.css'; // убедитесь, что путь верный
import tonLogo from '../data/ton_symbol.png'; // Импортируйте логотип

const HomePage = () => {
  const [tonBalance, setTonBalance] = useState(0);
  const [ghostBalance, setGhostBalance] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isMining, setIsMining] = useState(false);

  const tonProfit = 0.001; // Пример значения для TON
  const ghostProfit = 500; // Пример значения для GHOST

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('ghostMinerData'));
    if (storedData) {
      setTonBalance(storedData.tonBalance);
      setGhostBalance(storedData.ghostBalance);
      setTimeLeft(storedData.timeLeft);
      setIsMining(storedData.isMining);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isMining && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsMining(false);
            setTonBalance((prevBalance) => prevBalance + tonProfit);
            setGhostBalance((prevBalance) => prevBalance + ghostProfit);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isMining, timeLeft, tonProfit, ghostProfit]);

  const startMining = () => {
    setIsMining(true);
    setTimeLeft(8 * 60 * 60);
  };

  const saveData = useCallback(() => {
    const dataToSave = {
      tonBalance,
      ghostBalance,
      timeLeft,
      isMining,
    };
    localStorage.setItem('ghostMinerData', JSON.stringify(dataToSave));
  }, [tonBalance, ghostBalance, timeLeft, isMining]);

  useEffect(() => {
    saveData();
  }, [saveData]); // Добавили saveData в зависимости

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="homepage-container">
      <div className="border-container">
        <div className="ton-border">
          <img src={tonLogo} alt="TON Logo" className="ton-logo" />
          <p className="balance-title">Баланс: <span className="balance-value">{tonBalance.toFixed(8)}</span></p>
          <p className="profit-text">Прибыль /8ч: <span className="profit-value">{tonProfit.toFixed(8)}</span></p>
        </div>
        <div className="ghost-border">
          <p className="balance-title">$GHOST Баланс: <span className="balance-value">{ghostBalance}</span></p>
          <p className="profit-text">Прибыль /8ч: <span className="profit-value">{ghostProfit}</span></p>
        </div>
      </div>

      <div>
        <p>Оставшееся время фарма: {formatTime(timeLeft)}</p>
        <button className="btn-gradient" onClick={startMining} disabled={isMining}>
          Начать поиск душ
        </button>
      </div>
    </div>
  );
};

export default HomePage;
