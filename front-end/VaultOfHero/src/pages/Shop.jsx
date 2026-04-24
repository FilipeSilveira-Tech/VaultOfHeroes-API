import { useEffect, useState } from "react";
import { itemImages } from '../utils/imageMap.js'
import "./Shop.css";

function Shop() {
  useEffect(() => {
    document.title = "Vault of Heroes | Loja";
  }, []);

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadItems() {
      setLoading(true);

      try {
        const res = await fetch("https://vaultofheroes-api.onrender.com/items");
        const data = await res.json();

        setItems(Array.isArray(data) ? data : data.items || []);
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, []);

  const filteredItems =
    filter === "all"
      ? items
      : items.filter(i => i.type === filter);

  return (
    <div className="shop-container">

      {/* HEADER */}
      <div className="shop-header">
        <h1>💰 Loja do Velho Mago</h1>
        <p>Itens raros circulam entre sombras e poeira...</p>
      </div>

      {/* FILTERS */}
      <div className="shop-filters">
        {["all", "weapon", "armor", "consumable", "accessory", "utility"].map(type => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* LOADING */}
      {loading && <div className="loading">Carregando mercadorias...</div>}

      {/* GRID */}
      <div className="shop-grid">

        {filteredItems.map(item => (
          <div key={item.id} className={`item-card ${item.type}`}>

            {/* ICON */}
            <div className="item-icon-box">
              <div className="item-icon-placeholder">
                <img src={itemImages[item.type]} alt={item.name} />
              </div>
            </div>

            {/* INFO */}
            <div className="item-info">
              <div className="item-name">{item.name}</div>
              <div className="item-type">{item.type}</div>
            </div>

            {/* PRICE */}
            <div className="item-price">
              <span className="gold">🪙</span>
              {item.base_price}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Shop;