import apiLogo from "../assets/apiLogo.png";
import './Sidebar.css';

function Sidebar({ active, setActive }) {
  return (
    <aside className="sidebar-guild">
      <div className="guild-banner">
        <img src={apiLogo} alt="Emblema" />
        <h2>Vault of Heroes</h2>
      </div>

      <nav className="medieval-nav">
        <button className={active === "heroes" ? "active" : ""} onClick={() => setActive("heroes")}>⚔️ Heróis</button>
        <button className={active === "shop" ? "active" : ""} onClick={() => setActive("shop")}>💰 Loja</button>
        <button className={active === "inventory" ? "active" : ""} onClick={() => setActive("inventory")}>🎒 Inventário</button>
        <button className={active === "logs" ? "active" : ""} onClick={() => setActive("logs")}>📜 Logs</button>
        <button className={active === "chronicles" ? "active" : ""} onClick={() => setActive("chronicles")}>📖 Crônicas</button>

      </nav>
    </aside>
  );
}

export default Sidebar;