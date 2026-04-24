import './LogItem.css';

function LogItem({ log }) {
    const date = new Date(log.date);

    return (
        <div className="log_item">
            <div className="log-time">
                {date.toLocaleString()}
            </div>

            <div className="log-text">
                ⚔️ <strong>{log.hero}</strong> comprou{" "}
                <span className="gold-text">{log.amount}x</span>{" "}
                {log.item}
            </div>
        </div>
    );
}

export default LogItem;