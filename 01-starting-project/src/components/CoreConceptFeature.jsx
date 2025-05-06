import { CORE_CONCEPTS } from "../data.js";
import CoreConcepts from "../components/CoreConcepts.jsx";

export default function CoreConceptFeature() {
  return (
    <section id="core-concepts" title="Core Concepts">
      <h2>
        <ul>
          {/* <CoreConcepts title="Props" desc="Props" image={componentsImage} /> */}
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcepts key={concept.title} {...concept} />
          ))}
        </ul>
      </h2>
    </section>
  );
}
