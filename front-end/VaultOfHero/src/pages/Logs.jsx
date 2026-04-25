
import { useEffect, useState } from "react";
import LogItem from "../components/LogItem";
import "./Log.css";

function Logs() {
    useEffect(() => {
        document.title = "Vault of Heroes | Logs";
    }, []);

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadLogs() {
            setLoading(true)
            try {
                const res = await fetch("https://vault-of-heroes-api-hj83.vercel.app/logs");

                if (!res.ok) {
                    throw new Error("Erro ao buscar logs")
                }

                const data = await res.json();
                setLogs(Array.isArray(data) ? data : data.logs || []);
            } catch (err) {
                console.error(err);
                setLogs([]);
            } finally {
                setLoading(false);
            }
        }
        loadLogs();
    }, []);

    return (
        <>
            <h1 className="glow-title">📜 Logs da Loja</h1>

            {loading && (
                <div className="loading-state">
                    Carregando...
                </div>
            )}

            <div className="log-container">
                {logs.map(log => (
                    <LogItem key={log.id} log={log} />
                ))}
            </div>
        </>
    );
}

export default Logs;