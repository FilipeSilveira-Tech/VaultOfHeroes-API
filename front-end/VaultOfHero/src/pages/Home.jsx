import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";

import Heroes from "./Heroes.jsx";
import Shop from "./Shop.jsx";
import Inventory from "./Inventory.jsx";
import Logs from "./Logs.jsx";
import Chronicles from "./Chronicles.jsx";

function Home() {
  const [active, setActive] = useState("heroes");

  const renderPage = () => {
    switch (active) {
      case "heroes":
        return <Heroes />;
      case "shop":
        return <Shop />;
      case "inventory":
        return <Inventory />;
      case "logs":
        return <Logs />;
      case "chronicles":
        return <Chronicles />;
      default:
        return <Heroes />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar active={active} setActive={setActive} />

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default Home;