import { useEffect } from "react";
import { useState } from "react";
import MarketTable from "../components/MarketTable.jsx";
import './Shop.css';

const mockItems = [
  {
    id: 1,
    name: "Lâmina de Ébano",
    type: "weapon",
    base_price: 450,
    sold_value: 220,
    amount: 3
  },
  {
    id: 2,
    name: "Poção de Vida",
    type: "consumable",
    base_price: 50,
    sold_value: 20,
    amount: 10
  }
];

function Shop() {
    useEffect(() => {
        document.title = "Vault of Heroes | Loja";
    }, []);

    const [items] = useState(mockItems);
    const [filter, setFilter] = useState("all");

    const filteredItems = filter === "all"
        ? items
        : items.filter(i => i.type === filter);

    return (
        <>
            <h1 className="glow-title">💰🧙‍♂️ Loja do Velho Mago </h1>

            <div className="shop-controls">
                <button onClick={() => setFilter("all")}>Todos</button>
                <button onClick={() => setFilter("weapon")}>Armas</button>
                <button onClick={() => setFilter("armor")}>Armaduras</button>
                <button onClick={() => setFilter("consumable")}>Consumíveis</button>
                <button onClick={() => setFilter("accessory")}>Acessórios</button>
                <button onClick={() => setFilter("utility")}>Utilitários</button>
            </div>

            <MarketTable items={filteredItems} />
        </>
    );
}

export default Shop;