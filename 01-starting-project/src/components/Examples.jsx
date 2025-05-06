import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "../components/TabButton.jsx";
import section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  let [clickText, setClickText] = useState(null);
  let tabContent = EXAMPLES[clickText];

  const handleSelect = (selectedBtn) => {
    setClickText(selectedBtn);
  };

  return (
    <section id="examples" title="Examples">
      <h2>
        <Tabs
          buttonContainer="menu"
          button={
            <>
              <TabButton
                onClick={() => handleSelect("Components")}
                isSelected={clickText === "Components"}
              >
                Components
              </TabButton>
              <TabButton
                onClick={() => handleSelect("JSX")}
                isSelected={clickText === "JSX"}
              >
                JSX
              </TabButton>
              <TabButton
                onClick={() => handleSelect("Props")}
                isSelected={clickText === "Props"}
              >
                Props
              </TabButton>
              <TabButton
                onClick={() => handleSelect("State")}
                isSelected={clickText === "State"}
              >
                State
              </TabButton>
            </>
          }
        >
          {!tabContent ? (
            <h4>Please select a tab.</h4>
          ) : (
            <>
              <h4>{tabContent.title}</h4>
              <p>{tabContent.description}</p>
            </>
          )}
        </Tabs>
      </h2>
    </section>
  );
}
