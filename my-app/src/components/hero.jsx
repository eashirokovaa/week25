import "/Users/katasirokova/week25/my-app/src/style/hero.css";

function Hero(props) {
  return (
    <div className="hero-card">
      <h2 className="hero-name">{props.name}</h2>
      <div className="hero-universe">
        <b>Вселенная:</b> {props.universe}
      </div>
      <div className="hero-superpower">
        <b>Суперсила:</b> {props.superpower}
      </div>
      <img src={props.url} />
    </div>
  );
}

export default Hero;
