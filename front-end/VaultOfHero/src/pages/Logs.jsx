
import { useEffect, useState } from "react";
import LogItem from "../components/LogItem";

function Logs() {
    const [logs] = useState([
        {
            id: 1,
            hero: "Thalric",
            item: "Poção de Vida",
            amount: 3,
            date: "2026-04-24T04:55:20.968Z"
        }
    ])

    useEffect(() => {
        document.title = "Vault of Heroes | Logs";
    }, []);
    return (
        <>
            <h1 className="glow-title">📜 Logs da Loja</h1>

            <div className="log-container">
                {logs.map(log => (
                    <LogItem key={log.id} log={log} />
                ))}
            </div>
        </>
    );
}

export default Logs;