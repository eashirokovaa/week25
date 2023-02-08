import "./App.css";
import Hero from "./components/Hero";
import {heroes} from "./data"

function App() {
  return (
    <div className="App">
      {heroes.map((hero) => (
        <Hero
          name={hero.name}
          universe={hero.universe}
          superpower={hero.superpower}
          url={hero.photo}
        />
      ))}
    </div>
  );
}

export default App;
