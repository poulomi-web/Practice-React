import reactImage from "../../assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "../../data.js";
import CoreConcepts from "../CoreConcepts.jsx";
import "./Header.css";
import TabButton from "../TabButton.jsx";

const ReactDescription = ["Core", "New", "In-Depth"];

function RandomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {ReactDescription[RandomNum(2)]} React concepts you will need for almost
        any app you are going to build!
      </p>
      <section id="core-concepts">
        <ul>
          {/* <CoreConcepts title="Props" desc="Props" image={componentsImage} /> */}
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
        </ul>
      </section>
      <section id="examples">
        <menu>
          <TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
        </menu>
      </section>
    </header>
  );
}
