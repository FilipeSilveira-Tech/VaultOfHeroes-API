import "./HeroModal.css";

function HeroModal({ hero, onClose }) {
    if (!hero) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>✖</button>

                <div className="modal-body">
                    <img src={hero.image} className="modal-image" />

                    <div className="modal-info">
                        <h2>{hero.name}</h2>
                        <p>Classe: {hero.class}</p>
                        <p>Gold: {hero.gold}</p>
                        <p>Guild: {hero.guild || "Sem guilda"}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeroModal;