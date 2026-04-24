function HeroCard({ hero, onClick }) {
  return (
    <div className={`hero-card ${hero.class.toLowerCase()}`} onClick={onClick}>
      <div className="card-inner">

        <div className="hero-image-container">
          <img src={hero.image} alt={hero.name} />
        </div>

        <div className="hero-info">
          <span className="hero-class">{hero.class}</span>
          <h3 className="hero-name">{hero.name}</h3>

          <div className="hero-meta">
            <span>💰 {hero.gold}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroCard;