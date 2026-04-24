import { useState, useMemo } from "react";
import { utilsImage } from "../utils/imageMap.js"

const heroes = [
  { id: 1, name: "Thalric Ember" },
  { id: 2, name: "Lyra Swiftwind" }
];

const items = [
  { id: 1, name: "Poção de Vida", type: "consumable" },
  { id: 2, name: "Lâmina de Ébano", type: "weapon" }
];

const inventory = [
  { heroi_id: 1, item_id: 1, amount: 5 },
  { heroi_id: 1, item_id: 2, amount: 1 }
];

// mock de stats (até vir da API)
const heroStats = [
  { heroi_id: 1, gold: 1200, xp: 340, level: 5 },
  { heroi_id: 2, gold: 800, xp: 120, level: 2 }
];

export default function Inventory() {
  const [selectedHeroId, setSelectedHeroId] = useState(null);

  const selectedHero = useMemo(() => {
    return heroes.find((h) => h.id === selectedHeroId);
  }, [selectedHeroId]);

  const stats = useMemo(() => {
    return heroStats.find((h) => h.heroi_id === selectedHeroId);
  }, [selectedHeroId]);

  // aqui está o "join manual"
  const filteredInventory = useMemo(() => {
    if (!selectedHeroId) return [];

    return inventory
      .filter((inv) => inv.heroi_id === selectedHeroId)
      .map((inv) => {
        const item = items.find((i) => i.id === inv.item_id);

        return {
          ...inv,
          itemName: item?.name,
          itemType: item?.type
        };
      });
  }, [selectedHeroId]);

  return (
    <>
        <h1 className="glow-title">🎒 Inventário</h1>
        <div style={{ padding: 20 }}>

            {/* SELEÇÃO DE HERÓI */}
            <div style={{ marginBottom: 20 }}>
                <select
                value={selectedHeroId || ""}
                onChange={(e) => setSelectedHeroId(Number(e.target.value))}
                >
                <option value="">Selecione um herói</option>
                {heroes.map((hero) => (
                    <option key={hero.id} value={hero.id}>
                    #{hero.id} - {hero.name}
                    </option>
                ))}
                </select>
            </div>

            {/* PAINEL DO HERÓI */}
            {selectedHero && stats && (
                <div style={{ marginBottom: 20, border: "1px solid #333", padding: 10 }}>
                <h3>
                    #{selectedHero.id} - {selectedHero.name}
                </h3>

                <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <img src={utilsImage.gold} alt="gold" width={20} height={20} />
                    <span>{stats.gold}</span>
                    </div>

                    <div>XP: {stats.xp}</div>
                    <div>Level: {stats.level}</div>
                </div>
                </div>
            )}

            {/* INVENTÁRIO */}
            <div>
                <h4>Inventário</h4>

                {!selectedHeroId && (
                <p>Selecione um herói</p>
                )}

                {selectedHeroId && filteredInventory.length === 0 && (
                <p>Sem itens</p>
                )}

                {filteredInventory.map((item, index) => (
                <div
                    key={index}
                    style={{
                    border: "1px solid #222",
                    padding: 8,
                    marginBottom: 6
                    }}
                >
                    <div><strong>{item.itemName}</strong></div>
                    <div>Tipo: {item.itemType}</div>
                    <div>Quantidade: {item.amount}</div>
                </div>
                ))}
            </div>
        </div>
    </>
  );
}