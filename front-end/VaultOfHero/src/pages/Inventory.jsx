import { useEffect, useState } from "react";
import "./Inventory.css";
import { utilsImage, itemImages } from "../utils/imageMap";

export default function InventoryPage() {
  const [heroes, setHeroes] = useState([]);
  const [selectedHeroId, setSelectedHeroId] = useState(null);
  const [heroData, setHeroData] = useState(null);

  // load heroes
  useEffect(() => {
    async function load() {
      const res = await fetch("vault-of-heroes-api-hj83.vercel.app/heroes");
      const data = await res.json();
      setHeroes(data.heroes || []);
    }

    load();
  }, []);

  // load hero detail
  useEffect(() => {
    if (!selectedHeroId) return;

    async function loadHero() {
      const res = await fetch(
        `vault-of-heroes-api-hj83.vercel.app/heroes/${selectedHeroId}`
      );
      const data = await res.json();
      setHeroData(data);
    }

    loadHero();
  }, [selectedHeroId]);

  const hero = heroData?.hero;
  const items = heroData?.items || [];

  return (
    <div className="inv-container">

      {/* HERO SELECTOR */}
      <div className="hero-select">
        {heroes.map(h => (
          <div
            key={h.id}
            className={`hero-chip ${selectedHeroId === h.id ? "active" : ""}`}
            onClick={() => setSelectedHeroId(h.id)}
          >
            #{h.id} {h.name}
          </div>
        ))}
      </div>

      {/* HERO HEADER */}
      {!hero && (
        <div className="empty-state">
          Selecione um herói
        </div>
      )}

      {hero && (
        <>
          <div className="hero-header">

            <div className="hero-main">
              <h1>{hero.name}</h1>
              <p>{hero.class}</p>
            </div>

            <div className="hero-stats">
              <div>Level: {hero.level}</div>
              <div>XP: {hero.xp}</div>
              <div className="gold">
                <img src={utilsImage.gold} />
                {hero.gold}
              </div>
            </div>

          </div>

          {/* INVENTORY GRID */}
          <div className="inventory-grid">

            {items.map(item => (
              <div key={item.inventory_id} className="item-slot">

                <div className="item-icon">
                  <img
                    src={itemImages[item.item_type]}
                    alt={item.item_name}
                  />
                </div>

                <div className="item-info">
                  <span className="item-name">
                    {item.item_name}
                  </span>

                  <span className="item-qty">
                    x{item.amount}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </>
      )}

    </div>
  );
}