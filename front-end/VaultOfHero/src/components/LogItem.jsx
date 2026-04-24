import './LogItem.css';

function LogItem({ log }) {
    const date = new Date(log.data_compra);

    let logTipo;

    if (log.tipo_log == "Venda") {
        logTipo = "Vendeu";
    } else {
        logTipo = "Comprou";
    }

    return (
        <div className='ds-log-item'>
            <div className='ds-log-time'>
                {date ? date.toLocaleTimeString() : "--:--"}
            </div>

            <div className='ds-log-message'>
                <span className='ds-hero'>{log.hero_name}</span>
            
                <span className='ds-action'>
                    {logTipo}
                </span>

                <span className='ds-amount'>
                    {log.amount}x{" "}
                </span>

                <span className='ds-item'>
                    {log.item_name}
                </span>
            </div>
        </div>
    );
}

export default LogItem;