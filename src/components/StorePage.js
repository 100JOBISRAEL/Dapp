// src/components/StorePage.js
import React from "react";
import ghosts from "../data/ghosts"; // Предполагается, что здесь находятся ваши данные о призраках
import './StorePage.css'; // Подключение стилей

const StorePage = ({ tonBalance, ghostBalance, setTonBalance, setGhostBalance, addProfit }) => {
  const buyGhost = (ghost) => {
    if (ghost.cost && ghostBalance >= ghost.cost) {
      setGhostBalance(ghostBalance - ghost.cost);
      addProfit("ghost", ghost.profitGhost);
      addProfit("ton", ghost.profitTon);
      alert(`Вы купили ${ghost.name}!`);
    } else {
      alert("Недостаточно $GHOST для покупки.");
    }
  };

  return (
    <div className="content-container">
      {ghosts.map(ghost => (
    <div key={ghost.id} className="ghost-container">
        <img className="ghost-image" src={ghost.imageUrl} alt={ghost.name} />
        <div className="ghost-details">
            <div className="info-container">
                <div className="profit-info">
                    <span className="profit-label">Прибыль 8ч:</span>
                    <span className="profit-value">{ghost.profitGhost}</span>
                </div>
                <div className="launches-info">
                    <span className="launches-label">Поисков:</span>
                    <span className="launches-value">{ghost.launches}</span>
                </div>
                <div className="limit-info">
                    <span className="limit-label">Лимит:</span>
                    <span className="limit-value">{ghost.limit}</span>
                </div>
                <div className="autofarm-info">
                    <span className="autofarm-label">Автофарм:</span>
                    <span className="autofarm-value">{ghost.autofarm ? "Да" : "Нет"}</span>
                </div>
            </div>
            <button className="buy-button" onClick={() => buyGhost(ghost)}>
                {ghost.cost ? `${ghost.cost} $GHOST` : "Бесплатно"}
            </button>
        </div>
    </div>
))}


    </div>
  );
};

export default StorePage;
