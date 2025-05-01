import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  let [clickText, setClickText] = useState(null);
  let tabContent = EXAMPLES[clickText];

  const handleSelect = (selectedBtn) => {
    setClickText(selectedBtn);
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {/* <CoreConcepts title="Props" desc="Props" image={componentsImage} /> */}
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              onSelect={() => handleSelect("Components")}
              isSelected={clickText === "Components"}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("JSX")}
              isSelected={clickText === "JSX"}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("Props")}
              isSelected={clickText === "Props"}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("State")}
              isSelected={clickText === "State"}
            >
              State
            </TabButton>
          </menu>
          <div>
            {!tabContent ? (
              <h2>Please select a tab.</h2>
            ) : (
              <>
                <h2>{tabContent.title}</h2>
                <p>{tabContent.description}</p>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
