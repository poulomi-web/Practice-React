import reactImage from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

const ReactDescription = ["Core", "New", "In-Depth"];

function RandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}
console.log(...CORE_CONCEPTS);

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.desc} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {ReactDescription[RandomNum(2)]} React concepts you will need for
          almost any app you are going to build!
        </p>
        <section id="core-concepts">
          <ul>
            {/* <CoreConcepts title="Props" desc="Props" image={componentsImage} /> */}
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
