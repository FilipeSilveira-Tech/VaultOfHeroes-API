import { useEffect, useState } from "react";
import "./Heroes.css";
import { utilsImage } from "../utils/imageMap";

export default function HeroDashboard() {
  const [heroes, setHeroes] = useState([]);
  const [selectedHeroId, setSelectedHeroId] = useState(null);
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(false);

  // LOAD HEROES
  useEffect(() => {
    async function loadHeroes() {
      const res = await fetch("http://localhost:3000/heroes");
      const data = await res.json();

      setHeroes(Array.isArray(data) ? data : data.heroes || []);
    }

    loadHeroes();
  }, []);

  // LOAD HERO DETAIL
  useEffect(() => {
    if (!selectedHeroId) return;

    async function loadHero() {
      setLoading(true);

      try {
        const res = await fetch(
          `http://localhost:3000/heroes/${selectedHeroId}`
        );

        const data = await res.json();
        setHeroData(data);
      } finally {
        setLoading(false);
      }
    }

    loadHero();
  }, [selectedHeroId]);

  const selectedHero = heroData?.hero;

  return (
    <>
      <h1 className="glow-title">⚔️ Heróis </h1>
      <div className="rpg-container">

      {/* LEFT PANEL - HERO LIST */}
      <div className="hero-list">

        <div className="panel-title">
          Heroes
        </div>

        {heroes.map(hero => {
          const isActive = selectedHeroId === hero.id;

          return (
              <div
                key={hero.id}
                className={`hero-item ${isActive ? "active" : ""}`}
                onClick={() => setSelectedHeroId(hero.id)}
              >
                <div className="hero-top">
                  <span className="hero-name">
                    {hero.id} - {hero.name}
                  </span>

                  <span className="hero-level">
                    Lv {hero.level}
                  </span>
                </div>

                <div className="hero-class">
                  {hero.class}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT PANEL - DETAILS */}
        <div className="hero-detail">

          {!selectedHeroId && (
            <div className="empty-state">
              Selecione um herói
            </div>
          )}

          {loading && (
            <div className="loading-state">
              Carregando...
            </div>
          )}

          {selectedHero && !loading && (
            <>
              {/* HEADER */}
              <div className="hero-header">
                <div className="hero-title">
                  {selectedHero.name}
                </div>

                <div className="hero-subtitle">
                  {selectedHero.class}
                </div>
              </div>

              {/* STATS */}
              <div className="stats-card">
                <div className="stat">
                  <span>Level</span>
                  <strong>{selectedHero.level}</strong>
                </div>

                <div className="stat">
                  <span>XP</span>
                  <strong>{selectedHero.xp}</strong>
                </div>

                <div className="stat gold">
                  <img src={utilsImage.gold} />
                  <strong>{selectedHero.gold}</strong>
                </div>
              </div>

              {/* INVENTORY */}
              <div className="inventory-card">
                <div className="section-title">
                  Inventory
                </div>

                {heroData.items.length === 0 && (
                  <div className="empty-inventory">
                    Sem itens
                  </div>
                )}

                {heroData.items.map(item => (
                  <div key={item.inventory_id} className="inventory-item">
                    <span>{item.item_name}</span>
                    <span className="qty">x{item.amount}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </>
  );
}