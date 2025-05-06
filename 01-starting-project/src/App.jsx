import Header from "./components/Header/Header.jsx";

import CoreConceptFeature from "./components/CoreConceptFeature.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConceptFeature />
        <Examples />
      </main>
    </div>
  );
}

export default App;
